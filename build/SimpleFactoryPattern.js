"use strict";
var SimpleFactoryPattern;
(function (SimpleFactoryPattern) {
    class AbstractOperation {
        setNumberA(num) {
            this.numberA = num;
        }
        setNumberB(num) {
            this.numberB = num;
        }
    }
    class AbstractFactory {
    }
    class FactoryAdd extends AbstractFactory {
        createOperation() {
            return new OperationAdd();
        }
    }
    class FactorySub extends AbstractFactory {
        createOperation() {
            return new OperationSub();
        }
    }
    class OperationAdd extends AbstractOperation {
        getResult() {
            return this.numberA + this.numberB;
        }
    }
    class OperationSub extends AbstractOperation {
        getResult() {
            return this.numberA - this.numberB;
        }
    }
    class Factroy {
        static createFactory(inputType) {
            var factory;
            switch (inputType) {
                case '+':
                    factory = new FactoryAdd();
                    break;
                case '-':
                    factory = new FactorySub();
                    break;
                default:
                    factory = new FactoryAdd();
            }
            return factory;
        }
    }
    SimpleFactoryPattern.Factroy = Factroy;
})(SimpleFactoryPattern || (SimpleFactoryPattern = {}));
var absOper = SimpleFactoryPattern.Factroy.createFactory('+').createOperation();
absOper.setNumberA(5);
absOper.setNumberB(5);
var result = absOper.getResult();
console.log(result);
