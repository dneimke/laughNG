'use strict';

var app = angular.module('videoPlayer', ['videoModule']);


app.config(function ($routeProvider) {
    
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