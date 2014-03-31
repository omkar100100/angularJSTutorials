angular.module('app',[])
.controller('appCtrl',function($scope,$http){
		$scope.getName=function(){
			var futureResponse=$http.get('data/data.json');
			futureResponse.success(function(data,status,headers,config){
				$scope.data=data;
			});
			futureResponse.error(function(data,status,headers,config){
				throw new Error('Something went wrong');
		});
		
		
		$scope.getNameThen=function(){
			var promise=$http.get('data/data.json');
			promise.then(function(response){
				$scope.data2=response.data;
			},function(response){
				throw new Error('Something went wrong');
			}
			);
		};
		
		$scope.queryUsers=function(){
 		  console.log("get Users");
	      $http.get('https://api.mongolab.com/api/1/databases/ascrum/collections/users', {
	        params:{
	          apiKey:'4fb51e55e4b02e56a67b0b66'
	        }
	      }).success(function (data, status, headers, config) {
	          $scope.users = data;
	        }).error(function (data, status, headers, config) {
	          throw new Error('Something went wrong...');
	        });

		};
		
//		$scope.queryUsers = function () {
//			console.log('hello');
//		      $http.get('https://api.mongolab.com/api/1/databases/ascrum/collections/users', {
//		        params:{
//		          apiKey:'4fb51e55e4b02e56a67b0b66'
//		        }
//		      }).success(function (data, status, headers, config) {
//		          $scope.users = data;
//		        }).error(function (data, status, headers, config) {
//		          throw new Error('Something went wrong...');
//		        });
//		 };
		    
		
	};
});