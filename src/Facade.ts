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

    class ShapeMaker {
        private circle: Shape;
        private rect: Rect;
        private triple: Triple;

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

}

/**
 * 外观模式 一种较为创建的设计模式, ,首先有一个行为接口, 定义一些动作行为. 
 * 许多类分别实现这个相同的行为,如 猴子,老鼠,猪, 继承了 吃 , 跑, 跳行为
 * 在另外一个被成为外观类中,通过构造函数分别初始化  猴子 老虎 猪,并且将他们的类型实例私有化保存.
 * 通过方法对外公开 他们的各自的 吃, 跑, 条行为, 如猪吃饭,老虎吃饭,  猪跳跃,猴子跳跃,
 */