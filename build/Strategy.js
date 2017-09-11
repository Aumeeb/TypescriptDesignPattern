"use strict";
class Product {
    getPrice() {
        return this.price;
    }
    getCount() {
        return this.count;
    }
    getName() {
        return this.name;
    }
    constructor(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }
}
class Bill {
    constructor(discount) {
        this.products = Array();
        this.discount = discount;
    }
    addProduct(product) {
        this.products.push(product);
    }
    getProductsPrice() {
        var productsPrice = 0;
        this.products.forEach((value) => {
            productsPrice += this.discount.getPrice(value.getPrice()) * value.getCount();
        });
        return productsPrice;
    }
}
class Discount {
}
class Normal extends Discount {
    getPrice(basePrice) {
        return basePrice;
    }
}
class ReturnPrice extends Discount {
    getPrice(basePrice) {
        if (basePrice >= 100) {
            return basePrice - 20;
        }
        else {
            return basePrice;
        }
    }
}
class SalePrice extends Discount {
    getPrice(basePrice) {
        return basePrice * 0.5;
    }
}
var p1 = new Product('yagao', 10, 1);
var p2 = new Product('rice', 100, 2);
var bill = new Bill(new ReturnPrice);
bill.addProduct(p1);
bill.addProduct(p2);
console.log(bill.getProductsPrice());
