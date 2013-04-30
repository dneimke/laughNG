'use strict';

/*
 * @model - VideoItemModel
 */
function VideoItemController($scope, $routeParams, model) {
    
    $scope.selectedVideo = {};
    var _model = model;
    
    console.log($routeParams.videoId);
    
    _model.getVideo($routeParams.videoId).then(function(response) {
        
            var data = [];
            
            var tmp = response.data;

            $scope.selectedVideo = tmp;
        });
    
}