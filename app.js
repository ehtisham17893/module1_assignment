(function () {
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){

    $scope.dishes = "";
    $scope.message = "";
    $scope.CheckIfTooMuch = function(){

    if($scope.dishes == ""){
        $scope.message = "Please enter data first";
    }else {
      var total = countDishes($scope.dishes);
      if (total <= 3) {
        $scope.message = "Enjoy!";
      }
      else if(total > 3){
        $scope.message = "Too much!";
      }
    }


    };

    function countDishes(string) {
      var dishes = string.split(',');
      return dishes.length;
    };

  }

}
)();
