'use strict';

/*
 * @model - SearchResultsModel
 */
function SearchController($scope, model) {
    
    $scope.term = 'gangnam';
    $scope.items = [];
    
    var _model = model;
    
    $scope.search = function() {
        _model.doSearch($scope.term).then(function(response) {
        
            var data = [];
            
            var tmp = response.data.items;
            for (var i = 0; i < tmp.length; i++)
            {
              data.push({
                  'id':tmp[i].id.videoId,
                  'title':tmp[i].snippet.title,
                  'imageUrl':tmp[i].snippet.thumbnails.default.url,
                  });
            }

            $scope.items = data;
        });
    }
}