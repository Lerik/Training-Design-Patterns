interface IMercedesBenz {
    carBuilder: IBuildMercedesBenz;
    buildCar(builder: IBuildMercedesBenz): void;
    getCarInformation(): string[];
}

class Car implements IMercedesBenz {
    carBuilder: IBuildMercedesBenz;

    buildCar(builder: IBuildMercedesBenz): void {
        this.carBuilder = builder;
    }

    getCarInformation(): string[] {
        return [this.carBuilder.getImage(), this.carBuilder.getInfo()];
    }
}
