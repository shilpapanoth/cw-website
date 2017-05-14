(function(){

	angular
	.module('cwApp')
	.controller('homeController',homeController);
	homeController.$inject = ['$scope', '$rootScope'];

	function homeController ($scope, $rootScope){
		$rootScope.contactNav="";

    $('#mainCarousel').carousel({
      interval: 3500
    });
    $("#mainCarousel").swiperight(function() {
    		  $(this).carousel('prev');
	  });
		$("#mainCarousel").swipeleft(function() {
		      $(this).carousel('next');
	  });
	}
})()

