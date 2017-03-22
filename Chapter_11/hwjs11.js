var clicky = document.getElementById("clicky");
var myPopup = "";

clicky.addEventListener("click", function(){
  myPopup = window.open("newWindow.html", "popup", "width=400,height=400,menubar=no,resizable=yes,scrollbars=yes,status=no,toolbar=no");
});

// var exit = "";
// var current = "";
// var wide = "";
// var tall = "";
// var resize = "";

// function newWindow(){
//   myPopup = window.open("newWindow.html", "Popup", "width=400, height=400, menubar=no, resizable=yes, scrollbars=yes, status=no, toolbar=no");
// }

// function closeWindow(){
//   self.close();
// }

// function resizeWindow(){
//   current = self.document.getElementById("current");
//   wide = self.document.getElementById("wide");
//   tall = self.document.getElementById("tall");
//   self.resizeTo(tall.value, wide.value);
//   current.innerHTML = " HxW: " + height + " + " + width;
// }

//myPopup.addEventListener("load", function(){
  // current = self.document.getElementById("current");
  // wide = self.document.getElementById("wide");
  // tall = self.document.getElementById("tall");
  // resize = self.document.getElementById("resize");
  // exit = self.document.getElementById("exit");
  //
  // exit.onClick = closeWindow();
  //
  // resize.addEventListener("click", resizeWindow);
//});
