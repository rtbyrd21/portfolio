myApp.factory('Authentication', function($firebase, 
  $firebaseAuth, FIREBASE_URL, $location, $rootScope, $route) {
  
  
$rootScope.$on('$routeChangeStart', function(next, current) { 
   console.log('change');
  var scrollToTop = window.setInterval(function() {
    var pos = window.pageYOffset;
    if ( pos > 0 ) {
        window.scrollTo( 0, pos - 20 ); // how far to scroll on each step
    } else {
        window.clearInterval( scrollToTop );
    }
}, .05);
 });  

  var ref = new Firebase(FIREBASE_URL);
    var simpleLogin = $firebaseAuth(ref);
    //Predefine the factory
    var factory = {
       login: login,
       authorized: null
//       signedIn: signedIn
    };

    function login() {
       return simpleLogin.$authAnonymously().then(function(authData) {
          var userref = new Firebase(FIREBASE_URL + 'users');
          var firebaseUsers = $firebase(userref);
         
         var ref = new Firebase(FIREBASE_URL + '/users/' + authData.uid);
  var userObj = $firebase(ref).$asObject();
         
         userObj.$loaded().then(function(){
          $rootScope.currentUser = userObj;
         })
         
          
         var userInfo = {
            regUser: authData.uid
         }
         firebaseUsers.$set(authData.uid, userInfo);
          factory.authorized = authData.uid; //Set the property here
         $location.path('/comprehension');
         
      }).catch(function(error) {});
    } 
  
 
   //return it
   return factory;
});