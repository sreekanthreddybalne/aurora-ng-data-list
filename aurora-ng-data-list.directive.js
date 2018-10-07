angular.
module('directive').
controller('selectableDataListController', [function(){
  var self = this;
  self.downArrowPressed = function(){
    console.log("ppp");
  }
}]).
directive('selectableDataList', [function(){
  return{
    restrict: 'E',
    replace: false,
    require: 'enterKeyPress, downArrowKeyPress',
    scope: {
        items: '=',
        toShowProperty: '@',
        pickItem : '&onSelect'
    },
    transclude: true,
    templateUrl: '/static/js/app/directive/data-list/data-list.template.html',
    controller: ['$scope', 'Aurora',
    function selectableDataListController($scope, Aurora) {
        var self = this;
        $scope.currentIndex=-1;
        $scope.setSelectToInitial = function(){
          $scope.currentIndex=-1;
        }
        $scope.upArrowKeyPressed = function(){
          $scope.currentIndex--;
          $scope.currentIndex = $scope.currentIndex<0?$scope.filteredItems.length-1:$scope.currentIndex;
          $scope.currentItem=$scope.filteredItems[$scope.currentIndex];
        }
        $scope.downArrowKeyPressed = function(){
          $scope.currentIndex++;
          $scope.currentIndex = $scope.currentIndex>=$scope.filteredItems.length?0:$scope.currentIndex;
          $scope.currentItem=$scope.filteredItems[$scope.currentIndex];
        }

      }],
    /*link : function(scope, element, attrs){
            //Add event listener for 'click' event
        element.on('click', function(event) {

                element.html('Thanks for buying this item.');
                element.css({
                    color: 'green'
                });
          });
    }*/
  }

}]);
