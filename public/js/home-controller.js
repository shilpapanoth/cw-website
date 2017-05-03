(function(){

	angular
	.module('cwApp')
	.controller('homeController',homeController);
	homeController.$inject = ['$scope', '$rootScope'];

	function homeController ($scope, $rootScope){
		$rootScope.contactNav="";
	}
})()

