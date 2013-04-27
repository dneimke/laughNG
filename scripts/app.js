'use strict';

var app = angular.module('videoPlayer', ['videoModule'])


app.config(function ($locationProvider, $routeProvider) {
    
    $locationProvider.hashPrefix("!");
    $locationProvider.html5Mode(false);
    
    $routeProvider.
    when('/', {
        controller: 'SearchController',
        template: 'views/search.html'
    }).
    when('/watch', {
        controller: 'WatchController',
        template: 'views/details.html'
    }).
    otherwise({
        redirectTo: '/'
    });
});