var app = angular.module("timeApp");

app.directive("showTime", function() {
	return {
		restrict: 'E',
		template: '<div>the current time is {{time}} </div>',
		link: function(scope, elem, attrs) {
			var currentTime = new Date();
			scope.time = currentTime.toString();
		}
	}
});