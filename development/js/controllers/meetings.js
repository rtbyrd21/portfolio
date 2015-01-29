myApp.controller('MeetingsController', 
  function($scope, $rootScope, $location, $firebase, $firebaseAuth, Authentication, FIREBASE_URL) {

    
 $scope.interpretation = {};
  $scope.actions = {};
    
  var ref = new Firebase(FIREBASE_URL + '/users' + Authentication.authorized + '/meetings');
  var meetingsInfo = $firebase(ref);
  var meetingsObj = $firebase(ref).$asObject(); 
  var meetingsArray = $firebase(ref).$asArray(); 
    
  meetingsObj.$loaded().then(function(data){
    $scope.meetings = meetingsObj;
  });  
    
   meetingsArray.$loaded().then(function(data){
    $rootScope.howManyMeetings = meetingsArray.length;
  });  
    
   meetingsArray.$watch(function(event){
    $rootScope.howManyMeetings = meetingsArray.length;
   });  
    
  $scope.authid = Authentication.authorized;
    
//  $scope.meetingsInfo = meetingsInfo.$asObject();

  $scope.addMeeting=function() {
    console.log($scope.interpretation[1]);
    meetingsInfo.$push({
      icons: [{"interepation": $scope.interpretation, 
               "action": $scope.actions}             
             ],
              
      
      
      
      date: Firebase.ServerValue.TIMESTAMP
    }).then(function() {
      $location.path('/thankyou');
    });
  } //addmeeting
  
  $scope.deleteMeeting=function(key) {
    meetings.$remove(key);
  } //deletemeeting

  var ref = new Firebase(FIREBASE_URL + '/users/' + Authentication.authorized);
  var user = $firebase(ref).$asObject();
    
  user.$loaded().then(function(){
    $rootScope.current = user;
  });  
  console.log(Authentication.authorized);
  
  
}); //MeetingsController