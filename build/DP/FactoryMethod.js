"use strict";
class Operation {
    setNumberA(num) {
        this.numberA = num;
    }
    setNumberB(num) {
        this.numberB = num;
    }
}
class OperationAdd extends Operation {
    getResult() {
        return this.numberA + this.numberB;
    }
}
class OperationSub extends Operation {
    getResult() {
        return this.numberA - this.numberB;
    }
}
class OperationDiv extends Operation {
    getResult() {
        return this.numberA / this.numberB;
    }
}
class OperationMul extends Operation {
    getResult() {
        return this.numberA * this.numberB;
    }
}
class OperationFactroy {
    constructor(userInput) {
        this.userInput = userInput;
    }
    createOperation() {
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
