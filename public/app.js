(function(){
  'use strict';
  angular
    .module('cwApp', ['ui.router'])
  	.config(routeConfig);

    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfig ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider

        .state('home', {
          url: '/',
          templateUrl: '/html/home.html',
          controller: 'homeController'
        })
        .state('about', {
          url: '/aboutUs',
          templateUrl: '/html/aboutUs.html',
          controller: 'aboutController'
        })
        .state('apps', {
          url: '/apps',
          templateUrl: '/html/app-list.html',
          controller: 'appListControler'
        })
        .state('app-detail', {
          url: '/details?id',
          templateUrl: '/html/app-detail.html',
          controller: 'appDetailController'
        })
    }
})()


