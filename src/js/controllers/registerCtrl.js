'use strict';

app.controller('registerCtrl', ["$scope","$log", "$http", function($scope, $log, $http) {
  console.log('registerCtrl')

  $scope.registerNow = function(){
    console.log('registerCtrl');

    var email = $scope.emailadd
    var pass1= $scope.pass1
    var pass2= $scope.pass2
    console.log("email", email)

    if ($scope.pass1 !==  $scope.pass2){
      return swal('passwords dont match')

    }
    else{
      var password = $scope.pass1
      $log.info('Reg completed ')

    }
    console.log("email:", email, "password:", password)
    $http.post('/users/register', {email: email, password: password})
  }
}]);
