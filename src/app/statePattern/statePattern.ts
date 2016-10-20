interface IStatePattern {
    airCondition: IAirCondition;
    turnOffState: IState;
    turnOnState: IState;
    imagePath: string;
    execute(): void;
    getStatus(): string;
    getTemperature(): number;
    goBack(): void;
}

class StatePattern implements IStatePattern {
    static $inject: any = ['temperatureService', '$rootScope', '$state'];
    airCondition: IAirCondition;
    turnOffState: IState;
    turnOnState: IState;
    imagePath: string;
    paths: string[] = ['../../images/air-condition-turned-off.png', '../../images/air-condition-turned-on.png'];

    constructor(private temperatureService: ITemperatureService,
                private $rootScope: any, private $state: any) {
        this.temperatureService.run();
        this.airCondition = new AirCondition();
        this.turnOffState = new TurnOffState();
        this.turnOnState = new TurnOnState();
        this.airCondition.setState(this.turnOffState);
        this.imagePath = this.airCondition.getState().getImagePath();
        this.execute();
    }

    execute(): void {
        this.$rootScope.$on('TurnOnAirCondition', (event: any, data: any): void => {
                            this.airCondition.setState(this.turnOnState);
                            this.imagePath = this.airCondition.getState().getImagePath();
                            this.temperatureService.startDecreasingTemperature();
        });

        this.$rootScope.$on('TurnOffAirCondition', (event: any, data: any): void => {
                            this.airCondition.setState(this.turnOffState);
                            this.imagePath = this.airCondition.getState().getImagePath();
                            this.temperatureService.startIncreasingTemperature();
        });
    }

    getStatus(): string {
        return this.airCondition.getState().getStatus();
    }

    getTemperature(): number {
        return this.temperatureService.getTemperature();
    }

    goBack(): void {
        this.$state.go('app');
    }
}

angular
    .module('app')
    .component('statePattern', {
    templateUrl: 'app/statePattern/statePattern.html',
    controller: StatePattern
});
