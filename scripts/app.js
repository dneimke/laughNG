'use strict';

var app = angular.module('videoPlayer', ['videoModule']);


app.config(function($routeProvider) {
    
    $routeProvider.
        when('/', {
            controller: 'searchController',
            templateUrl: 'views/search.html'
        }).
        when('/watch/:videoId', {
            controller: 'videoItemController',
            templateUrl: 'views/details.html'
        }).
        otherwise({
            redirectTo: '/'
        });
});