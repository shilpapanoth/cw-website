(function(){
  'use strict';
  angular
    .module('cwApp', ['ui.router'])
  	.config(routeConfig)
    .run(init);

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
          url: '/about',
          templateUrl: '/html/about-us.html',
          controller: 'aboutController'
        })
        .state('apps', {
          url: '/apps',
          templateUrl: '/html/app-list.html',
          controller: 'appListControler'
        })
        .state('co-innovation-center', {
          url: '/co-innovation-center',
          templateUrl: '/html/app-list.html',
          controller: 'appListControler'
        })
        .state('app-detail', {
          url: '/details?id',
          templateUrl: '/html/app-detail.html',
          controller: 'appDetailController'
        })
        .state('contact', {
          url: '/contact',
          templateUrl: '/html/contact-us.html',
          controller: 'contactController'
        })
    }

    init.$inject = ['$rootScope'];

    function init ($rootScope) {
      $rootScope.appData = [{
          'key': 'category 1', 
          'data' : [{
            heading: 'How to de-risk your outsourcing project 1',
            content: "While there are many myths as to the reasons why outsourcing projects fail, you'll be sure to have a successful engagement if you follow these six guidelines.",
            bgImg: 'https://storage.googleapis.com/ccwebsite-assets/img/banner/hand.jpg'
          },{
            heading: 'How to de-risk your outsourcing project 2',
            content: "While there are many myths as to the reasons why outsourcing projects fail, you'll be sure to have a successful engagement if you follow these six guidelines.",
            bgImg: 'https://storage.googleapis.com/ccwebsite-assets/img/banner/hand.jpg'
          }]
        },{
          'key': 'category 2', 
          'data' : [{
            heading: 'How to de-risk your outsourcing project 3',
            content: "While there are many myths as to the reasons why outsourcing projects fail, you'll be sure to have a successful engagement if you follow these six guidelines.",
            bgImg: 'https://storage.googleapis.com/ccwebsite-assets/img/banner/hand.jpg'
          },{
            heading: 'How to de-risk your outsourcing project 4',
            content: "While there are many myths as to the reasons why outsourcing projects fail, you'll be sure to have a successful engagement if you follow these six guidelines.",
            bgImg: 'https://storage.googleapis.com/ccwebsite-assets/img/banner/hand.jpg'
          },{
            heading: 'How to de-risk your outsourcing project 5',
            content: "While there are many myths as to the reasons why outsourcing projects fail, you'll be sure to have a successful engagement if you follow these six guidelines.",
            bgImg: 'https://storage.googleapis.com/ccwebsite-assets/img/banner/hand.jpg'
          }]
        },{
          'key': 'category 3', 
          'data' : [{
            heading: 'How to de-risk your outsourcing project 6',
            content: "While there are many myths as to the reasons why outsourcing projects fail, you'll be sure to have a successful engagement if you follow these six guidelines.",
            bgImg: 'https://storage.googleapis.com/ccwebsite-assets/img/banner/hand.jpg'
          }]
        }]
    }
})()


