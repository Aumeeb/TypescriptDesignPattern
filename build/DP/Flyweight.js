"use strict";
class Shape {
}
class Factory {
    constructor() {
        this.createShape = (color) => {
            var exists = false;
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
            }
            else {
                return _shape;
            }
        };
        this.shape = new Shape();
        this.shape.list = new Array();
    }
}
class Rect extends Shape {
}
var myFactory = new Factory();
myFactory.createShape('red');
myFactory.createShape('red');
myFactory.createShape('red');
myFactory.createShape('blue');
console.log(myFactory.shape.list);
//# sourceMappingURL=Flyweight.js.map