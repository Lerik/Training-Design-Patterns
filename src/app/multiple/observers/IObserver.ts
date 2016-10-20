interface IObserver {
    divisor: number;
    subject: ISubject;
    counter: number;
    update(): void;
    getCounter(): number;
}
