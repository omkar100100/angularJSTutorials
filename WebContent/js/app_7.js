angular.module('notificationsApp', [])

  .controller('NotificationsCtrl', function ($scope, notificationsService) {
    $scope.addNotification = function () {
      notificationsService.push($scope.notification);
      $scope.notification = '';
    };

    $scope.getNotifications = function () {
      return notificationsService.getCurrent();
    };
 })

.provider('notificationsService',function(){
	var notifications = [];
	var config={
			maxLen:10,
			shouldArchive:true
	};
	
	return {
		setMaxLen:function(maxLength){
			config.maxLen=maxLength || config.maxLen;
		},
	
		$get:function(notificationsArchive){
		 return {
			push:function (notification) {
				var notificationToArchive;
				var newLen = notifications.unshift(notification);
				//push method can rely on the closure scope now!
				if (newLen > config.maxLen) {
					notificationToArchive = notifications.pop();
					notificationsArchive.archive(notificationToArchive);
				}
			},
			getCurrent:function(){
				return notifications;
			}
		};
	  }
	};
})
.config(function(notificationsServiceProvider){
	notificationsServiceProvider.setMaxLen(3);
})
.factory('notificationsArchive', function () {

    var archivedNotifications = [];
    return {
      archive:function (notification) {
        archivedNotifications.push(notification);
      },
      getArchived:function () {
        return archivedNotifications;
      }};
  });
