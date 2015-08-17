var cssPi = "padding-bottom: 11.1%;width: 11.1%;float: left;opacity: 0.7;background-color: pink;";
var cssBl = "padding-bottom: 11.1%;width: 11.1%;float: left;opacity: 0.7;background-color:black;";
var div = document.getElementsByTagName("div");
//this is what every website says, yet I keep getting error that getContext("2d") is not a function. In Chrome and just checked—it's up to date.
var canvas = document.getElementsByTagName("canvas");
var ctx = canvas.getContext("2d");
var fade = ctx.createLinearGradient(0, 100, 170, 0);
fade.addColorStop(0, "purple");
fade.addColorStop(1, "indigo");
ctx.fillStyle = fade;
ctx.fillRect(20, 20, 150, 100);


function gradient() {
   for (var i = 0; i < 99; i++) {
      var divNew = document.createElement("div");
      document.body.appendChild(divNew);
      if (i % 2 === 0) {
         div[i].style.cssText = cssPi;
      } else {
         div[i].style.cssText = cssBl;
      }
   }
}

window.onload = function () {
   gradient();
   document.body.style.margin = "0";
   document.body.style.overflow = "hidden";
   //create a canvas element
   var newCanv = document.createElement("canvas");
   document.body.appendChild(newCanv);
};

console.log("Got to end fine");
