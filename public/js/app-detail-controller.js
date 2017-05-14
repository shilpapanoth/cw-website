(function () {
  'use strict';

  angular
    .module('cwApp')
    .controller('appDetailController', appDetailController);

  appDetailController.$inject = ['$scope', '$rootScope','$state','$stateParams','$http', '$sce'];

  function appDetailController ($scope, $rootScope, $state, $stateParams, $http, $sce) {

    $scope.setSceToContent = setSceToContent;
    $scope.setSceTofText = $sce.trustAsHtml;

    $rootScope.contactNav="";
    $('#appCarousel').carousel({
      interval: 3000
    });

    $(".carousel-inner").swipe( {
            //Generic swipe handler for all directions
            swipeLeft:function(event, direction, distance, duration, fingerCount) {
              $(this).parent().carousel('prev');
            },
            swipeRight: function() {
              $(this).parent().carousel('next');
            },
            //Default is 75px, set to 0 for demo so any distance triggers swipe
            threshold:0
    });

    if(!$rootScope.appData){
    	getAppData();
    }else{
      $scope.selectedCategoryData = $rootScope.appData[$stateParams.catId];
    	$scope.selectedApp = $rootScope.appData[$stateParams.catId].data[$stateParams.appId];
      $scope.setSceToContent();
    }

    function getAppData(){
      $http({
        method: 'GET',
        url: '/json/app-data.json'
      }).then(function(data){
        $rootScope.appData = data.data.appData;
        $scope.selectedCategoryData = $rootScope.appData[$stateParams.catId];
        $scope.selectedApp = $rootScope.appData[$stateParams.catId].data[$stateParams.appId];
        $scope.setSceToContent();
      },function(error) {

      });
    }

   function setSceToContent(){
      $scope.lContent1 =$sce.trustAsHtml($scope.selectedApp.lContent1);
      $scope.lContent2 =$sce.trustAsHtml($scope.selectedApp.lContent2);
      $scope.lContent3 =$sce.trustAsHtml($scope.selectedApp.lContent3);
    }


  }

}) ()
