namespace Interpreter {
    interface Expression {
        interpret(context: string): boolean;
    }


    class TerminalExpression implements Expression {

        private data: string;

        constructor(data: string) {
            this.data = data;
        }


        interpret(context: string): boolean {
            if (context.indexOf(this.data) > 0) {  //context变量是否包含this.data字符串
                return true;
            }
            return false;
        }
    }
    class OrExpression implements Expression {

        private expr1: Expression | null = null;
        private expr2: Expression | null = null;

        constructor(expr1: Expression, expr2: Expression) {
            this.expr1 = expr1;
            this.expr2 = expr2;
        }

        interpret(context: string): boolean {
            if (this.expr1 != null && this.expr2 != null) {
                return this.expr1.interpret(context) || this.expr2.interpret(context);
            } else {
                return false;
            }
        }
    }

    class AndExpression implements Expression {

        private expr1: Expression | null = null;
        private expr2: Expression | null = null;

        constructor(expr1: Expression, expr2: Expression) {
            this.expr1 = expr1;
            this.expr2 = expr2;
        }

        interpret(context: string): boolean {
            if (this.expr1 != null && this.expr2 != null) {
                return this.expr1.interpret(context) && this.expr2.interpret(context);
            } else {
                return false;
            }
        }
    }
    let robert = new TerminalExpression("Robert");
    let john = new TerminalExpression("John");

    let and = new AndExpression(robert, john);
    console.log('John is male'+and.interpret('John'));
}