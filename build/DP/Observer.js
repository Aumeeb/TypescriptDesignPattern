"use strict";
var Observers;
(function (Observers) {
    class Subject {
        constructor() {
            this.observers = new Array();
        }
        setState(state) {
            this.state = state;
            this.notifyAllObservers();
        }
        getState() {
            return this.state;
        }
        attach(observer) {
            this.observers.push(observer);
        }
        notifyAllObservers() {
            this.observers.forEach((value) => {
                value.update();
            });
        }
    }
    class Observer {
    }
    class BinaryObserver extends Observer {
        update() {
            console.log("Binary String: " + this.subject.getState().toString(2));
        }
        constructor(subject) {
            super();
            this.subject = subject;
            this.subject.attach(this);
        }
    }
    class OctalObserver extends Observer {
        constructor(subject) {
            super();
            this.subject = subject;
            this.subject.attach(this);
        }
        update() {
            console.log("Octal  String: " + this.subject.getState().toString(8));
        }
    }
    class HexObserver extends Observer {
        constructor(subject) {
            super();
            this.subject = subject;
            this.subject.attach(this);
        }
        update() {
            console.log("Hex  String: " + this.subject.getState().toString(16));
        }
    }
    var subject = new Subject();
    new HexObserver(subject);
    new OctalObserver(subject);
    new BinaryObserver(subject);
    console.log("First state change: 12");
    subject.setState(12);
    console.log("First state change: 10");
    subject.setState(10);
})(Observers || (Observers = {}));
//# sourceMappingURL=Observer.js.map