'use strict';

/*
 * @model - SearchResultsModel
 */
function SearchController($scope, model) {
    
    $scope.term = '';
    $scope.items = [];
    
    $scope.search = function() {
        var items = model.doSearch($scope.term);
    }
}