angular.module('app', [ 'engines','cars'])
  .controller('appCtrl', function ($scope, car) {
	  $scope.engineType=car.start();
  });

angular.module('cars', [])
  .factory('car', function ($log, dieselEngine) {
    return {
      start: function() {
    	  return dieselEngine.type;
      }
    };
  })

  .factory('dieselEngine', function () {
    return {
      type: 'custom diesel'
    };
  });

angular.module('engines', [])
  .factory('dieselEngine', function () {
    return {
      type: 'diesel'
    };
  });




