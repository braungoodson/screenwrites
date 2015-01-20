'use strict';

angular.module('screenwritesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('screenwrites', {
        url: '/screenwrites',
        templateUrl: 'app/screenwrites/screenwrites.html',
        controller: 'ScreenwritesCtrl'
      });
  });