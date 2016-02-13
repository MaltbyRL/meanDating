
'use strict';

// var app = angular.module('someApp', ['ui.router']);
var app = angular.module('someApp');

app.controller('usersCtrl', function($scope, $http) {
  console.log("Users Ctrl");
  $http.get("/users")
  .then(function(data){
    console.log("data:", data)
    $scope.users = data.data
    console.log("$scope.user:", $scope.user);
  })
  console.log('userCtrl')


});
