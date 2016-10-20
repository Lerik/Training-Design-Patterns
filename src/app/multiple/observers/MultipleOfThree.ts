class MultipleOfThree implements IObserver {
    divisor: number;
    subject: ISubject;
    counter: number;

    constructor(subject: ISubject) {
        this.subject = subject;
        this.subject.addObserver(this);
        this.divisor = 3;
        this.counter = 0;
    }

    update(): void {
        var remainder: number = this.subject.getDividend() % this.divisor;

        if (!remainder) {
            this.counter += 1;
        }
    }

    getCounter(): number {
        return this.counter;
    }
}
