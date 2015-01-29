myApp.controller('RegistrationController', 
  function($scope, $firebaseAuth, $location, Authentication) {
    
//  var ref = new Firebase('http://i2b2icons.firebaseio.com/');
//  $scope.authObj = $firebaseAuth(ref);
  
  $scope.login = function() {
    Authentication.login();
  } //login

  $scope.register = function() {
    $location.path('/meetings');
  } //login

}); //RegistrationController


//$scope.authObj.$authAnonymously().then(function(authData) {
//  console.log("Logged in as:", authData.uid);
//}).catch(function(error) {
//  console.error("Authentication failed:", error);
//});