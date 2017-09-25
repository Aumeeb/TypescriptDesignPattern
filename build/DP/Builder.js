"use strict";
var BuilderPattern;
(function (BuilderPattern) {
    class Wrapper {
        pack() {
            return 'packing';
        }
    }
    class Bottle {
        pack() {
            return 'Bottle';
        }
    }
    class Burger {
        packing() {
            return new Wrapper();
        }
    }
    class Juice {
        packing() {
            return new Bottle();
        }
    }
    class BeefBurger extends Burger {
        name() {
            return 'BeefBurger';
        }
        price() {
            return 20;
        }
    }
    class ChickenBurger extends Burger {
        name() {
            return 'ChickenBurger';
        }
        price() {
            return 15;
        }
    }
    class Apple extends Juice {
        name() {
            return 'Apple';
        }
        price() {
            return 10;
        }
    }
    class Restaurant {
        constructor() {
            this.items = new Array();
        }
        addItem(item) {
            this.items.push(item);
        }
        printBill() {
            var totalPrice = 0;
            this.items.forEach((value) => {
                console.log(`name : ${value.name()} | price :${value.price()}`);
                totalPrice += value.price();
            });
            console.log(`total : $${totalPrice.toString()}`);
        }
    }
    let myRestaurant = new Restaurant();
    myRestaurant.addItem(new Apple());
    myRestaurant.addItem(new BeefBurger());
    myRestaurant.addItem(new ChickenBurger());
    myRestaurant.printBill();
})(BuilderPattern || (BuilderPattern = {}));
