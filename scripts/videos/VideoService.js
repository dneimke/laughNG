'use strict';

function YouTubeDataService($http, settings) {
    
    this.settings = settings || {};
    
    this.search = function (term) {
        
        console.log('YouTubeDataService.search');
            
        var params = 'search?q=' + term + '&key=' + this.settings.apiKey + '&type=video&part=snippet&callback=JSON_CALLBACK',
            url = this.settings.url + params,
            data = [];
        
        return $http({method: this.settings.method, url: url});
    };
    
    
    
    this.get = function (videoId) {
        console.log('YouTubeDataService.get');
        
        var params = 'videos?id=' + videoId + '&key=' + this.settings.apiKey + '&type=video&part=snippet&callback=JSON_CALLBACK',
            url = this.settings.url + params;
        
        return $http({method: this.settings.method, url: url});
    };
}