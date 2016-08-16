(function() {
    angular.module('ngportfolio')
           .controller('CarouselController', CarouselController)

    CarouselController.$inject = ['$scope'];

    function CarouselController($scope){
      $scope.myInterval = 5000;
      $scope.active = 0;
      $scope.slides = [
        { id: "1", image: 'http://static1.squarespace.com/static/5690c051a12f449cd64a0ddf/56f1cdb540261ddb876e6c32/56f1cdd440261ddb876e6cff/1458687473432/IMG_7478.JPG?format=750w'},
        { id: "2",image: 'http://static1.squarespace.com/static/5690c051a12f449cd64a0ddf/56f1cdb540261ddb876e6c32/56f1cdd48259b5ec4f4d5e20/1458687468909/IMG_7378.JPG?format=750w'},
        { id: "3",image: 'http://static1.squarespace.com/static/5690c051a12f449cd64a0ddf/56f1cdb540261ddb876e6c32/56f1ce1e8259b5ec4f4d6122/1458687571323/ManuelwithTebow.jpg?format=750w'},
        { id: "4",image: 'http://static1.squarespace.com/static/5690c051a12f449cd64a0ddf/56f1cdb540261ddb876e6c32/56f1d242e707ebc63b91add5/1458688620215/IMG_0059.jpg?format=750w'},
        { id: "5",image: 'http://static1.squarespace.com/static/5690c051a12f449cd64a0ddf/56f1cdb540261ddb876e6c32/56f1d2cf2b8ddefb5179ec96/1458711646790/IMG_0318.jpg?format=750w'}
      ]
    }


}());
