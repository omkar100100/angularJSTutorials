describe('Module Testing',function(){
	var notificationsArchive;
	
	beforeEach(module('archive'));
	beforeEach(inject(function(_notificationsArchive_){
		notificationsArchive=_notificationsArchive_;
	}));
	
	it('Should be able to provide archive and access',function(){
		var notification={msg:'Are you there'};
		notificationsArchive.doArchive(notification);
		expect(notificationsArchive.getArchived()).toContain(notification);
	});
});