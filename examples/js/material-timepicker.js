

angular.module('material.timepicker', [])

.directive('materialTimepicker', ['$timeout', function($timeout){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      model: '=',
      err: '=?'
    },
    templateUrl: 'template/template.html',
    link: function($scope, element, attributes) {

      // controls opening/closing of the modal
      $scope.state = false;
      $scope.state = true;

      // store initial time
      $scope.init = moment($scope.model);

      $scope.timePreview = {
        hh: $scope.init.format('HH'),
        mm: $scope.init.minute(5*Math.ceil($scope.init.minute()/5)).format('mm')
      };

      // time before opening the modal
      $scope.display = {
        hh: $scope.timePreview.hh,
        mm: $scope.timePreview.mm
      }

      // store values to control animations
      $scope.show = {
        hours:        true, // show hour clock
        minutes:      false, // minute clock
        explode:      false, // hour explosion animation
        explode_min:  false // minutes explosion animation
      };

      // show hours clock
      $scope.goHours = function(){
        $scope.show.hours=true;

        $scope.show.explode=false;
        $scope.show.explode_min=true;

        $timeout(function(){
          $scope.show.minutes = false;
        }, 330);

      };

      $scope.setHour = function(hour){
        $scope.model = moment($scope.model).hour(hour).toDate();

        $timeout($scope.goMinutes, 10 );
      };

      // show minutes clock
      $scope.goMinutes = function(){
        $scope.show.minutes=true;

        $scope.show.explode_min=false;
        $scope.show.explode=true;

        $timeout(function(){
          $scope.show.hours=false;
        }, 330);

      };

      $scope.setMinutes = function(minutes){
        $scope.model = moment($scope.model).minute(minutes).toDate();
      };


      $scope.$watch('model', function(value){
        var m;

        if(value) m = moment(value);
        else      m = moment();

        m = m.minute(5*Math.ceil(m.minute()/5));

        $scope.minute = m.minute();
        $scope.hour = m.hour();
        $scope.timePreview = {
          hh: m.format('HH'),
          mm: m.format('mm')
        };

      });


      $scope.setState = function(state){
        $scope.state = state;
        $scope.goHours();
      };

      $scope.toggleState = function(){
        $scope.state=!$scope.state;
      };

      $scope.ok= function(){
        $scope.updateDisplay();
        $scope.setState(false);
      };

      $scope.cancel = function(){
        $scope.timePreview = {
          hh: $scope.display.hh,
          mm: $scope.display.mm
        };
        $scope.model = moment($scope.init);
        $scope.setState(false);
      };

      $scope.updateDisplay = function(){
        $scope.display = {
          hh: $scope.timePreview.hh,
          mm: $scope.timePreview.mm
        }
      };

    }
  }
}]);

// #endregion
