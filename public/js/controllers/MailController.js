(function() {
  angular.module('ngportfolio')
         .controller('MailController', MailController);

  MailController.$inject = ['$scope', '$http'];

  function MailController($scope, $http){
    $scope.sendMail = sendMail;
    // $scope.msg = msg;
    var baseUrl = 'https://rh3portfolio.herokuapp.com/#/send';

    function sendMail(msg){
      return $http.post(baseUrl, msg)
                  .then(function(response){
                    console.log('sent email', response);
                  });
    }
  }
}());
