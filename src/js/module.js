'use strict';

var app = angular.module('someApp', ['ui.router']);
console.log("app:",app)
app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', { url: '/', templateUrl: '/partials/home/home.html', controller: 'homeCtrl' })
    .state('users', { url: '/users',templateUrl: './partials/home/users.html',controller: 'usersCtrl'})
    .state('login', { url: '/login',templateUrl: './partials/home/login.html',controller: 'loginCtrl'})
    .state('register', { url: '/register',templateUrl: './partials/home/register.html',controller: 'registerCtrl'})
    .state('profile', { url: '/profile',templateUrl: './partials/home/profile.html',controller: 'profileCtrl'})

  $urlRouterProvider.otherwise('/');
});
