'use strict';

// var app = angular.module('someApp', ['ui.router']);
var app = angular.module('someApp');


app.controller('profileCtrl', function($scope, $http) {
console.log("Profile Ctrl");

$http.get("/userProfile")
  .then(function(data) {
    console.log("data:", data)
    $scope.profile = data.data
    console.log("$scope.user:", $scope.user);
  })
console.log('userCtrl')

$scope.updateProfile = function() {
  console.log('registerCtrl');

  var name = $scope.profileName
  var about = $scope.aboutMe

  console.log("name", name)
  console.log("about", about)


  $http.post('/users/update', {
    name: name,
    about: about
  })
}



});
