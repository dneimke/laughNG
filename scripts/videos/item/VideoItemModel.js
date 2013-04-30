'use strict';

/*
 * @videoService - VideoService
 */
function VideoItemModel(videoService) {
    
    var _service = videoService;
    
    this.getVideo = function(videoId) {
        console.log('SearchModel.getVideo');

        return _service.get(videoId);
            
    }
}