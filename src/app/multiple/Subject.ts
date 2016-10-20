interface ISubject {
    observersList: IObserver[];
    dividend: number;
    getDividend(): number;
    setDividend(dividend: number): void;
    addObserver(observer: IObserver): void;
    notifyAllObservers(): void;
}

class Subject implements ISubject {
    observersList: IObserver[];
    dividend: number;

    getDividend(): number {
        return this.dividend;
    }

    setDividend(dividend: number): void {
        this.dividend = dividend;
        this.notifyAllObservers();
    }

    addObserver(observer: IObserver): void {
        if (!this.observersList) {
            this.observersList = [];
        }
        this.observersList.push(observer);
    }

    notifyAllObservers(): void {
        this.observersList.forEach(element => {
            element.update();
        });
    }
}
