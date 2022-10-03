import {ProductManage} from "./ProductManage";
import {Product} from "./Product";

let input = require('readline-sync')

let productManage = new ProductManage()

function menu() {
    let menu = `    1.Display all products
    2.Search product by name
    3.Add a product
    4.Edit a product
    5.Remove a product
    6.Exit`
    let choice
    do {
        console.log(menu);
        choice = input.question();
        switch (choice) {
            case '1':
                displayAllProducts()
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


    } while (choice != 0)
}

function displayAllProducts() {
    if (productManage.listProduct.length == 0) {
        console.log(`The product database is empty`)
    } else {
        console.log(productManage.findAll())
    }

}

function findByName() {
    let name = input.question(`Input your search keyword\n`)
    productManage.filterByName(name)
}

function addProduct() {
    let code = input.question(`Input product code\n`);
    for (let i = 0; i < productManage.listProduct.length; i++) {
        if (code == productManage.listProduct[i].code ){
            return console.log(`This product code already existed`);
        }
    }
    let name = input.question(`Input product name\n`);
    let type = input.question(`Input product type\n`);
    let price = input.question(`Input product price\n`);
    let quantity = input.question(`Input the number of this product\n`);
    let time = new Date();
    let today = `${time.getDate()}/${time.getMonth() + 1}`;
    let description = input.question(`Input product description\n`);

    let product = new Product(code, name, type, price, quantity, today, description)
    productManage.add(product);
}

function updateProduct() {
    let code = input.question(`Input the product's code to be edited\n`);
    if (productManage.findByCode(code) == -1) {
        console.log(`This product doesnt exist`)
    } else {
        let name = input.question(`Input new product name\n`);
        let type = input.question(`Input new product type\n`);
        let price = input.question(`Input product price\n`);
        let quantity = input.question(`Input the number of this product\n`);
        let time = new Date();
        let today = `${time.getDate()}/${time.getMonth() + 1}`;
        let description = input.question(`Input product description\n`);

        let product = new Product(code, name, type, price, quantity, today, description);
        productManage.update(code, product);
    }
}

function removeProduct() {
    let code = input.question(`Input the product's code to remove\n`);
    if (productManage.findByCode(code) == -1) {
        console.log(`This product doesnt exist`);
    } else {
        productManage.remove(code);
        console.log(`Removed said product`);
    }
}

menu()