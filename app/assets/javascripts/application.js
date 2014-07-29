//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require angular
//= require angular-route
//= require controllers/homeCtrl

var app = angular.module('app', ['ngRoute']);

function config($routeProvider){

  $routeProvider.
    otherwise({
      templateUrl: '../public/index.html',
      controller: 'HomeCtrl'
    });
}

app.config(config);
app.controller('HomeCtrl', HomeCtrl);
