interface IState {
  doAction(airCondition: IAirCondition): void;
  getStatus(): string;
  getImagePath(): string;
}
