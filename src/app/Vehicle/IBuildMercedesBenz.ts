interface IBuildMercedesBenz {
    imagePath: string;
    batterySeries: string;
    model: string;
    color: string;
    year: string;
    fuel: string;
    getImage(): string;
    getInfo(): string;
    isNull(): boolean;
}
