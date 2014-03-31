angular.module('notificationsApp', [])
  .controller('NotificationsCtrl', function ($scope, notificationsService) {

    $scope.addNotification = function () {
      notificationsService.push($scope.notification);
      $scope.notification = '';
    };

    $scope.getNotifications = function () {
      return notificationsService.getCurrent();
    };

}).factory('notificationsService',function(notificationsArchive,MAX_LEN){
	var notifications = [];
	return {
		push:function (notification) {
			var notificationToArchive;
			var newLen = notifications.unshift(notification);
			//push method can rely on the closure scope now!
			if (newLen > MAX_LEN) {
				notificationToArchive = notifications.pop();
				notificationsArchive.archive(notificationToArchive);
			}
		},
		getCurrent:function(){
			return notifications;
		}
	};
})
.factory('notificationsArchive',function(){
	 var archivedNotifications = [];
	    return {
	      archive:function (notification) {
	        archivedNotifications.push(notification);
	      },
	      getArchived:function () {
	        return archivedNotifications;
	      }};
})
.constant('MAX_LEN',5);