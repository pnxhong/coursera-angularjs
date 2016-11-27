(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunCheckController);

  LunCheckController.$inject = ['$scope'];
  function LunCheckController($scope){
    $scope.lunchMenu = "";

    $scope.checkIfTooMuch = function(){
      if(!$scope.lunchMenu){
        $scope.message = 'Please enter data first';
      } else{
        var items = $scope.lunchMenu.split(',');
        var itemCount = 0;
        for(var i = 0; i < items.length; i++){
          if(items[i] && items[i].trim()){
            itemCount++;
          }
        }
        if(itemCount <=3){
          $scope.message = 'Enjoy!';
        } else{
          $scope.message = 'Too much!';
        }
      }
    };
  };
})();
