namespace Command {
    interface Order {
        execute(): void;
    }
    class Stock {
        private name: string;
        private quantily: number;

        constructor() {
            this.name = 'abc';
            this.quantily = 60;
        }
        buy(): void {
            console.log(`Stock [ Name: ${this.name}, Quantity:  ${this.quantily}  ] bought`)
        }
        sell(): void {
            console.log(`Stock [ Name: ${this.name}, Quantity:  ${this.quantily}  ] sold`);
        }
    }
    class BuyStock implements Order {
        private abcStock: Stock;

        constructor(abcStock: Stock) {
            this.abcStock = abcStock;
        }

        execute(): void {
            this.abcStock.buy();
        }
    }
    class SellStock implements Order {
        private abcStock: Stock;

        constructor(abcStock: Stock) {
            this.abcStock = abcStock;
        }

        execute(): void {
            this.abcStock.sell();
        }
    }
    class Broker {
        constructor() {
            this.order = new Array<Order>();
        }
        private order: Array<Order>;

        takeOrder(order: Order): void {
            this.order.push(order);
        }
        placeOrder(): void {
            this.order.forEach((value) => {
                value.execute();
            })
        }
    }

    var stock = new Stock;
    var buyer = new BuyStock(stock);
    var seller = new SellStock(stock);


    var broker = new Broker();
    broker.takeOrder(buyer);
    broker.takeOrder(seller);

    broker.placeOrder();
}
/**
 * 命令模式
 */