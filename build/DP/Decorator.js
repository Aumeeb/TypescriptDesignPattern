"use strict";
var Decorator;
(function (Decorator) {
    class Circle {
        draw() {
            console.log('I am a Circle');
        }
    }
    class Rect {
        draw() {
            console.log('I am a Rect');
        }
    }
    class ShapeDecorator {
        constructor(decorated) {
            this.decoratedShape = decorated;
        }
        draw() {
            this.decoratedShape.draw();
        }
    }
    class RedRect extends ShapeDecorator {
        constructor(decoratedShape) {
            super(decoratedShape);
        }
        draw() {
            super.draw();
            this.setRedBorder(super.decoratedShape);
        }
        setRedBorder(decoratedShape) {
            console.log("Border Color: Red");
        }
    }
    var rect = new Rect();
    new RedRect(rect).draw();
})(Decorator || (Decorator = {}));
