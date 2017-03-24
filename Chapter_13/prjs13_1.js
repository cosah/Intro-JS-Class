window.onload = function() { // this will be run when the whole page is loaded
  var getEmail = document.getElementById('emailForm');
  getEmail.addEventListener('submit', function (event) {
    event.preventDefault()
    var emailAdd = document.getElementById('email').value
    if ((emailAdd.indexOf('@') >= 0) && (emailAdd.indexOf('.') >= 0)) {
      window.alert('Thank you!')
    } else {
      window.alert('The @ and . characters are required in the e-mail address.')
    }
  })
};
