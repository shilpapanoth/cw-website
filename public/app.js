(function(){

  var cwApp = angular.module('cwApp', ['ui.router']);
	cwApp.$inject = ['$stateProvider', '$urlRouterProvider'];
	cwApp.config(function($stateProvider, $urlRouterProvider) {
    
  $urlRouterProvider.otherwise('/');
  
  $stateProvider  
    .state('about', {
      url: '/aboutUs',
      templateUrl: ''
  })   
  });
})()


