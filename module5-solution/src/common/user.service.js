(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


UserService.$inject = ['$http', 'ApiPath'];
function UserService($http, ApiPath) {
    var service = this;    

  service.signUp = function (user) {
      service.user = angular.copy(user);
  };

  service.getUserInfo = function () {
      return angular.copy(service.user);
  };

}



})();
