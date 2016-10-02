angular.module('exampleApp', ['material.timepicker'])

.controller('mainCtrl', function($scope) {

  $scope.model = moment();
  
});
