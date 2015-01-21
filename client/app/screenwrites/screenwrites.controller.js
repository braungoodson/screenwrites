'use strict';

angular.module('screenwritesApp')
  .controller('ScreenwritesCtrl', function ($scope,$http,socket) {
    $scope.screenwrite = {
      screenwrites: []
    };
    $scope.submit = function() {
      if ($scope.screenwrite.name === '' || $scope.screenwrite.info === '') {
        return;
      }
      $http.post('/api/screenwrites',{
        name: $scope.screenwrite.name,
        info: $scope.screenwrite.info,
        active: $scope.screenwrite.active
      });
      $scope.screenwrite.name = '';
      $scope.screenwrite.info = '';
      $scope.screenwrite.active = false;
    };
    $http.get('/api/screenwrites')
      .success(function(sw){
        $scope.screenwrite.screenwrites = sw;
        socket.syncUpdates('screenwrite',$scope.screenwrite.screenwrites);
      })
      .error(function(e){
        throw new Error(e);
      })
    ;
    $scope.$on('destroy',function(){
      socket.unsyncUpdates('screenwrite');
    });
  })
;
