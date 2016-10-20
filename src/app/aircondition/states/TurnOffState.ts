class TurnOffState implements IState {
    doAction(airCondition: IAirCondition): void {
        airCondition.setState(this);
    }

    getStatus(): string {
        return 'Turned Off';
    }

    getImagePath(): string {
      return '../../images/air-condition-turned-off.png';
    }
}

angular
  .module('app')
  .service('turnOffState', TurnOffState);
