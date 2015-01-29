myApp.controller('StatusController', function(
      $scope, $rootScope, $firebaseAuth){
        $rootScope.$on('$firebaseAuth:login', function(e, authUser){
        console.log(authUser);
          $scope.userID = authUser;
        }); 
});