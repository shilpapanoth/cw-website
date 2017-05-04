(function(){

	angular
	.module('cwApp')
	.controller('aboutController',aboutController);
	aboutController.$inject = ['$scope', '$rootScope', '$anchorScroll', '$location', '$http'];

	function aboutController ($scope, $rootScope, $anchorScroll, $location, $http){
		$rootScope.contactNav="";
    $scope.gotoBottom = gotoBottom;
    getBenefits();
    getStatistics();

    function gotoBottom () {
      $location.hash('aboutDetail');
      $anchorScroll();
    }

    function getBenefits (){
    	$http({
		    method: 'GET',
		    url: '/json/benefits.json'
	  	}).then(function(data){
	  		$scope.benefits = data.data.benefits;
	  	},function(error) {

	  	});
    }

    function getStatistics (){
    	$http({
		    method: 'GET',
		    url: '/json/statistics.json'
	  	}).then(function(data){
	  		$scope.statistics = data.data.statistics;
	  	},function(error) {

	  	});
    }

	}
})()

