var config = {
  apiKey: "AIzaSyCHcoLVWKSvA-rkimAhfKqIpxmL9zAHhBA",
  authDomain: "rgbled-3fa6b.firebaseapp.com",
  databaseURL: "https://rgbled-3fa6b.firebaseio.com",
  storageBucket: "rgbled-3fa6b.appspot.com",
};
firebase.initializeApp(config);
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


.controller("cpCtrl", function($scope, $ionicModal) {

        $scope.r = document.getElementById("myRange").value;
        $scope.g = document.getElementById("myRange2").value;
        $scope.b = document.getElementById("myRange3").value;


    var x = $scope.r;
    var y = $scope.g;
    var z = $scope.b;

    function componentToHex(c) {
    var hex = Number(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(x, y, z) {
    return "#" + componentToHex(x) + componentToHex(y) + componentToHex(z);
}
    $scope.hexx = rgbToHex(x, y, z);

    $scope.changet = function() {
        $scope.r = document.getElementById("myRange").value;
        $scope.g = document.getElementById("myRange2").value;
        $scope.b = document.getElementById("myRange3").value;
        //$scope.o = document.getElementById("myRange4").value

    var x = $scope.r;
    var y = $scope.g;
    var z = $scope.b;
    //var a = $scope.o;
        function componentToHex(c) {
    var hex = Number(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}



$scope.$watch("hexx", function(newValue, oldValue) {
     var ref = firebase.database().ref("/color");
     ref.set($scope.hexx);
     console.log($scope.hexx);
 });



$scope.turnoff = function(){
  var ref = firebase.database().ref("/color");
  ref.set("#000000");
  console.log("Turned Off");
};




    $scope.hexx = rgbToHex(x, y, z);
    localStorage.color = $scope.hexx;
    localStorage.r = $scope.r;
    localStorage.g = $scope.g;
    localStorage.b = $scope.b;
    $scope.lr = localStorage.r;
    $scope.lg = localStorage.g;
    $scope.lb = localStorage.b;
    console.log(localStorage.color);
    };

    $scope.last = localStorage.color;
    $scope.lr = localStorage.r;
    $scope.lg = localStorage.g;
    $scope.lb = localStorage.b;
    $scope.r = $scope.lr;
    $scope.g = $scope.lg;
    $scope.b = $scope.lb;
    $scope.hexx = $scope.last;

    $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
    console.log("abc");
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });


  $scope.red = function(){
  $scope.hexx = "#FF0000";
  $scope.closeModal();
};

  $scope.orange = function(){
  $scope.hexx = "#ff2600";
  $scope.closeModal();
  };

  $scope.yellow = function(){
  $scope.hexx = "#ff6000";
  $scope.closeModal();
  };
  $scope.purple = function(){
  $scope.hexx = "#800080";
  $scope.closeModal();
  };
  $scope.green = function(){
  $scope.hexx = "#008000";
  $scope.closeModal();
  };
  $scope.lgreen = function(){
  $scope.hexx = "#ffff00";
  $scope.closeModal();
  };
  $scope.blue = function(){
  $scope.hexx = "#0000FF";
  $scope.closeModal();
  };
  $scope.lblue = function(){
  $scope.hexx = "#00FFFF";
  $scope.closeModal();
  };
  $scope.pink = function(){
  $scope.hexx = "#ff2e4a";
  $scope.closeModal();
  };


});
