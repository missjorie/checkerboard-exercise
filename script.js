var cssRed = "padding-bottom: 11.1%;width: 11.1%;float: left;background-color: red;";
var cssBl = "padding-bottom: 11.1%;width: 11.1%;float: left;background-color:black;";
var div = document.getElementsByTagName("div");

function createBoard(end) {
   for (var i = 0; i < end; i++) {
      var divNew = document.createElement("div");
      document.body.appendChild(divNew);
      if (i % 2 === 0) {
         div[i].style.cssText = cssRed;
      } else {
         div[i].style.cssText = cssBl;
      }
   }
}


window.onload = function () {
   //   createBoard(99);
   createBoard(99);
   document.body.style.margin = "0";
   document.body.style.overflow = "hidden";
};



console.log("Got to end fine");
