class NotEqualExpression implements IExpression {
    interpret(leftNumber: number, rightNumber: number): boolean {
        return leftNumber !== rightNumber;
    }
}
