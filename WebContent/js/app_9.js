angular.module('app',['engines'])
.controller('appCtrl',function($scope,car){
	$scope.engineType=car.start();
});
//.factory('car',function(engine){
//	return {
//		start:function(){
//			return engine.type;
//		}
//	};
//});

angular.module('engines',[])
.factory('engine',function(){
	return {
		type:'diesel'
	};
})
.factory('car',function(engine){
	return {
		start:function(){
			return engine.type;
		}
	};
});