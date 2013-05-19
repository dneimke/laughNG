'use strict';

/*
 * @model - VideoItemModel
 */
function VideoItemController($scope, $routeParams, itemModel) {
    
    $scope.selectedVideo = {};
    var model = itemModel;
    
    console.log($routeParams.videoId);
    
    model.getVideo($routeParams.videoId).then(function (response) {
        var tmp = response.data;
        $scope.selectedVideo = tmp;
    });
}