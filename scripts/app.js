'use strict';

var app = angular.module('videoPlayer', ['videoModule'])


app.config(function ($routeProvider) {
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