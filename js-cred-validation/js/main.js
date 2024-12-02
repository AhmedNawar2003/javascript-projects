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
// Validate
var valiName = false;
var valiCat = false;
var valiPrice = false;
var valiCount = false;

// Add-Product-Function
function AddProduct() {
  var ProductObj = {
    Name: Product_Name.value,
    Category: Product_Category.value,
    Price: Product_Price.value,
    Count: Product_Count.value,
  };
  if (valiName && valiCat && valiPrice && valiCount) {
    // Insert Obj inside Array
    ProductList.push(ProductObj);
    Product_Name.classList.remove("is-valid");
    Product_Category.classList.remove("is-valid");
    Product_Price.classList.remove("is-valid");
    Product_Count.classList.remove("is-valid");
    Display();
    ClearInputs();
  } else {
    if (!valiName) {
      Product_Name.classList.add("is-invalid");
      alert[0].classList.remove("d-none");
    }
    if (!valiCat) {
      Product_Category.classList.add("is-invalid");
      alert[1].classList.remove("d-none");
    }
    if (!valiPrice) {
      Product_Price.classList.add("is-invalid");
      alert[2].classList.remove("d-none");
    }
    if (!valiCount) {
      Product_Count.classList.add("is-invalid");
      alert[3].classList.remove("d-none");
    }
  }
}
// Display-Product-Function
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
    ProductList.splice(ind, 1); // Remove One Element in Array => Splice(start-Ind , Count-To-Remove)
  }
  Display();
}

// Clear-Inputs
function ClearInputs() {
  Product_Name.value = "";
  Product_Category.value = "";
  Product_Price.value = "";
  Product_Count.value = "";
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

// Product_Name.addEventListener("blur", function () {
//   var validate = /[A-Za-z][a-zA-Z]{4,19}/;
//   if (validate.test(Product_Name.value)) {
//     Product_Name.classList.add("is-valid");
//     Product_Name.classList.remove("is-invalid");
//     alert[0].classList.add("d-none");
//     valiName = true;
//   } else {
//     Product_Name.classList.remove("is-valid");
//     Product_Name.classList.add("is-invalid");
//     alert[0].classList.remove("d-none");
//   }
// });
// Product_Category.addEventListener("blur", function () {
//   var validate = /[A-Za-z][a-zA-Z]{4,19}/;
//   console.log(Product_Category.value);
//   if (validate.test(Product_Category.value)) {
//     Product_Category.classList.add("is-valid");
//     Product_Category.classList.remove("is-invalid");
//     alert[1].classList.add("d-none");
//     valiCat = true;
//   } else {
//     Product_Category.classList.remove("is-valid");
//     Product_Category.classList.add("is-invalid");
//     alert[1].classList.remove("d-none");
//   }
// });
// Product_Price.addEventListener("blur", function () {
//   var validate = /^(?!0)[1-9]\d{0,8}$/;
//   console.log(Product_Price.value);
//   if (validate.test(Product_Price.value)) {
//     Product_Price.classList.add("is-valid");
//     Product_Price.classList.remove("is-invalid");
//     alert[2].classList.add("d-none");
//     valiPrice = true;
//   } else {
//     Product_Price.classList.remove("is-valid");
//     Product_Price.classList.add("is-invalid");
//     alert[2].classList.remove("d-none");
//   }
// });
// Product_Count.addEventListener("blur", function () {
//   var validate = /^(?!0)[1-9]\d{0,3}$|^(10000)$/;
//   console.log(Product_Count.value);
//   if (validate.test(Product_Count.value)) {
//     Product_Count.classList.add("is-valid");
//     Product_Count.classList.remove("is-invalid");
//     alert[3].classList.add("d-none");
//     valiCount = true;
//   } else {
//     Product_Count.classList.remove("is-valid");
//     Product_Count.classList.add("is-invalid");
//     alert[3].classList.remove("d-none");
//   }
// });

Product_Name.addEventListener("blur", function () {
  var validate = /[A-Za-z][a-zA-Z]{4,19}/;
  if (validate.test(Product_Name.value)) {
    Product_Name.classList.add("is-valid");
    Product_Name.classList.remove("is-invalid");
    alert[0].classList.add("d-none");
    valiName = true;
  } else {
    Product_Name.classList.remove("is-valid");
    Product_Name.classList.add("is-invalid");
    alert[0].classList.remove("d-none");
  }
});
Product_Category.addEventListener("blur", function () {
  var validate = /[A-Za-z][a-zA-Z]{4,19}/;
  if (validate.test(Product_Category.value)) {
    Product_Category.classList.add("is-valid");
    Product_Category.classList.remove("is-invalid");
    alert[1].classList.add("d-none");
    valiCat = true;
  } else {
    Product_Name.classList.remove("is-valid");
    Product_Name.classList.add("is-invalid");
    alert[1].classList.remove("d-none");
  }
});
Product_Price.addEventListener("blur", function () {
  var validate = /^(?!0)[1-9]\d{0,8}$/;
  if (validate.test(Product_Price.value)) {
    Product_Price.classList.add("is-valid");
    Product_Price.classList.remove("is-invalid");
    alert[2].classList.add("d-none");
    valiPrice = true;
  } else {
    Product_Price.classList.remove("is-valid");
    Product_Price.classList.add("is-invalid");
    alert[2].classList.remove("d-none");
  }
});
Product_Count.addEventListener("blur", function () {
  var validate = /^(?!0)[1-9]\d{0,3}$|^(10000)$/;
  if (validate.test(Product_Count.value)) {
    Product_Count.classList.add("is-valid");
    Product_Count.classList.remove("is-invalid");
    alert[3].classList.add("d-none");
    valiCount = true;
  } else {
    Product_Count.classList.remove("is-valid");
    Product_Count.classList.add("is-invalid");
    alert[3].classList.remove("d-none");
  }
});
