setTimeout(function() {
  var stay = window.confirm("Continue using this webpage? Cancel to leave and search for more news on Google.");
  if(!stay){
    window.location = "https://www.google.com";
  }
}, 20000);
