'use strict';

var app = angular.module('videoPlayer', ['videoModule'])


app.config(function ($locationProvider, $routeProvider) {
    
    $locationProvider.hashPrefix("!");
    $locationProvider.html5Mode(false);
    
    $routeProvider.
    when('/', {
        controller: 'SearchController',
        templateUrl: 'views/search.html'
    }).
    when('/watch', {
        controller: 'WatchController',
        templateUrl: 'views/details.html'
    }).
    otherwise({
        redirectTo: '/'
    });
});