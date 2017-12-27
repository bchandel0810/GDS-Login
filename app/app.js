(function() {
    'use strict';
    var app = angular.module('gdsApp', [
        'ui.bootstrap',
        'ngCookies',
        'ui.router',
        'angular-loading-bar',
        'gdsLogin',
        'commonData'
    ]);
    app.config(routeConfig);
    // ui.routes
    function routeConfig($urlRouterProvider, $stateProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('gds-login', {
                url: '/',
                templateUrl: 'components/gdsLogin/gdsLoginPage.html',
                controller: 'gdsLoginController'
            });
           
        $locationProvider.html5Mode(true).hashPrefix('!');

    };


})();