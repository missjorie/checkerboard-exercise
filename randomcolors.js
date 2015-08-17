var div = document.getElementsByTagName("div");
var css = "padding-bottom: 11.1%;width: 11.1%;float: left;"


window.onload = function () {
   random();
   document.body.style.margin = "0";
   document.body.style.overflow = "hidden";
};

function random() {
   for (var i = 0; i < 99; i++) {
      var divNew = document.createElement("div");
      document.body.appendChild(divNew);
      var r = (Math.floor(Math.random() * 255));
      var g = (Math.floor(Math.random() * 255));
      var b = (Math.floor(Math.random() * 255));
      var css = `padding-bottom: 11.1%;width: 11.1%;float: left;background-color: rgb(${r},${g},${b})`;
      div[i].style.cssText = css;
   }
}

console.log("Got to end fine");