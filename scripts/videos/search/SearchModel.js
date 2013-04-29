'use strict';

/*
 * @videoService - VideoService
 */
function SearchModel(videoService) {
    
    var _service = videoService;
    this.items = [];
    
    this.doSearch = function(term) {
        console.log('SearchModel.doSearch');
        var items = _service.search(term);
        this.items = items;
    } 
}