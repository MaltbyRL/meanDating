

'use strict';

// var app = angular.module('someApp', ['ui.router']);
var app = angular.module('someApp');

app.controller('loginCtrl', ["$scope", "$http", "$state",function($scope, $http,$state) {
  console.log('loginCtrl');
  	$scope.loginNow = function(){
	var email = $scope.email
	var password = $scope.password
	console.log("login Ctrl password:", password)
  console.log("login Ctrl email:", email)
  		$http.post('/users/login', {email: email, password: password})
  		.then($state.go('profile'))
  	}
}]);
