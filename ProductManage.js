"use strict";
exports.__esModule = true;
exports.ProductManage = void 0;
var ProductManage = /** @class */ (function () {
    function ProductManage() {
        this.listProduct = [];
    }
    ProductManage.prototype.add = function (t) {
        this.listProduct.push(t);
    };
    ProductManage.prototype.findAll = function () {
        return this.listProduct;
    };
    ProductManage.prototype.filterByName = function (name) {
        var filteredName = [];
        var count = 0;
        for (var i = 0; i < this.listProduct.length; i++) {
            filteredName.push(this.listProduct[i].name);
        }
        for (var i = 0; i < this.listProduct.length; i++) {
            if (filteredName[i].includes(name)) {
                count++;
                console.log("Product: ".concat(this.listProduct[i].name, "\nProduct code: ").concat(this.listProduct[i].code, "\nProduct type: ").concat(this.listProduct[i].type, "\nPrice: ").concat(this.listProduct[i].price, "\nQuantity: ").concat(this.listProduct[i].price));
            }
        }
        if (count == 0) {
            console.log("There's no product with this name");
        }
    };
    ProductManage.prototype.update = function (code, t) {
        var index = this.findByCode(code);
        this.listProduct[index] = t;
    };
    ProductManage.prototype.findByCode = function (code) {
        for (var i = 0; i < this.listProduct.length; i++) {
            if (code == this.listProduct[i].code) {
                return i;
            }
        }
        return -1;
    };
    ProductManage.prototype.remove = function (id) {
        var index = this.findByCode(id);
        this.listProduct.splice(index, 1);
    };
    return ProductManage;
}());
exports.ProductManage = ProductManage;
