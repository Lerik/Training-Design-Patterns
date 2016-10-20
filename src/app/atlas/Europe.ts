class Europe implements IContinent {
    name: string;
    succesor: IContinent;
    countries: ICountry[];

    constructor() {
        this.countries = [];
        this.name = 'Europe';
    }

    setSuccesor(newSuccesor: IContinent): void {
        this.succesor = newSuccesor;
    }

    handle(country: ICountry): void {
        if (country.continent === 'EU') {
            var foundCountry: ICountry = this.countries.find((c: ICountry) => {
                return c.name === country.name;
            });

            if (!foundCountry) {
                this.countries.push(country);
            }
        }
    }

    passHandlerToSuccesor(country: ICountry): void {
        if (this.succesor) {
            this.succesor.handle(country);
        }
    }

    getListOfCountries(): string {
        var countriesAsString: string = '';

        this.countries.forEach(element => {
            countriesAsString += element.name + '\n';
        });

        return countriesAsString;
    }
}
