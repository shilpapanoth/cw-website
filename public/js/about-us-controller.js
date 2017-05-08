(function(){

	angular
	.module('cwApp')
	.controller('aboutController',aboutController);
	aboutController.$inject = ['$scope', '$rootScope', '$anchorScroll', '$location', '$http', 'anchorSmoothScroll'];

	function aboutController ($scope, $rootScope, $anchorScroll, $location, $http, anchorSmoothScroll){
		$rootScope.contactNav="";
    $scope.gotoBottom = gotoBottom;
    getBenefits();
    getStatistics();

    function gotoBottom () {
      $location.hash('aboutDetail');
      // $anchorScroll();
      anchorSmoothScroll.scrollTo('aboutDetail');
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

