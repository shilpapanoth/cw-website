(function () {
  'use strict';

  angular
    .module('cwApp')
    .controller('appDetailController', appDetailController);

  appDetailController.$inject = ['$scope', '$rootScope','$state','$stateParams','$http'];

  function appDetailController ($scope, $rootScope, $state, $stateParams,$http) {
    $rootScope.contactNav="";
    $('#appCarousel').carousel({
      interval: 3000
    });
    if(!$rootScope.appData){
    	getAppData();
    }else{
    	$scope.selectedApp = $rootScope.appData[$stateParams.catId].data[$stateParams.appId];
    }

    function getAppData(){
      $http({
        method: 'GET',
        url: '/json/app-data.json'
      }).then(function(data){
        $rootScope.appData = data.data.appData;
        $scope.selectedCategoryData = $rootScope.appData[0];
        $scope.selectedApp = $rootScope.appData[$stateParams.catId].data[$stateParams.appId];
      },function(error) {

      });
    }
  }

}) ()
