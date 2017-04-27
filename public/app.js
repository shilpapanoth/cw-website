(function(){
  'use strict';
  angular
    .module('cwApp', ['ui.router'])
  	.config(routeConfig);
    
    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    function routeConfig ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      
      $stateProvider  
        .state('about', {
          url: '/aboutUs',
          templateUrl: ''
        })   
    }
})()


