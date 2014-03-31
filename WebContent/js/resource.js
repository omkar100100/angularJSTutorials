angular.module('resource', ['ngResource'])
  .factory('Users', function ($resource) {
    var Users = $resource('https://api.mongolab.com/api/1/databases/chandudb/collections/users', {
      apiKey:'3WIuEjHFCxGg097o81IhUgckje8NPQ03',
     // id:'@_id.$oid'
      id:'5327acd1e4b0dec2c17c3ccb'
    });

    Users.prototype.getFullName = function() {
      return this.firstName + ' ' + this.lastName;
    };

    return Users;
  })
  
  .controller('ResourceCtrl', function ($scope, Users) {

	$scope.users=Users.query({},function(users){
		console.log(users);
	});
	
	$scope.add=function(){
		var newUser={ "firstName" : "Balu" , "lastName" : "Mahendar"};
		Users.save(newUser);
	};
	
//    $scope.user = Users.get({}, function(user){
//      console.log(user);
//    });

//    $scope.getFullName = function() {
//        return $scope.user.firstName + ' ' + $scope.user.lastName;
//    };
      
//    $scope.remove = function (user) {
//      Users['delete']({}, user);
//      //user.$delete();
//    };
//
//    $scope.add = function () {
//      var user = new Users({
//        name:'Superhero'
//      });
//      user.$save();
//    };
//
//    $scope.add = function () {
//      var user = {
//        name:'Superhero'
//      };
//      Users.save(user);
//    };

  });