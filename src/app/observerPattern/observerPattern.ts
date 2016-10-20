class ObserverPattern {
    static $inject: any = ['$state'];
    subject: ISubject;
    observerOfTwo: IObserver;
    observerOfThree: IObserver;
    observerOfFive: IObserver;
    numberToCalculate: number;

    constructor(private $state: any) {
        this.subject = new Subject();
        this.observerOfTwo = new MultipleOfTwo(this.subject);
        this.observerOfThree = new MultipleOfThree(this.subject);
        this.observerOfFive = new MultipleOfFive(this.subject);
    }

    calculate(): void {
        this.subject.setDividend(this.numberToCalculate);
    }

    goBack(): void {
        this.$state.go('app');
    }
}

angular
    .module('app')
    .component('observerPattern', {
    templateUrl: 'app/observerPattern/observerPattern.html',
    controller: ObserverPattern
});

