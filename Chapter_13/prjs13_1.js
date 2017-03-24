var getEmail = document.getElementById('getemail')
getEmail.addEventListener('submit', function (event) {
  var emailAdd = document.getElementById('email').value
  event.preventDefault()
  if ((emailAdd.indexOf('@') >= 0) && (emailAdd.indexOf('.') >= 0)) {
    window.alert('Thank you!')
  } else { window.alert('The @ and . characters are required in the e-mail address.') }
})
