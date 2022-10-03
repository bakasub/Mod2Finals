import {Product} from "./Product";

export class ProductManage {
    listProduct: Product[] = []

    add(t: Product) {
        this.listProduct.push(t)
    }

    findAll() {
        return this.listProduct
    }

    filterByName(name) {
        let filteredName = [];
        let count = 0;
        for (let i = 0; i < this.listProduct.length; i++) {
            filteredName.push(this.listProduct[i].name)
        }
        for (let i = 0; i < this.listProduct.length; i++) {
            if (filteredName[i].includes(name)) {
                count++;
                console.log(`Product: ${this.listProduct[i].name}\nProduct code: ${this.listProduct[i].code}\nProduct type: ${this.listProduct[i].type}\nPrice: ${this.listProduct[i].price}\nQuantity: ${this.listProduct[i].price}`)
            }
        }
        if (count == 0){
            console.log(`There's no product with this name`)
        }
    }

    update(code: number, t: Product) {
        let index = this.findByCode(code);
        this.listProduct[index] = t;
    }

    findByCode(code: number) {
        for (let i = 0; i < this.listProduct.length; i++) {
            if (code == this.listProduct[i].code) {
                return i;
            }
        }
        return -1;
    }

    remove(id: number): void {
        let index = this.findByCode(id);
        this.listProduct.splice(index, 1);
    }
}