"use strict";
var Command;
(function (Command) {
    class Stock {
        constructor() {
            this.name = 'abc';
            this.quantily = 60;
        }
        buy() {
            console.log(`Stock [ Name: ${this.name}, Quantity:  ${this.quantily}  ] bought`);
        }
        sell() {
            console.log(`Stock [ Name: ${this.name}, Quantity:  ${this.quantily}  ] sold`);
        }
    }
    class BuyStock {
        constructor(abcStock) {
            this.abcStock = abcStock;
        }
        execute() {
            this.abcStock.buy();
        }
    }
    class SellStock {
        constructor(abcStock) {
            this.abcStock = abcStock;
        }
        execute() {
            this.abcStock.sell();
        }
    }
    class Broker {
        constructor() {
            this.order = new Array();
        }
        takeOrder(order) {
            this.order.push(order);
        }
        placeOrder() {
            this.order.forEach((value) => {
                value.execute();
            });
        }
    }
    var stock = new Stock;
    var buyer = new BuyStock(stock);
    var seller = new SellStock(stock);
    var broker = new Broker();
    broker.takeOrder(buyer);
    broker.takeOrder(seller);
    broker.placeOrder();
})(Command || (Command = {}));
//# sourceMappingURL=Command.js.map