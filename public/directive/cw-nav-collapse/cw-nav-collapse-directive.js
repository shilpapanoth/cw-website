angular
  .module('cwApp')
  .directive('cwNavCollapse', function ($window) {
     'use strict';

      return {
        scope: {
          navbarBtn: '=',
          navbar: '='
        },
        link: function(scope, element){
          // console.log(scope);
          element.bind('click', function() {
            var _opened = $("#topNavCollapse").hasClass("navbar-collapse collapse in");
            if (_opened === true) {
               $("#topNavBtn").click();
            }
          });
        }
      };
    })