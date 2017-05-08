(function () {
  'use strict';

  angular
    .module('cwApp')
    .controller('appDetailController', appDetailController);

  appDetailController.$inject = ['$scope', '$rootScope'];

  function appDetailController ($scope, $rootScope) {
    $rootScope.contactNav="navbar-shrink";
    // console.log($rootScope.selectedProject);
  }

}) ()
