namespace BuilderPattern {
    interface Item {
        name(): string;
        packing(): Packing;
        price(): number;
    }
    interface Packing {
        pack(): string;
    }
    class Wrapper implements Packing {
        pack(): string {
            return 'packing'
        }
    }
    class Bottle implements Packing {
        pack(): string {
            return 'Bottle'
        }
    }
    abstract class Burger implements Item {
        abstract name(): string;
        packing(): Packing {
            return new Wrapper();
        }
        abstract price(): number;
    }
    abstract class Juice implements Item {
        abstract name(): string;
        packing(): Packing {
            return new Bottle()
        }
        abstract price(): number;
    }
    //step 4
    class BeefBurger extends Burger {
        name(): string {
            return 'BeefBurger';
        }
        price(): number {
            return 20;
        }
    }
    class ChickenBurger extends Burger {
        name(): string {
            return 'ChickenBurger';
        }
        price(): number {
            return 15;
        }
    }
    class Apple extends Juice {
        name(): string {
            return 'Apple'
        }
        price(): number {
            return 10;
        }
    }

    class Restaurant {
        items: Array<Item> = new Array<Item>();
        addItem(item: Item) {
            this.items.push(item);
        }

        printBill() {
            var totalPrice:number =0;
            this.items.forEach((value) => {
                console.log(`name : ${value.name()} | price :${value.price()}`)
                totalPrice+=value.price();
            })
            console.log(`total : $${totalPrice.toString()}`)
        }
    }


    let myRestaurant = new Restaurant()
    myRestaurant.addItem(new Apple())
    myRestaurant.addItem(new BeefBurger())
    myRestaurant.addItem(new ChickenBurger())

    myRestaurant.printBill()
}