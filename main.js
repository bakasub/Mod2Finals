"use strict";
exports.__esModule = true;
var ProductManage_1 = require("./ProductManage");
var Product_1 = require("./Product");
var input = require('readline-sync');
var productManage = new ProductManage_1.ProductManage();
function menu() {
    var menu = "    1.Display all products\n    2.Search product by name\n    3.Add a product\n    4.Edit a product\n    5.Remove a product\n    6.Exit";
    var choice;
    do {
        console.log(menu);
        choice = input.question();
        switch (choice) {
            case '1':
                displayAllProducts();
                break;
            case '2':
                findByName();
                break;
            case '3':
                addProduct();
                break;
            case '4':
                updateProduct();
                break;
            case '5':
                removeProduct();
                break;
            case '6':
                choice = 0;
                break;
        }
    } while (choice != 0);
}
function displayAllProducts() {
    if (productManage.listProduct.length == 0) {
        console.log("The product database is empty");
    }
    else {
        console.log(productManage.findAll());
    }
}
function findByName() {
    var name = input.question("Input your search keyword\n");
    productManage.filterByName(name);
}
function addProduct() {
    var code = input.question("Input product code\n");
    for (var i = 0; i < productManage.listProduct.length; i++) {
        if (code == productManage.listProduct[i].code) {
            return console.log("This product code already existed");
        }
    }
    var name = input.question("Input product name\n");
    var type = input.question("Input product type\n");
    var price = input.question("Input product price\n");
    var quantity = input.question("Input the number of this product\n");
    var time = new Date();
    var today = "".concat(time.getDate(), "/").concat(time.getMonth() + 1);
    var description = input.question("Input product description\n");
    var product = new Product_1.Product(code, name, type, price, quantity, today, description);
    productManage.add(product);
}
function updateProduct() {
    var code = input.question("Input the product's code to be edited\n");
    if (productManage.findByCode(code) == -1) {
        console.log("This product doesnt exist");
    }
    else {
        var name_1 = input.question("Input new product name\n");
        var type = input.question("Input new product type\n");
        var price = input.question("Input product price\n");
        var quantity = input.question("Input the number of this product\n");
        var time = new Date();
        var today = "".concat(time.getDate(), "/").concat(time.getMonth() + 1);
        var description = input.question("Input product description\n");
        var product = new Product_1.Product(code, name_1, type, price, quantity, today, description);
        productManage.update(code, product);
    }
}
function removeProduct() {
    var code = input.question("Input the product's code to remove\n");
    if (productManage.findByCode(code) == -1) {
        console.log("This product doesnt exist");
    }
    else {
        productManage.remove(code);
        console.log("Removed said product");
    }
}
menu();
