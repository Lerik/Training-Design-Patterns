/// <reference path="../typings/index.d.ts" />

angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('state', {
      url: '/state-pattern',
      component: 'statePattern'
    })
    .state('observer', {
      url: '/observer-pattern',
      component: 'observerPattern'
    })
    .state('bridge-null', {
      url: '/bridge-null-pattern',
      component: 'bridgePattern'
    })
    .state('chain-responsibility', {
      url: '/chain-responsibility',
      component: 'chainOfResponsibility'
    })
    .state('interpret', {
      url: '/interpret',
      component: 'interpretPattern'
    });
}
