(function(){
    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var ctrl = this;
        ctrl.searchTerm = '';
    

        ctrl.search = function () {
            ctrl.foundItems = [];
            ctrl.foundItemsMsg = '';
            if (ctrl.searchTerm) {
                MenuSearchService.getMatchedMenuItems(ctrl.searchTerm).then(function (result) {
                    ctrl.foundItems = result;

                    if (!result || !result.length) {
                        ctrl.foundItemsMsg = 'Nothing found';
                    }
                });
            } else {
                ctrl.foundItemsMsg = 'Nothing found';
            }
      
        };

        ctrl.removeItem = function (itemIndex) {
            ctrl.foundItems.splice(itemIndex, 1);
        };
    };
    
    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;
        service.items
	
        service.getMatchedMenuItems = function (searchTerm) {
           
            return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"
            }).then(function (result) {
                var menuItems = result.data.menu_items;
            
                var foundItems = menuItems.filter(function (obj) {
                    return obj.description.indexOf(searchTerm) !== -1;
                });             
               
                return foundItems;
            });
        };
    };

    function FoundItemsDirective() {
        var ddo = {
            restrict: 'E',
            templateUrl: 'menuList.html',
            scope: {
                foundItems: '<',
                onRemove: '='
            },
            transclude: true
        };

        return ddo;
    };
})();
