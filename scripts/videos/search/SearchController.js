'use strict';

/*
 * @model - SearchResultsModel
 */
function SearchController($scope, searchModel) {
    
    $scope.term = 'gangnam';
    $scope.items = [];
    
    var model = searchModel;
    
    $scope.search = function () {
        model.doSearch($scope.term).then(function (response) {
        
            var data = [],
                tmp = response.data.items,
                i = 0;
            
            for (i = 0; i < tmp.length; i = i + 1) {
                data.push({
                    'id': tmp[i].id.videoId,
                    'title': tmp[i].snippet.title,
                    'imageUrl': tmp[i].snippet.thumbnails.default.url
                });
            }

            $scope.items = data;
        });
    };
}