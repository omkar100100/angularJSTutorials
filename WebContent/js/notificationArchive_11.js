angular.module('archive',[])
.factory('notificationsArchive',function() {
  
  var archivedNotifications = [];

  return {
	  doArchive: function(notification) {
		  archivedNotifications.push(notification);
	  },
	  getArchived : function() {
		  return archivedNotifications;
	  }
  };
});