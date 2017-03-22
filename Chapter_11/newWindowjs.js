function resizeWindow(){
  var current = self.document.getElementById("current");
  var wide = self.document.getElementById("wide");
  var tall = self.document.getElementById("tall");
  self.resizeTo(wide.value, tall.value);
  current.innerHTML = " HxW: " + height + " + " + width;
}
