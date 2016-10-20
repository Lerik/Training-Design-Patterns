interface ICountry {
    name: string;
    continent: string;
}

interface IContinent {
    name: string;
    succesor: IContinent;
    countries: ICountry[];
    setSuccesor(newSuccesor: IContinent): void;
    handle(country: ICountry): void;
    passHandlerToSuccesor(country: ICountry): void;
    getListOfCountries(): string;
}
