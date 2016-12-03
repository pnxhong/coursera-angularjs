(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
	var toBuyCtrl = this;
	toBuyCtrl.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();
	toBuyCtrl.bought = function(index){
		ShoppingListCheckOffService.bought(index);
	};
  };
  
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
	var boughtCtrl = this;
	boughtCtrl.boughtItems = ShoppingListCheckOffService.getBoughtItems();
  };
  
  function ShoppingListCheckOffService(){
	var service = this;
	service.itemsToBuy = [
		{
			name: 'cookies',
			quantity: '10 bags'
		},
		{
			name: 'milk',
			quantity: '1 bottle'
		},
		{
			name: 'egg',
			quantity: '10'
		},
		{
			name: 'potato',
			quantity: '1.5 kg'
		},
		{
			name: 'tomato',
			quantity: '2kg'
		},
	];
	service.boughtItems = [];
	
	service.getItemsToBuy = function(){
		return service.itemsToBuy;
	};
	
	service.getBoughtItems = function(){
		return service.boughtItems;
	};
	
	service.bought = function(index){
		var boughtItem = service.itemsToBuy[index];		
		
		// Add boughtItem to the boughtItems list
		service.boughtItems.push(boughtItem);
		
		// Remove boughtItem from the itemsToBuy list
		service.itemsToBuy.splice(index, 1);
	};
  };
})();
