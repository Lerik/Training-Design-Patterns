class SportCar implements IBuildMercedesBenz {
    imagePath: string;
    batterySeries: string;
    model: string;
    color: string;
    year: string;
    fuel: string;
    fuelInjectorSeries: string;
    acCompressorSeries: string;

    constructor(public params: string[]) {
        this.model = params[0];
        this.color = params[1];
        this.year = params[2];
        this.fuel = params[3];
        this.batterySeries = params[4];
        this.fuelInjectorSeries = params[5];
        this.acCompressorSeries = params[6];
        this.imagePath = params[7];
    }

    getImage(): string {
        return this.imagePath;
    }

    getInfo(): string {
        return 'Model: ' + this.model + '\nColor: ' + this.color + '\nYear: ' + this.year
            + '\nType of Fuel: ' + this.fuel + '\nFuel Injector Number Series' + this.fuelInjectorSeries
            + '\nAC Compressor Number Series' + this.acCompressorSeries
            + '\nBattery Number Series: ' + this.batterySeries;
    }

    isNull(): boolean {
        return false;
    }
}
