class Product  {
     
    getPrice(): number {
        return this.price;
    }
    getCount(): number {
        return this.count;
    }
    getName(): string {
        return this.name;
    }
    private price: number;
    private name: string;

    private count: number;
    constructor(name: string, price: number, count: number) {
        this.name = name;
        this.price = price;
        this.count = count;
     
    }
}
class Bill {
    private products = Array<Product>();
    discount : Discount;
    constructor(discount:Discount) {
        this.discount=discount;
    }

    addProduct(product: Product) {
        this.products.push(product);
    }

    getProductsPrice(): number {
        var productsPrice = 0;
        this.products.forEach((value) => {
            productsPrice+= this.discount.getPrice(value.getPrice())*value.getCount();
        })
        return productsPrice;
    }

}

abstract class Discount{  
    abstract getPrice(basePrice:number): number;
}
class Normal extends Discount{
    getPrice(basePrice: number): number {
        return basePrice;
    }
}
class ReturnPrice extends Discount{
    getPrice(basePrice: number): number {
        if(basePrice>=100){
            return basePrice-20;
        }else{
            return basePrice;
        }
    }
}
class SalePrice extends Discount{
    getPrice(basePrice: number): number {
        return basePrice * 0.5;
    }
}

var p1 = new Product('yagao', 10, 1);
var p2 = new Product('rice', 100, 2);

var bill = new Bill(new ReturnPrice);
bill.addProduct(p1);
bill.addProduct(p2);
console.log(bill.getProductsPrice())


/**
 * 策略的重点在于当某一个行为有多种可能但只有一种结果的同事 利用多态来隔离变化
 */