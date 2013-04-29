'use strict';

// A bootstrapper for the video module

var module = angular.module('videoModule', []);

module.controller('searchController', ['$scope', 'searchModel', function($scope, searchModel) {
   return new SearchController($scope, searchModel);
}]);
 
module.controller('videoItemController', ['$scope', 'videoItemModel', function($scope, videoItemModel) {
  return new VideoItemController($scope, videoItemModel);
}]);


module.factory('videoService', ['$https', function($https) {
  var service = new YouTubeDataService($https);
  
  service.settings = {
      url: 'https://www.googleapis.com/youtube/v3/videos',
      method: 'GET'
  };
  
  return service;
}]);
 

module.factory('searchModel', ['videoService', function(videoService) {
  return new SearchModel(videoService);
}]);

module.factory('videoItemModel', ['videoService', function(videoService) {
  return new VideoItemModel(videoService);
}]);


 

 
