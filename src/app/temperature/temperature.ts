interface ITemperatureService {
    degrees: number;
    increasing: boolean;
    randomDelay: number;
    run(): void;
    getTemperature(): number;
    startIncreasingTemperature(): void;
    startDecreasingTemperature(): void;
}

class TemperatureService implements ITemperatureService {
    static $inject: any = ['$interval', '$rootScope'];
    degrees: number;
    increasing: boolean;
    randomDelay: number;

    constructor(private $interval: any, private $rootScope: any) {
        this.degrees = 61;
        this.increasing = true;
        this.randomDelay = Math.floor((Math.random() * 10) + 1);
    }

    run(): void {
        this.$interval((): void => {
            if (this.increasing) {
                this.degrees += 1;
            } else {
                this.degrees -= 1;
            }
            this.randomDelay = Math.floor((Math.random() * 10) + 1);

            if (this.degrees === 70) {
                this.$rootScope.$broadcast('TurnOnAirCondition', undefined);
            }

            if (this.degrees === 60) {
                this.$rootScope.$broadcast('TurnOffAirCondition', undefined);
            }
        }, this.randomDelay * 1000);
    }

    getTemperature(): number {
        return this.degrees;
    }

    startIncreasingTemperature(): void {
        this.increasing = true;
    }

    startDecreasingTemperature(): void {
        this.increasing = false;
    }
}

angular
    .module('app')
    .service('temperatureService', TemperatureService);
