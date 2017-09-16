namespace Decorator {
    interface Shape {
        draw(): void;
    }
    class Circle implements Shape {
        draw(): void {
            console.log('I am a Circle')
        }

    }

    class Rect implements Shape {
        draw(): void {
            console.log('I am a Rect')
        }
    }

    abstract class ShapeDecorator implements Shape {
        protected decoratedShape: Shape
        constructor(decorated: Shape) {
            this.decoratedShape = decorated;
        }
        draw(): void {
            this.decoratedShape.draw();
        }
    }
    class RedRect extends ShapeDecorator {
        
        constructor(decoratedShape: Shape) {
            super(decoratedShape);

        }

        draw(): void {
            super.draw();
            this.setRedBorder(super.decoratedShape);
        }
        setRedBorder(decoratedShape: Shape): void {
            console.log("Border Color: Red");
        }
    }

    var rect = new Rect();
    new RedRect(rect).draw();
}