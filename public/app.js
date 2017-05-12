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
          url: '/details?catId&appId',
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
        $rootScope.contactNav="";
        //event listeners for the collapse nav bar
        $('#topNavBar').on('show.bs.collapse',function(){
          var dimension = window.innerWidth;
          if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || dimension < 768) {
            // document.body.style.overflow="hidden";
            document.body.classList.add("menu-open");
          }
        });

        $('#topNavBar').on('hide.bs.collapse',function(){
          // document.body.style.overflow = "auto";
          document.body.classList.remove("menu-open");
        });

    }
})()


