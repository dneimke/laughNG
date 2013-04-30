'use strict';

/*
 * @videoService - VideoService
 */
function SearchModel(videoService) {
    
    var _service = videoService;
    
    this.doSearch = function(term) {
        console.log('SearchModel.doSearch');

        return _service.search(term);
            
    } 
     
}