(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserService', 'MenuService'];
function SignUpController(UserService, MenuService) {
  var $ctrl = this;
  $ctrl.user = {};
  $ctrl.submit = function () {
      $ctrl.signUpSucceed = undefined;
      $ctrl.invalidMenuNumberMsg = undefined;
      MenuService.getMenuItem($ctrl.user.menuNumber).then(function () {
          UserService.signUp($ctrl.user);
          $ctrl.signUpSucceed = 'Your information has been saved';
      }, function () {
          $ctrl.invalidMenuNumberMsg = 'No such menu number exists';
      });      
  };
}

})();
