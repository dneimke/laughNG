'use strict';

/*
 * @videoService - VideoService
 */
function VideoItemModel(videoService) {
    
    var service = videoService;
    
    this.getVideo = function (videoId) {
        console.log('SearchModel.getVideo');

        return service.get(videoId);
    };
}