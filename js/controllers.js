var appCon = angular.module('appCon', []);

appCon.controller('widgetCon', ['$scope', function($scope){
	//Set up initial value
	$scope.ItemSelected = 1;
	$scope.checkin = 3;
}])