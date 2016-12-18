(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoriesListController', MainCategoriesListController);


MainCategoriesListController.$inject = ['categories'];
function MainCategoriesListController(categories) {
    var mainCategoriesList = this;
    mainCategoriesList.categories = categories.data;
}

})();
