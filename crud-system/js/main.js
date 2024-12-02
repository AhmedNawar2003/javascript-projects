// Link Inputs
var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDescription = document.getElementById("productDescription");
var productCount = document.getElementById("productCount");
//  Link Buttons
var add_Product = document.getElementById("add_Product");
var delete_Product = document.getElementById("delete_Product");
// Link tableBody
var t_body = document.getElementById("tBody");
var productContainer = [];
var currentIndex = null;
// ADD_Product function
function addProduct() {
  var product = {
    name: productName.value,
    price: productPrice.value,
    category: productCategory.value,
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
  displayProduct();
  clearINP();
}
// DisplayProduct function
function displayProduct() {
  var productLists = "";
  for (var i = 0; i < productContainer.length; i++) {
    productLists += `
            <tr>
                <td>${i + 1}</td>
                <td>${productContainer[i].name}</td>
                <td>${productContainer[i].price}</td>
                <td>${productContainer[i].category}</td>
                <td>${productContainer[i].description}</td>
                <td><button class="btn btn-danger" onclick="deleteProduct(${i})"> Delete</button></td>
                <td><button class="btn btn-warning" onclick="updateProduct(${i})">Update</button></td>
            </tr> `;
  }
  t_body.innerHTML = productLists;
}
// clearing Inputs
function clearINP() {
  productName.value = null;
  productPrice.value = null;
  productCategory.value = null;
  productDescription.value = null;
  productCount.value = null;
}
// DeleteAll function
function deleteAll() {
  productContainer.splice(0);
  displayProduct();
}
// Delete one Product function
function deleteProduct(i) {
  productContainer.splice(i, 1);
  displayProduct();
}

function updateProduct(i) {
  // take values from td in table and put it in the input field
  productName.value = productContainer[i].name;
  productPrice.value = productContainer[i].price;
  productCategory.value = productContainer[i].category;
  productDescription.value = productContainer[i].description;
  productCount.value = productContainer[i].count;
  currentIndex = i;

  //changing button to update
  add_Product.innerHTML = "Update";
  add_Product.classList.remove("btn-info");
  add_Product.classList.add("btn-warning");
}
