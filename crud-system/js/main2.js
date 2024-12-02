// Link Inputs
var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDescription = document.getElementById("productDescription");
var productCount = document.getElementById("productCount");
// Link Buttons
var add_Product = document.getElementById("add_Product");
var delete_Product = document.getElementById("delete_Product");
// Link tableBody
var t_body = document.getElementById("tBody");
var productContainer = [];
var currentIndex = -1;
// addProduct function
function addProduct() {
  var product = {
    name: productName.value,
    price: parseFloat(productPrice.value),
    category: productCategory.value,
    description: productDescription.value,
    count: parseInt(productCount.value),
  };
  if (currentIndex >= 0) {
    productContainer[currentIndex] = product;
    currentIndex = -1;
  } else {
    productContainer.push(product);
  }

  displayProduct();
  clearINP();
}
// displayProduct function
function displayProduct() {
  var productLists = "";
  for (var i = 0; i < productContainer.length; i++) {
    productLists += `
      <tr>
        <td>${i + 1}</td>
        <td>${productContainer[i].name}</td>
        <td>$${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].description}</td>
        <td>${productContainer[i].count}</td>
         <td>$${productContainer[i].price * productContainer[i].count}</td>
        <td><button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button></td>
        <td><button class="btn btn-warning" onclick="updateProduct(${i})">update</button></td>
      </tr>`;
  }
  t_body.innerHTML = productLists;
}
// clearing Inputs function
function clearINP() {
  productName.value = null;
  productPrice.value = null;
  productCategory.value = null;
  productDescription.value = null;
  productCount.value = null;
}
// Delete all function
function deleteAll() {
  productContainer.splice(0);
  displayProduct();
}
// Delete one product
function deleteProduct(i) {
  if (productContainer[i].count > 1) {
    productContainer[i].count--; // Reduce count by 1
  } else {
    // count=1 
    productContainer.splice(i, 1); // Remove product if count reaches 0
  }
  displayProduct();
}
