angular.module('myApp')
.controller('FirstCtrl', ['$scope','Data', function($scope,Data){
	$scope.data = {};
	$scope.data.message = Data.message;
	$scope.receiveData = function(){
		$scope.data.message = Data.message;
	};
	$scope.sendData = function(){
		 Data.message = $scope.data.message ;
	};
	
}])