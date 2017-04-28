(function(){

	angular
	.module('cwApp')
	.controller('homeController',homeController);
	homeController.$inject = ['$scope', '$rootScope'];

	function homeController ($scope, $rootScope){
		$scope.myInterval = 3000;
		$scope.slides = [
		    {
		      image: 'http://lorempixel.com/400/200/',
		      active : 'true'
		    },
		    {
		      image: 'http://lorempixel.com/400/200/food',
		      active : 'false'
		    },
		    {
		      image: 'http://lorempixel.com/400/200/sports',
		      active : 'false'
		    },
		    {
		      image: 'http://lorempixel.com/400/200/people',
		      active : 'false'
		    }
  	];
	}
})()

