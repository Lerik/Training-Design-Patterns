class MultipleOfTwo implements IObserver {
    divisor: number;
    subject: ISubject;
    counter: number;

    constructor(subject: ISubject) {
        this.subject = subject;
        this.subject.addObserver(this);
        this.divisor = 2;
        this.counter = 0;
    }

    update(): void {
        var remainder: number = this.subject.getDividend() % this.divisor;
        console.log('yep');

        if (!remainder) {
            this.counter += 1;
        }
    }

    getCounter(): number {
        return this.counter;
    }
}
