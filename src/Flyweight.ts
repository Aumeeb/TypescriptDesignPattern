//创建一个类父类
class Shape {
    list: Array<Shape>;
    color: string;
    fontSize: number;
}
//工厂类
class Factory {
    shape: Shape;
    constructor() {
        this.shape = new Shape();
        this.shape.list = new Array<Shape>();
    }
    createShape = (color: string): Shape => {
        var  exists = false;
        var _shape = new Shape();
        this.shape.list.forEach((value, index) => {
            if (value.color == color) {
                exists = true;
                _shape = value;
            }
        });
        if (!exists) {
            var rect = new Rect();
            rect.color = color;
            this.shape.list.push(rect);
            return rect;
        } else {
            return _shape;
        }
    }
}
//正方形子类
class Rect extends Shape {
    name: string;
}
var myFactory = new Factory();
myFactory.createShape('red');
myFactory.createShape('red');
myFactory.createShape('red');
myFactory.createShape('blue');
console.log(myFactory.shape.list);

/**
 * 解决反复创建相同的实例而导致暂用过多的资源浪费
 * 利用Factory类管理Shape类的子类创建好的实例,当用户创建新实例的时候,优先去Factory去寻找是否已经有相同的实例,如果没有则创建新的实例返回!
 */