interface IChainOfResponsibility {
    continents: IContinent[];
    randomCountries: ICountry[];
    countrySelected: number;
    initialize(): void;
    handleCountry(): void;
}

class ChainOfResponsibility implements IChainOfResponsibility {
    static $inject: any = ['$timeout', '$state'];
    continents: IContinent[];
    randomCountries: ICountry[];
    countrySelected: number;

    constructor(private $timeout: any, private $state: any) {
        this.initialize();
    }

    initialize(): void {
        this.randomCountries = [];
        this.randomCountries.push({ name: 'Philipines', continent: 'AS' });
        this.randomCountries.push({ name: 'Egypt', continent: 'AF' });
        this.randomCountries.push({ name: 'Germany', continent: 'EU' });
        this.randomCountries.push({ name: 'Tanzania', continent: 'AF' });
        this.randomCountries.push({ name: 'Sweden', continent: 'EU' });
        this.randomCountries.push({ name: 'Thailand', continent: 'AS' });
        this.randomCountries.push({ name: 'Norway', continent: 'EU' });
        this.randomCountries.push({ name: 'Algeria', continent: 'AF' });
        this.randomCountries.push({ name: 'Italy', continent: 'EU' });
        this.randomCountries.push({ name: 'Japan', continent: 'AS' });
        this.randomCountries.push({ name: 'Myanmar', continent: 'AS' });
        this.randomCountries.push({ name: 'Iraq', continent: 'AS' });
        this.randomCountries.push({ name: 'Libya', continent: 'AF' });
        this.randomCountries.push({ name: 'Iceland', continent: 'EU' });
        this.randomCountries.push({ name: 'Israel', continent: 'AS' });
        this.randomCountries.push({ name: 'Finland', continent: 'EU' });
        this.randomCountries.push({ name: 'France', continent: 'EU' });
        this.randomCountries.push({ name: 'Sudan', continent: 'AF' });
        this.randomCountries.push({ name: 'Zimbabwe', continent: 'AF' });
        this.randomCountries.push({ name: 'Angola', continent: 'AF' });
        this.randomCountries.push({ name: 'Spain', continent: 'EU' });
        this.randomCountries.push({ name: 'UK', continent: 'EU' });
        this.randomCountries.push({ name: 'Poland', continent: 'EU' });
        this.randomCountries.push({ name: 'India', continent: 'AS' });
        this.randomCountries.push({ name: 'Senegal', continent: 'AF' });
        this.randomCountries.push({ name: 'China', continent: 'AS' });
        this.randomCountries.push({ name: 'Cambodia', continent: 'AS' });
        this.randomCountries.push({ name: 'Rwanda', continent: 'AF' });
        this.randomCountries.push({ name: 'Switzerland', continent: 'EU' });
        this.randomCountries.push({ name: 'Liberia', continent: 'AF' });
        this.randomCountries.push({ name: 'Congo', continent: 'AF' });

        this.continents = [];

        var europe: IContinent = new Europe();
        var asia: IContinent = new Asia;
        var africa: IContinent = new Africa();

        europe.setSuccesor(asia);
        asia.setSuccesor(africa);

        this.continents.push(europe);
        this.continents.push(asia);
        this.continents.push(africa);
    }

    handleCountry(): void {
        if (!this.countrySelected) {
            return;
        } else {
            this.continents.forEach(element => {
                this.$timeout(() => {
                    element.handle(this.randomCountries[this.countrySelected]);
                }, 500);
            });
        }
    }

    goBack(): void {
        this.$state.go('app');
    }
}

angular
    .module('app')
    .component('chainOfResponsibility', {
    templateUrl: 'app/chainOfResponsibilityPattern/chainOfResponsibilityPattern.html',
    controller: ChainOfResponsibility
});
