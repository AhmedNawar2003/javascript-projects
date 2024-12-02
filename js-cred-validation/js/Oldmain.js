// Link Inputs
var Product_Name = document.getElementById("Product_Name");
var Product_Category = document.getElementById("Product_Category");
var Product_Price = document.getElementById("Product_Price");
var Product_Count = document.getElementById("Product_Count");
// Link Buttons
var Add_Product = document.getElementById("Add_Product");
var Update_Product = document.getElementById("Update_Product");
var Delete_All = document.getElementById("Delete_All");
// Link Table-Body
var tbody = document.getElementById("tbody");
// Link Products-Container
var ProductList = [];
// Link Alerts
var alert = document.querySelectorAll(".alert");
// Add-Product-Function
function AddProduct() {
  var ProductObj = {
    Name: Product_Name.value,
    Category: Product_Category.value,
    Price: Product_Price.value,
    Count: Product_Count.value,
  };
  if (
    ProductObj.Name &&
    ProductObj.Category &&
    ProductObj.Price &&
    ProductObj.Count
  ) {
    var vali = ValidateIfExsits(ProductObj);
    if (vali != -1) {
      ProductList[vali].Count = +ProductList[vali].Count + +ProductObj.Count;
      // ProductList[vali].Count = Number(ProductList[vali].Count) + Number(ProductObj.Count);
    } else {
      if (
        ValidateP_Name(ProductObj.Name) &&
        ValidateP_Category(ProductObj.Category) &&
        ValidateP_Price(ProductObj.Price) &&
        ValidateP_Count(ProductObj.Count)
      ) {
        // Insert Obj inside Array
        ProductList.push(ProductObj);
      } else {
        // IN-VALID
        Product_Price.classList.add("is-invalid");
        alert[2].classList.remove("d-none");
        return;
      }
    }
    Display();
    ClearInputs();
  } else {
    RemoveAlerts();
    if (!ProductObj.Name || !ValidateP_Name(ProductObj.Name)) {
      alert[0].classList.remove("d-none");
      Product_Name.classList.remove("is-valid");
      Product_Name.classList.add("is-invalid");
    } else {
      Product_Name.classList.add("is-valid");
      Product_Name.classList.remove("is-invalid");
    }
    if (!ProductObj.Category || !ValidateP_Category(ProductObj.Category)) {
      alert[1].classList.remove("d-none");
      Product_Category.classList.remove("is-valid");
      Product_Category.classList.add("is-invalid");
    } else {
      Product_Category.classList.add("is-valid");
      Product_Category.classList.remove("is-invalid");
    }
    if (!ProductObj.Price || !ValidateP_Price(ProductObj.Price)) {
      alert[2].classList.remove("d-none");
      Product_Price.classList.remove("is-valid");
      Product_Price.classList.add("is-invalid");
    } else {
      Product_Price.classList.add("is-valid");
      Product_Price.classList.remove("is-invalid");
    }
    if (!ProductObj.Count || !ValidateP_Count(ProductObj.Count)) {
      alert[3].classList.remove("d-none");
      Product_Count.classList.remove("is-valid");
      Product_Count.classList.add("is-invalid");
    } else {
      Product_Count.classList.add("is-valid");
      Product_Count.classList.remove("is-invalid");
    }
  }
}
// VALIDATION FUNCTIONS
function ValidateIfExsits(ProductObj) {
  for (let i = 0; i < ProductList.length; i++) {
    if (
      ProductObj.Name == ProductList[i].Name &&
      ProductObj.Category == ProductList[i].Category &&
      ProductObj.Price == ProductList[i].Price
    ) {
      return i;
    }
  }
  return -1;
}

function ValidateP_Name(Name) {
  return Name.length >= 5 && Name.length <= 50;
}
function ValidateP_Category(Category) {
  return Category.length >= 5 && Category.length <= 20;
}
function ValidateP_Price(Price) {
  if (Price < 1) return false;
  return true;
}
function ValidateP_Count(Count) {
  return Count >= 1;
}

// Remove ALL Alerts
function RemoveAlerts() {
  Product_Name.classList.remove("is-invalid");
  Product_Category.classList.remove("is-invalid");
  Product_Price.classList.remove("is-invalid");
  Product_Count.classList.remove("is-invalid");

  Product_Name.classList.remove("is-valid");
  Product_Category.classList.remove("is-valid");
  Product_Price.classList.remove("is-valid");
  Product_Count.classList.remove("is-valid");

  alert[0].classList.add("d-none");
  alert[1].classList.add("d-none");
  alert[2].classList.add("d-none");
  alert[3].classList.add("d-none");
}

// Diplay-Product-Function
function Display() {
  var Data_Container = ``;
  for (var i = 0; i < ProductList.length; i++) {
    Data_Container += `
            <tr>
              <td>${i + 1}</td>
              <td>${ProductList[i].Name}</td>
              <td>${ProductList[i].Category}</td>
              <td>$${ProductList[i].Price}</td>
              <td>${ProductList[i].Count}</td>
              <td>$${ProductList[i].Price * ProductList[i].Count}</td>
              <td><h3 class="btn btn-warning" onclick="Update(${i})">Update</h3></td>
              <td><h3 class="btn btn-danger" onclick="Delete_Product(${i})">Delete</h3></td>
            </tr>
    `;
  }
  tbody.innerHTML = Data_Container;
}

// Delete-All Products
function Delete_All_Products() {
  ProductList.splice(0); // Remove All Elements in Array
  Display();
}

// Delete-One Product
function Delete_Product(ind) {
  if (ProductList[ind].Count > 1) {
    ProductList[ind].Count--;
  } else {
    // Count = 1
    ProductList.splice(ind, 1); // Remove One Element in Array => Splive(start-Ind , Count-To-Remove)
  }
  Display();
}

// Clear-Inputs
function ClearInputs() {
  Product_Name.value = "";
  Product_Category.value = "";
  Product_Price.value = "";
  Product_Count.value = "";
  RemoveAlerts();
}

var lastIndex = -1;
// Update Function
function Update(ind) {
  Update_Product.classList.remove("d-none");
  Add_Product.classList.add("d-none");
  Product_Name.value = ProductList[ind].Name;
  Product_Category.value = ProductList[ind].Category;
  Product_Price.value = ProductList[ind].Price;
  Product_Count.value = ProductList[ind].Count;
  lastIndex = ind;
}

function UpdateProduct() {
  Add_Product.classList.remove("d-none");
  Update_Product.classList.add("d-none");
  ProductList[lastIndex].Name = Product_Name.value;
  ProductList[lastIndex].Category = Product_Category.value;
  ProductList[lastIndex].Price = Product_Price.value;
  ProductList[lastIndex].Count = Product_Count.value;
  ClearInputs();
  Display();
}
