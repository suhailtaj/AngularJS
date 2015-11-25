var app = angular.module('myApp',[]);

app.controller('FirstCtrl', ['$scope', function($scope){
	$scope.data = {message:"alert-box"}
}])