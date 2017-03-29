// Init
window.onload = function () {
  document.appointForm.addEventListener('submit', function (event) {
    event.preventDefault()
    initName()
    initPhone()
    document.appointForm.reset()
  })
}

// Get the name
function getName () {
  return document.appointForm.person.value
}

// Validate the name
function valName () {
  var toMatch = /^[a-z ,.'-]+$/i
  return toMatch.test(getName())
}

// Alert if name is not present
function initName () {
  if (!valName()) {
    window.alert('Please enter a first name and last name.')
  }
}

// Get phone number
function getPhone () {
  return document.appointForm.phone.value
}

// Validate phone number
function valPhone () {
  var toMatch = /^\d{3}\W\d{3}\W\d{4}$/
  return toMatch.test(getPhone())
}

// Alert if phone number does not match criteria
function initPhone () {
  if (!valPhone()) {
    window.alert('Invalid phone number entered. Valid format is XXX-XXX-XXXX.')
  }
}
