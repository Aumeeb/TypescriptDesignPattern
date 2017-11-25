"use strict";
class Camera {
    constructor() {
        this.cage = new Array();
        this.addAniaml = (animal) => {
            this.cage.push(animal);
            animal.watcher = this;
        };
    }
    watch() {
        this.cage.forEach((v) => {
            if (v.full >= 100) {
                console.warn(`${v.name} is full and it has to go to sleep`);
                v.full = 0;
            }
        });
    }
}
class Feeder {
}
class Aniaml {
    constructor(name) {
        this.full = 0;
        this.eat = () => {
            console.log(`I am ${this.name},  now I have been eaten`);
            this.full += 50;
            this.watcher.watch();
        };
        this.name = name;
    }
}
class Chinchilla extends Aniaml {
    constructor(name) {
        super(name);
    }
}
class Monkey extends Aniaml {
    constructor(name) {
        super(name);
    }
}
let camera = new Camera();
let cls1 = new Chinchilla('michelle');
let cls2 = new Chinchilla('goat');
camera.addAniaml(cls1);
camera.addAniaml(cls2);
cls1.eat();
cls1.eat();
cls2.eat();
cls2.eat();
