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
          console.log(scope);
          element.bind('click', function() {
            var _opened = $("#bs-example-navbar-collapse-2").hasClass("navbar-collapse ng-scope collapse in");
            if (_opened === true) {
               $("#modNavBarBtn").click();
            }
          });
        }
      };
    })