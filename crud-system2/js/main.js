var productImg = document.getElementById("productImg");
var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productDescription = document.getElementById("productDescription");
var productCount = document.getElementById("productCount");
var add_Product = document.getElementById("add_Product");
var delete_Product = document.getElementById("delete_Product");
var row = document.getElementById("row");
var cardImg = document.getElementById("cardImg");
var onSaleRadio = document.getElementById("onSaleRadio");
// var offSaleRadio = document.getElementById("offSaleRadio");
// var spans = document.getElementsByClassName("spans");
// var onsale = document.getElementsByClassName("onsale");
// var offsale = document.getElementsByClassName("offsale");
var productContainer = [];
var currentIndex = null;
if (localStorage.getItem("ourProducts") == null) {
  productContainer = [];
} else {
  productContainer = JSON.parse(localStorage.getItem("ourProducts"));
  displayProduct();
}
function addProduct() {
  var product = {
    img: `img/${productImg.files[0].name}`,
    name: productName.value,
    price: productPrice.value,
    description: productDescription.value,
    count: productCount.value,
  };

  if (currentIndex === null) {
    // add new product
    if (product.count > 0) {
      for (var i = 0; i < product.count; i++) {
        productContainer.push(product);
      }
    } else {
      productContainer.push(product);
    }
  } else {
    // update product
    productContainer[currentIndex] = product;
    currentIndex = null;
    //back button from update to add product
    add_Product.innerHTML = "Add Product";
    add_Product.classList.remove("btn-warning");
    add_Product.classList.add("btn-info");
  }
  localStorage.setItem("ourProducts", JSON.stringify(productContainer));
  displayProduct();
  clearINP();
}
function displayProduct() {
  var productLists = "";
  for (var i = 0; i < productContainer.length; i++) {
    productLists += `
<div class="col-3">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-img">
              <div class="image">
                <img src="${productContainer[i].img}" alt="" />
              </div>
              <div class="spans">
                <span class="onsale">onsale</span>
                <span class="offsale">offsale</span>
              </div>
            </div>
            <div class="card-body">
              <h2>${productContainer[i].name}</h2>
              <span class="span1">${productContainer[i].description}</span>
              <span class="span2">$${productContainer[i].price}</span>
              <div class="row">
                <div class="col-12">
                  <div class="card-plus-minus">
                    <div class="col-3">
                      <div
                        class="card minus-span"
                        onclick="reduceProductCount(${i})"
                      >
                        <a class="btn minus"
                          ><i class="fa-regular fa-minus"></i
                        ></a>
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="card-count">
                        <span> ${productContainer[i].count}</span>
                      </div>
                    </div>
                    <div class="col-3">
                      <div
                        class="card plus-span"
                        onclick="incrementProductCount(${i})"
                      >
                        <a class="btn plus"
                          ><i class="fa-regular fa-plus"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="buttons">
              <div class="row">
                <div class="col-6">
                  <div class="card">
                    <a class="btn update" onclick="updateProduct(${i})">
                      update
                    </a>
                  </div>
                </div>
                <div class="col-6">
                  <div class="card card-btn-delete">
                    <a class="btn delete" onclick="deleteProduct(${i})">
                      delete
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
  row.innerHTML = productLists;
}
function clearINP() {
  productName.value = null;
  productImg.value = null;
  productCount.value = null;
  productDescription.value = null;
  productPrice.value = null;
}
function deleteAll() {
  productContainer.splice(0);
  localStorage.setItem("ourProducts", JSON.stringify(productContainer));
  displayProduct();
}
function deleteProduct(i) {
  productContainer.splice(i, 1);
  localStorage.setItem("ourProducts", JSON.stringify(productContainer));
  displayProduct();
}
function searchProduct(item) {
  var productLists = "";
  for (var i = 0; i < productContainer.length; i++) {
    if (productContainer[i].name.includes(item.trim())) {
      productLists += `
  <div class="col-3">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-img">
              <div class="image">
                <img src="${productContainer[i].img}" alt="" />
              </div>
              <div class="spans">
                <span class="onsale">onsale</span>
                <span class="offsale">offsale</span>
              </div>
            </div>
            <div class="card-body">
              <h2>${productContainer[i].name}</h2>
              <span class="span1">${productContainer[i].description}</span>
              <span class="span2">$${productContainer[i].price}</span>
              <div class="row">
                <div class="col-12">
                  <div class="card-plus-minus">
                    <div class="col-3">
                      <div
                        class="card minus-span"
                        onclick="reduceProductCount(${i})"
                      >
                        <a class="btn minus"
                          ><i class="fa-regular fa-minus"></i
                        ></a>
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="card-count">
                        <span> ${productContainer[i].count}</span>
                      </div>
                    </div>
                    <div class="col-3">
                      <div
                        class="card plus-span"
                        onclick="incrementProductCount(${i})"
                      >
                        <a class="btn plus"
                          ><i class="fa-regular fa-plus"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="buttons">
              <div class="row">
                <div class="col-6">
                  <div class="card">
                    <a class="btn update" onclick="updateProduct(${i})">
                      update
                    </a>
                  </div>
                </div>
                <div class="col-6">
                  <div class="card card-btn-delete">
                    <a class="btn delete" onclick="deleteProduct(${i})">
                      delete
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
    }
    row.innerHTML = productLists;
  }
}
function updateProduct(i) {
  // take values from td in table and put it in the input field
  productName.value = productContainer[i].name;
  productPrice.value = productContainer[i].price;
  productImg.files[0].name = productContainer[i].img;
  productDescription.value = productContainer[i].description;
  currentIndex = i;

  //changing button to update
  add_Product.innerHTML = "Update";
  add_Product.classList.remove("btn-info");
  add_Product.classList.add("btn-warning");
}
function reduceProductCount(i) {
  if (productContainer[i].count > 1) {
    productContainer[i].count--; // Reduce count by 1
  }
  displayProduct();
}
function incrementProductCount(i) {
  if (productContainer[i].count >= 1) productContainer[i].count++; // Reduce count by 1
  displayProduct();
}

