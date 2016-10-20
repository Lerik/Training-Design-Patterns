interface IBridgePattern {
    luxuryCar: IMercedesBenz;
    sportCar: IMercedesBenz;
    goBack(): void;
}

class BridgePattern implements IBridgePattern {
    static $inject: any = ['$state'];
    luxuryCar: IMercedesBenz;
    sportCar: IMercedesBenz;
    suvCar: IMercedesBenz;

    constructor(private $state: any) {
        this.luxuryCar = new Car();
        var paramsLuxuryCar: string[] = ['CLS 55 AMG', 'Black', '2004', 'Gasoline',
            'Cu9jaWy614', '88854DCDS62', '../images/luxury-car.JPG'];
        this.luxuryCar.buildCar(new LuxuryCar(paramsLuxuryCar));

        this.sportCar = new Car();
        var paramsSportCar: string[] = ['CLK DTM AMG Cabriolet', 'Gray', '2006', 'Diesel',
            'P85Se541cA36', 'y48jSDS185', '71996348', '../images/sport-car.jpg'];
        this.sportCar.buildCar(new SportCar(paramsSportCar));

        this.suvCar = new Car();
        this.suvCar.buildCar(new NonExistingCar());
    }

    goBack(): void {
        this.$state.go('app');
    }
}

angular
    .module('app')
    .component('bridgePattern', {
    templateUrl: 'app/bridgePattern/bridgePattern.html',
    controller: BridgePattern
});
