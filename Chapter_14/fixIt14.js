var getData = document.getElementById('getData')
getData.addEventListener('submit', function (event) {
  var data = document.getElementById('data').value
  event.preventDefault()

  window.alert('this is your data ' + data)
}, false)