function displayOnSale() {
  let productLists = "";
  for (var i = 0; i < productContainer.length; i++) {
    productLists += `
      <div class="col-3">
          <div class="row">
                 <div class="card">
                  <div class="card-img">
                      <img src="${productContainer[i].img}" alt="">
                      <div class="spans">
                        <span class="onsale onsale-visible" style="opacity: 1">onsale</span>
                        <span class="offsale" style="opacity: 0">offsale</span>
                      </div>
                  </div>
                   <div class="card-body">
                      <h2>${productContainer[i].name}</h2>
                      <span class="span1">${productContainer[i].description}</span>
                      <span class="span2">$${productContainer[i].price}</span>
                  </div>
                  <div class="row">
                      <div class="col-3 card-plus-minus">
                          <div class="card minus-span" onclick="reduceProductCount(${i})">
                              <a class="btn minus"><i class="fa-regular fa-minus"></i></a>
                          </div>
                      </div>
                      <div class="col-3 card-count">
                          <span>${productContainer[i].count}</span>
                      </div>
                      <div class="col-3 card plus-span" onclick="incrementProductCount(${i})">
                          <a class="btn plus"><i class="fa-regular fa-plus"></i></a>
                      </div>
                  </div>
                  <div class="row buttons">
                      <div class="col-6">
                          <div class="card">
                              <a class="btn update" onclick="updateProduct(${i})">update</a>
                          </div>
                      </div>
                      <div class="col-6">
                          <div class="card card-btn-delete">
                              <a class="btn delete" onclick="deleteProduct(${i})">delete</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      `;
  }
  row.innerHTML = productLists;
}
function displayOffSale() {
  let productLists = "";
  for (var i = 0; i < productContainer.length; i++) {
    productLists += `
      <div class="col-3">
          <div class="row">
              <div class="card">
                  <div class="card-img">
                      <img src="${productContainer[i].img}" alt="">
                      <div class="spans">
                        <span class="onsale" style="opacity: 0">onsale</span>
                        <span class="offsale offsale-visible" style="opacity: 1">offsale</span>
                      </div>
                  </div>
                  <div class="card-body">
                      <h2>${productContainer[i].name}</h2>
                      <span class="span1">${productContainer[i].description}</span>
                      <span class="span2">$${productContainer[i].price}</span>
                  </div>
                  <div class="row">
                      <div class="col-3 card-plus-minus">
                          <div class="card minus-span" onclick="reduceProductCount(${i})">
                              <a class="btn minus"><i class="fa-regular fa-minus"></i></a>
                          </div>
                      </div>
                      <div class="col-3 card-count">
                          <span>${productContainer[i].count}</span>
                      </div>
                      <div class="col-3 card plus-span" onclick="incrementProductCount(${i})">
                          <a class="btn plus"><i class="fa-regular fa-plus"></i></a>
                      </div>
                  </div>
                  <div class="row buttons">
                      <div class="col-6">
                          <div class="card">
                              <a class="btn update" onclick="updateProduct(${i})">update</a>
                          </div>
                      </div>
                      <div class="col-6">
                          <div class="card card-btn-delete">
                              <a class="btn delete" onclick="deleteProduct(${i})">delete</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      `;
  }
  row.innerHTML = productLists;
}
