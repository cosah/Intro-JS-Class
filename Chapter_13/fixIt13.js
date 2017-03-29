var getEmail = document.getElementById('getName')
getEmail.addEventListener('submit', function (event) {
  var nameAdd = document.getElementById('name').value
  event.preventDefault()
  window.alert('Name Is:' + nameAdd)
}, false)
