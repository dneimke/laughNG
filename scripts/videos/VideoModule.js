'use strict';

// A bootstrapper for the video module

var module = angular.module('videoModule', []);

module.controller('searchController', ['$scope', 'searchModel', function ($scope, searchModel) {
    return new SearchController($scope, searchModel);
}]);
 
module.controller('videoItemController', ['$scope', '$routeParams', 'videoItemModel', function ($scope, $routeParams, videoItemModel) {
    return new VideoItemController($scope, $routeParams, videoItemModel);
}]);


module.factory('videoService', ['$http', function ($http) {
    var service = new YouTubeDataService($http);
  
    service.settings = {
        url: 'https://www.googleapis.com/youtube/v3/',
        method: 'JSONP',
        apiKey: 'AIzaSyDMxUGwN0wCn1VKO2kbhM9EUULEb6wtfKY'
    };
  
    return service;
}]);
 

module.factory('searchModel', ['videoService', function (videoService) {
    return new SearchModel(videoService);
}]);

module.factory('videoItemModel', ['videoService', function (videoService) {
    return new VideoItemModel(videoService);
}]);


 

 
