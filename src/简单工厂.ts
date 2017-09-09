namespace SimpleFactoryModel {
    //创建一个抽象计算类
    abstract class AbstractOperation {
        protected numberA: number;
        protected numberB: number;
        abstract getResult(): number;

        setNumberA(num: number) {
            this.numberA = num;
        }
        setNumberB(num: number) {
            this.numberB = num;
        }
    }
    //创建一个抽象工厂
    abstract class AbstractFactory {
        abstract createOperation(): AbstractOperation;
    }


    class FactoryAdd extends AbstractFactory {
        createOperation(): AbstractOperation {
            return new OperationAdd();
        }
    }
    class FactorySub extends AbstractFactory {
        createOperation(): AbstractOperation {
            return new OperationSub();
        }
    }

    class OperationAdd extends AbstractOperation {
        getResult(): number {
            return this.numberA + this.numberB;
        }
    }
    class OperationSub extends AbstractOperation {
        getResult(): number {
            return this.numberA - this.numberB;
        }
    }

    export class Factroy {
        public static createFactory(inputType: string): AbstractFactory {
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
}

var absOper = SimpleFactoryModel.Factroy.createFactory('+').createOperation();

absOper.setNumberA(5);
absOper.setNumberB(5);
var result = absOper.getResult();
console.log(result);