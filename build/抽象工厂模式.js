"use strict";
var AbstractFactoryModel;
(function (AbstractFactoryModel) {
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
    AbstractFactoryModel.Factroy = Factroy;
})(AbstractFactoryModel || (AbstractFactoryModel = {}));
var oper = AbstractFactoryModel.Factroy.createFactory('+').createOperation();
oper.setNumberA(5);
oper.setNumberB(5);
var result = oper.getResult();
console.log(result);
