class NonExistingCar implements IBuildMercedesBenz {
    imagePath: string;
    batterySeries: string;
    model: string;
    color: string;
    year: string;
    fuel: string;

    getImage(): string {
        return this.imagePath;
    }

    getInfo(): string {
        return 'This car does not exist yet.';
    }

    isNull(): boolean {
        return true;
    }
}
