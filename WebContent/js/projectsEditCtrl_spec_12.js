describe('ProjectEditController Tests',function(){
	var $scope;
	
	beforeEach(module('projects-admin'));
	
	beforeEach(inject(function($rootScope){
		$scope=$rootScope.$new();
	}));
	
	
	it('Remove Team Member Test',inject(function($controller){
		var teamMember={};
		$controller('projectsEditCtrl',{
			$scope:$scope,
			project:{
				teamMembers:[teamMember]
			}
		});
		
		expect($scope.project.teamMembers).toEqual([teamMember]);
		
		//execute and verify
		$scope.removeTeamMember(teamMember);
		expect($scope.project.teamMembers).toEquals([]);
	}));
	
});