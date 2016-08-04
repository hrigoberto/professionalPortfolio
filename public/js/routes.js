(function() {
  angular.module('ngportfolio')
         .config(RouteConfig);

  RouteConfig.$inject = ['$routeProvider', '$locationProvider'];

  function RouteConfig($routeProvider, $locationProvider){
    $routeProvider
    .when('/', {
      templateUrl: "/html/views/home.html"
    })
    .when('/contact', {
      templateUrl: "/html/views/contact.html"
    })
    .when('/work', {
      templateUrl: "/html/views/aboutMe.html"
    })
    .when('/resume', {
      templateUrl: "/html/views/resume.html"
    })
    .when('/video-photography', {
      templateUrl: "/html/views/videoProjects.html"
    })
    .when('/webProjects', {
      templateUrl: "/html/views/webProjects.html"
    })
    .otherwise({
      redirectTo: '/'
    });
  }
}());
