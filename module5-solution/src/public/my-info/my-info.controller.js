(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserService', 'MenuService'];
function MyInfoController(UserService, MenuService) {
  var $ctrl = this;
  $ctrl.user = UserService.getUserInfo();
  if ($ctrl.user) {
      MenuService.getMenuItem($ctrl.user.menuNumber).then(function (response) {
          $ctrl.user.menuItem = response;
      });
  }
     
}

})();
