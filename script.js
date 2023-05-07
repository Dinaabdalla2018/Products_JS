var pname = document.getElementById("productName")
var pprice = document.getElementById("productPrice")
var pcategory = document.getElementById("productCategory")
var pinfo = document.getElementById("productInfo")
var list_product = []
var btn = document.getElementById("addButton")

function addProduct() {
  if (btn.textContent == "Add Product") {
    var product = {
      id: list_product.length,
      name: pname.value,
      price: pprice.value,
      category: pcategory.value,
      desc: pinfo.value
    }
    list_product.push(product)
    display()
  } else if (btn.textContent == "Update Product") {
    list_product[objIndex].name = pname.value;
    list_product[objIndex].price = pprice.value;
    list_product[objIndex].category = pcategory.value;
    list_product[objIndex].desc = pinfo.value;
    display();
    document.getElementById("addButton").textContent = "Add Product";
  }
  pname.value = "";
    pprice.value = "";
    pcategory.value = "";
    pinfo.value = ""

}

function display() {
  var content = ``;
  document.getElementById("tablerow").innerHTML = content;
  for (let index = 0; index < list_product.length; index++) {
    content += ` <tr>
        <td>${index}</td>
        <td>${list_product[index].name}</td>
        <td>${list_product[index].price}</td>
        <td>${list_product[index].category}</td>
        <td>${list_product[index].desc}</td>
        <td><button onclick="deleteproduct(${index})" class="btn btn-danger">Delete</button></td>
        <td><button onclick="updateProduct(${index})" class="btn btn-warning">Update</button></td>
      </tr>`

  }
  document.getElementById("tablerow").innerHTML = content;
}

function deleteproduct(index) {
  list_product.splice(index, 1)
  display()
}

function updateProduct(index) {

  objIndex = list_product.findIndex((obj => obj.id == list_product[index].id));
  console.log(objIndex)
  pname.value = list_product[objIndex].name;
  pprice.value = list_product[objIndex].price;
  pcategory.value = list_product[objIndex].category;
  pinfo.value = list_product[objIndex].desc;
  btn.textContent = "Update Product";
}

let student = {
  id: 1,
};
let tution = {
  id: 2,
};
let school = {
  id: 3,
};
student.__proto__ = school; //level1 inheritance
student.__proto__ = tution; //level2 inheritance
console.log(student); //the student object's property