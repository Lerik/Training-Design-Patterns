class EqualExpression implements IExpression {
    interpret(leftNumber: number, rightNumber: number): boolean {
        return leftNumber === rightNumber;
    }
}
