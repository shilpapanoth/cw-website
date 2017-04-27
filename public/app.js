var cwApp = angular.module('cwApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('about', {
            url: '/aboutUs',
            templateUrl: ''
        })
        
        
});