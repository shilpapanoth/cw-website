(function () {
  'use strict';

  angular
    .module('cwApp')
    .controller('appListControler', appListControler);

  appListControler.$inject = ['$scope', '$rootScope', '$anchorScroll', '$location'];

  function appListControler ($scope, $rootScope, $anchorScroll, $location) {

    $rootScope.contactNav="";
    $scope.selectedCategoryIndex = 0;
    $scope.selectedCategoryData = $rootScope.appData[0];

    $scope.selectCategory = selectCategory;
    $scope.gotoBottom = gotoBottom;

    function gotoBottom () {
      $location.hash('appCategory');
      $anchorScroll();
    }

    function selectCategory (index) {
      $scope.selectedCategoryIndex = index;
      $scope.selectedCategoryData = $rootScope.appData[index];
      console.log($scope.selectedCategoryData)
    }
  }

}) ()
