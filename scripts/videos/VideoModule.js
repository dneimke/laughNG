'use strict';

var videoModule = angular.module('videoModule', []);
 
videoModule.factory('videoService', function() {
  return new VideoService();
});
 
videoModule.factory('searchModel', ['videoService', function(videoService) {
  return new SearchModel(videoService);
}]);

videoModule.factory('videoItemModel', ['videoService', function(videoService) {
  return new VideoItemModel(videoService);
}]);
 
videoModule.controller(
    'searchController', 
    ['$scope', 'searchModel', SearchController($scope, searchModel)]);
 
videoModule.controller(
    'videoItemController', 
    ['$scope', 'videoItemModel', VideoItemController($scope, videoItemModel)]);