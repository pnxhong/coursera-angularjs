(function () {
'use strict';

angular.module('MenuApp')
.controller('MainItemsListController', MainItemsListController);


MainItemsListController.$inject = ['items'];
function MainItemsListController(items) {    
    var mainItemsList = this;
    mainItemsList.items = items.data.menu_items;
}

})();
