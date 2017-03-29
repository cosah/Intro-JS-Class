window.onload = function () {
  document.phoneForm.addEventListener('submit', function (event) {
    initPhone()
    event.preventDefault()
    document.phoneForm.reset()
  })
}

function getPhone () {
  return document.phoneForm.phone.value
}

function valPhone () {
  var toMatch = /^\d{3}\W\d{3}\W\d{4}$/
  return toMatch.test(getPhone())
}

function initPhone () {
  if (!valPhone()) {
    window.alert('Invalid phone number entered. Valid format is XXX-XXX-XXXX.')
  }
}
