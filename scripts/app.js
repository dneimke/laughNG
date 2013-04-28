'use strict';

var app = angular.module('videoPlayer', [function() {

}]);


app.config(function($routeProvider) {
    
    $routeProvider.
        when('/', {
            controller: 'searchController',
            templateUrl: 'views/search.html'
        }).
        when('/watch', {
            controller: 'videoItemController',
            templateUrl: 'views/details.html'
        }).
        otherwise({
            redirectTo: '/'
        });
});

app.controller('searchController', ['$scope', 'searchModel', function() {
   return new SearchController($scope, searchModel);
}]);
 
app.controller('videoItemController', ['$scope', 'videoItemModel', function($scope, videoItemModel) {
  return new VideoItemController($scope, videoItemModel);
}]);


app.factory('videoService', function() {
  return new VideoService();
});
 

app.factory('searchModel', ['videoService', function(videoService) {
  return new SearchModel(videoService);
}]);

app.factory('videoItemModel', ['videoService', function(videoService) {
  return new VideoItemModel(videoService);
}]);
