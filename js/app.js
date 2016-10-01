angular.module('exampleApp', ['material.timepicker'])

.controller('mainCtrl', function($scope) {

  $scope.franco = moment().add(1, 'hour');

});
