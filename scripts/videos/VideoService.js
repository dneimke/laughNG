'use strict';

function VideoService() {
    
    this.search = function(term) {
        return [{"name":"video1", "url":"http://youtube.com"}, {"name":"video2", "url":"http://youtube.com"}];  
    };
    
    this.get = function(id) {
        return {"name":"video"+id, "url":"http://youtube.com"};
    };
}