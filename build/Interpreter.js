"use strict";
var Interpreter;
(function (Interpreter) {
    class TerminalExpression {
        constructor(data) {
            this.data = data;
        }
        interpret(context) {
            if (context.indexOf(this.data) > 0) {
                return true;
            }
            return false;
        }
    }
    class OrExpression {
        constructor(expr1, expr2) {
            this.expr1 = null;
            this.expr2 = null;
            this.expr1 = expr1;
            this.expr2 = expr2;
        }
        interpret(context) {
            if (this.expr1 != null && this.expr2 != null) {
                return this.expr1.interpret(context) || this.expr2.interpret(context);
            }
            else {
                return false;
            }
        }
    }
    class AndExpression {
        constructor(expr1, expr2) {
            this.expr1 = null;
            this.expr2 = null;
            this.expr1 = expr1;
            this.expr2 = expr2;
        }
        interpret(context) {
            if (this.expr1 != null && this.expr2 != null) {
                return this.expr1.interpret(context) && this.expr2.interpret(context);
            }
            else {
                return false;
            }
        }
    }
    let robert = new TerminalExpression("Robert");
    let john = new TerminalExpression("John");
    let and = new OrExpression(robert, john);
    console.log('John is male' + and.interpret('John'));
})(Interpreter || (Interpreter = {}));
