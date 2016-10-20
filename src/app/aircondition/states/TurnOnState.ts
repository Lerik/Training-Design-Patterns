class TurnOnState implements IState {
    doAction(airCondition: IAirCondition): void {
        airCondition.setState(this);
    }

    getStatus(): string {
        return 'Turned On';
    }

    getImagePath(): string {
      return '../../images/air-condition-turned-off.png';
    }
}

angular
    .module('app')
    .service('turnOnState', TurnOnState);
