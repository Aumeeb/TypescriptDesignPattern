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
})(Facade || (Facade = {}));
