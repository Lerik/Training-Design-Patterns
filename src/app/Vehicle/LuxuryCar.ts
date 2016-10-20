class LuxuryCar implements IBuildMercedesBenz {
    imagePath: string;
    batterySeries: string;
    radiatorSeries: string;
    model: string;
    color: string;
    year: string;
    fuel: string;

    constructor(public params: string[]) {
        this.model = params[0];
        this.color = params[1];
        this.year = params[2];
        this.fuel = params[3];
        this.batterySeries = params[4];
        this.radiatorSeries = params[5];
        this.imagePath = params[6];
    }

    getImage(): string {
        return this.imagePath;
    }

    getInfo(): string {
        return 'Model: ' + this.model + '\nColor: ' + this.color + '\nYear: ' + this.year
            + '\nType of Fuel: ' + this.fuel + '\nBattery Number Series: ' + this.batterySeries
            + '\nradiatorSeries' + this.radiatorSeries;
    }

    isNull(): boolean {
        return false;
    }
}
