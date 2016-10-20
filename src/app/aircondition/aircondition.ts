interface IAirCondition {
    state: IState;
    setState(state: IState): void;
    getState(): IState;
}

class AirCondition implements IAirCondition {
    state: IState;

    setState(state: IState): void {
        this.state = state;
    }

    getState(): IState {
        return this.state;
    }
}

angular
    .module('app')
    .service('airCondition', AirCondition);
