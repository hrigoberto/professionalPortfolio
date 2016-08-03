angular.module('ngportfolio')
       .directive('navbar', function(){
        return{
          restrict: "E",
          scope:{
            navbar: "="
          },
          templateUrl: "/html/navbar.html"
        };
      });
