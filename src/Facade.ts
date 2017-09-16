namespace Facade {
    interface Shape {
        draw(): void;
    }
    class Rect implements Shape {
        draw(): void {
            console.log('I am a Rect')
        }
    }
    class Circle implements Shape {
        draw(): void {
            console.log('I am a Circle')
        }
    }

    class Triple implements Shape {
        draw(): void {
            console.log('I am a Triple')
        }
    }


}