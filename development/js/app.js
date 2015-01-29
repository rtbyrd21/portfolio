var myApp = angular.module('myApp', 
  ['ngRoute', 'firebase', 'appControllers'])
 .constant('FIREBASE_URL', 'http://i2b2icons.firebaseio.com/');

var appControllers = angular.module('appControllers', ['firebase']);

myApp.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
  };
});


myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/login', {
      templateUrl: 'views/login.html',
      controller:  'RegistrationController'
    }).
    when('/thankyou', {
      templateUrl: 'views/thankyou.html',
      controller:  'RegistrationController'
    }).
    when('/meetings', {
      templateUrl: 'views/meetings.html',
      controller:  'MeetingsController'
    }).
  when('/comprehension', {
      templateUrl: 'views/comprehension.html',
      controller:  'ComprehensionController'
    }).
    otherwise({
      redirectTo: '/login'
    });
}]);