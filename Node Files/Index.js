var five = require("johnny-five");
var firebase = require("firebase");

five.Board().on("ready", function() {

  // Create a new `button` hardware instance.
  // This example allows the button module to
  // create a completely default instance
  var led = new five.Led.RGB({
	pins: {
		red: 5,
		green: 6,
		blue: 3
	}
});

firebase.initializeApp({databaseURL: 'YOUR CUSTOM FIREBASE URL HERE',
});


var ref1 = firebase.database().ref("/color");

ref1.set("#FF0000");
    
ref1.on("value", function(snapshot) {
		var buttonState = snapshot.val();
		led.on(); 
		led.color(buttonState);
		console.log(buttonState);
});

});