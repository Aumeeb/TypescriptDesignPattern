"use strict";
var Facade;
(function (Facade) {
    class Rect {
        draw() {
            console.log('I am a Rect');
        }
    }
    class Circle {
        draw() {
            console.log('I am a Circle');
        }
    }
    class Triple {
        draw() {
            console.log('I am a Triple');
        }
    }
    class ShapeMaker {
        constructor() {
            this.circle = new Circle();
            this.rect = new Rect();
            this.triple = new Triple();
        }
        drawCircle() {
            this.circle.draw();
        }
        drawRect() {
            this.rect.draw();
        }
        drawTriple() {
            this.triple.draw();
        }
    }
})(Facade || (Facade = {}));
