// Startup
window.onload = function () {
  initSsn()
}

// Process tree function. Call work functions and read output.
function initSsn () {
  var combReturn = validSsn(getSsn())
  if (combReturn === 1) {
    window.alert('Thank you!')
  } else if (combReturn === 2) {
    window.alert('Invalid SSN')
    initSsn()
  }
}

// Prompt user for input. Handle cancel with false return.
function getSsn () {
  var inSsn = window.prompt('Please enter a Social Security Number')
  if (inSsn != null) {
    return inSsn
  } else { return false }
}

// Validate SSN format
// Return 1 for success, 2 for failed match, 3 for cancel/null
function validSsn (ssn) {
  if (!ssn) {
    return 3
  }
  var toMatch = /\d{3}-\d{2}-\d{4}/
  if (toMatch.test(ssn)) {
    return 1
  } else { return 2 }
}
