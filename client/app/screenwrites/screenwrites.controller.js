'use strict';

angular.module('screenwritesApp')
  .controller('ScreenwritesCtrl', function ($scope,$http,socket) {
    $scope.screenwrite = {
      screenwrites: []
    };
    $scope.dob = function(d) {
      return new Date(d).getTime();
    };
    $scope.submit = function() {
      if ($scope.screenwrite.id === '' || $scope.screenwrite.body === '' || $scope.screenwrite.publish === false) {
        return;
      }
      $http.post('/api/screenwrites',{
        id: $scope.screenwrite.id,
        body: $scope.screenwrite.body,
        publish: $scope.screenwrite.publish
      });
      $scope.screenwrite.id = '';
      $scope.screenwrite.body = '';
      $scope.screenwrite.publish = false;
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
