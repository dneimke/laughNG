'use strict';

function YouTubeDataService($http, settings) {
    
    this.settings = settings || {};
    
    this.search = function(term) {
        //TODO: format url
        
        $http({method: settings.method, url: settings.url}).
          success(function(data, status) {
            return data;
          }).
          error(function(data, status) {
            return 'Error: ' + data;
        });
    };
    
    
    
    this.get = function(videoId) {
        //TODO: format url
        
        $http({method: settings.method, url: settings.url}).
          success(function(data, status) {
            return data;
          }).
          error(function(data, status) {
            return 'Error: ' + data;
        });
    };
}