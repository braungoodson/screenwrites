'use strict';

describe('Controller: ScreenwritesCtrl', function () {

  // load the controller's module
  beforeEach(module('screenwritesApp'));

  var ScreenwritesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScreenwritesCtrl = $controller('ScreenwritesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
