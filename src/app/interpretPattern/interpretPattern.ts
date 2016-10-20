interface IInterpretPattern {
    leftNumber: number;
    rightNumber: number;
    option: string;
    conditions: string[];
    result: boolean;
    equalExpression: IExpression;
    notEqualExpression: IExpression;
    greaterThanEqualExpression: IExpression;
    greaterThanExpression: IExpression;
    lessThanEqualExpression: IExpression;
    lessThanExpression: IExpression;
    evaluateExpression(): void;
    clear(): void;
}

class InterpretPattern implements IInterpretPattern {
    static $inject: any = ['$state'];
    leftNumber: number;
    rightNumber: number;
    option: string;
    conditions: string[] = ['=', '!=', '>', '<', '>=', '<='];
    result: boolean;
    equalExpression: IExpression;
    notEqualExpression: IExpression;
    greaterThanEqualExpression: IExpression;
    greaterThanExpression: IExpression;
    lessThanEqualExpression: IExpression;
    lessThanExpression: IExpression;

    constructor(private $state: any) {
        this.equalExpression = new EqualExpression();
        this.notEqualExpression = new NotEqualExpression();
        this.greaterThanEqualExpression = new GreaterThanEqualExpression();
        this.greaterThanExpression = new GreaterThanExpression();
        this.lessThanEqualExpression = new LessThanEqualExpression();
        this.lessThanExpression = new LessThanExpression();
        this.clear();
    }

    evaluateExpression(): void {
        if (this.option) {
            if (this.option === '=') {
                this.result = this.equalExpression.interpret(this.leftNumber, this.rightNumber);
            } else if (this.option === '!=') {
                this.result = this.notEqualExpression.interpret(this.leftNumber, this.rightNumber);
            } else if (this.option === '>=') {
                this.result = this.greaterThanEqualExpression.interpret(this.leftNumber, this.rightNumber);
            } else if (this.option === '>') {
                this.result = this.greaterThanExpression.interpret(this.leftNumber, this.rightNumber);
            } else if (this.option === '<=') {
                this.result = this.lessThanEqualExpression.interpret(this.leftNumber, this.rightNumber);
            } else {
                this.result = this.lessThanExpression.interpret(this.leftNumber, this.rightNumber);
            }
        }
    }

    clear(): void {
        this.leftNumber = 0;
        this.rightNumber = 0;
        this.option = undefined;
        this.result = undefined;
    }

    goBack(): void {
        this.$state.go('app');
    }
}

angular
    .module('app')
    .component('interpretPattern', {
    templateUrl: 'app/interpretPattern/interpretPattern.html',
    controller: InterpretPattern
});
