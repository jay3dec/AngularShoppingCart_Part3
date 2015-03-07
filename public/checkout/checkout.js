'use strict';

angular.module('checkout', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/checkout', {
    templateUrl: 'public/checkout/checkout.html',
    controller: 'CheckoutCtrl'
  });
}])

.controller('CheckoutCtrl', ['$scope','CommonProp',function($scope,CommonProp) {
	$scope.items = CommonProp.getItems();	
	$scope.total = CommonProp.getTotal();
}]);
