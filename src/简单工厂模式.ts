abstract class Operation {
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
class OperationAdd extends Operation {
    getResult(): number {
        return this.numberA + this.numberB;
    }
}
class OperationSub extends Operation {
    getResult(): number {
        return this.numberA - this.numberB;
    }
}
class OperationDiv extends Operation {
    getResult(): number {
        return this.numberA / this.numberB;
    }
}
class OperationMul extends Operation {
    getResult(): number {
        return this.numberA * this.numberB;
    }
}
class OperationFactroy {
    private userInput: string;
    constructor(userInput: string) {
        this.userInput = userInput;
    }
    public createOperation(): Operation {
        var oper;
        switch (this.userInput) {
            case '+':
                oper = new OperationAdd();
                break;
            case '-':
                oper = new OperationSub();
                break;
            case '*':
                oper = new OperationMul();
                break;
            case '/':
                oper = new OperationDiv();
                break;
            default:
                oper = new OperationAdd();
        }
        return oper;
    }
}


var oper = new OperationFactroy('+').createOperation();

oper.setNumberA(5);
oper.setNumberB(5);
var result = oper.getResult();
console.log(result);