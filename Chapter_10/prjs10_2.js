var text = document.getElementById("int");

text.addEventListener("mouseover", function() {
  text.style.color = "#FF0000";
}, false);
text.addEventListener("mouseout", function() {
  text.style.color = "#000000";
}, false);
