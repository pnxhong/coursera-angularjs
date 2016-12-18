(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Categories list page
  .state('categoriesList', {
    url: '/categories-list',
    templateUrl: 'src/templates/main-categorieslist.template.html',
    controller: 'MainCategoriesListController as mainCategoriesList',
    resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
      }]
    }
  })

  // Items list page
  .state('itemsList', {
    url: '/items-list/{categoryShortName}',
    templateUrl: 'src/templates/main-itemslist.template.html',
    controller: 'MainItemsListController as mainItemsList',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {                
                return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            }]
    }
  });
}

})();
