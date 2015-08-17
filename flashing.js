var div = document.getElementsByTagName("div");
var css = "padding-bottom: 11.1%;width: 11.1%;float: left;"

window.onload = function () {
   create();
   document.body.style.margin = "0";
   document.body.style.overflow = "hidden";
   var flash = setInterval(function random() {
   for (var i = 0; i < 99; i++) {
      var r = (Math.floor(Math.random() * 255));
      var g = (Math.floor(Math.random() * 255));
      var b = (Math.floor(Math.random() * 255));
      var css = `padding-bottom: 11.1%;width: 11.1%;float: left;background-color: rgb(${r},${g},${b})`;
      div[i].style.cssText = css;
   }
}, 2000);
};



function create() {
   for (var i = 0; i < 99; i++) {
      var divNew = document.createElement("div");
      document.body.appendChild(divNew);
   }
}

console.log("Got to end fine");
