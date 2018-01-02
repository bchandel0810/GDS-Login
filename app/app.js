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
            })
            .state('decision', {
                url: '/decision',
                templateUrl: 'components/gdsLogin/gdsApproval.html',
                controller: 'approvalController'
            });
           
        $locationProvider.html5Mode(true).hashPrefix('!');

    };


})();