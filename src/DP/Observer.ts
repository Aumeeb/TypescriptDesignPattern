namespace Observers {
    class Subject {

        private observers: Array<Observer> = new Array<Observer>()
        private state: number;
        public setState(state: number): void {
            this.state = state;
            this.notifyAllObservers();
        }
        public getState(): number {
            return this.state;
        }
        attach(observer: Observer): void {
            this.observers.push(observer);
        }
        notifyAllObservers() {
            this.observers.forEach((value) => {
                value.update();
            })
        }
    }

    abstract class Observer {
        protected subject: Subject;
        public abstract update(): void;
    }

    class BinaryObserver extends Observer {
        public update(): void {
            console.log("Binary String: " + this.subject.getState().toString(2))
        }

        constructor(subject: Subject) {
            super()
            this.subject = subject;
            this.subject.attach(this);
        }

    }
    class OctalObserver extends Observer {
        constructor(subject: Subject) {
            super()
            this.subject = subject;
            this.subject.attach(this);
        }
        public update(): void {
            console.log("Octal  String: " + this.subject.getState().toString(8))
        }
    }
    class HexObserver extends Observer {
        constructor(subject: Subject) {
            super()
            this.subject = subject;
            this.subject.attach(this);
        }
        public update(): void {
            console.log("Hex  String: " + this.subject.getState().toString(16))
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

}
