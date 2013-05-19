'use strict';

/*
 * @videoService - VideoService
 */
function SearchModel(videoService) {
    
    var service = videoService;
    
    this.doSearch = function (term) {
        console.log('SearchModel.doSearch');
        return service.search(term);
    };
}