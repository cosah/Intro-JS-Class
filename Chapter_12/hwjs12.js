var timeOut = document.getElementById('time'),
  dateVar = new Date(),
  Time = window.prompt('Provide a time in HH:MM:SS AM/PM format', '')

// Validates the hours, minutes, and seconds by range.
function valInput (arrTime) {
  if (arrTime[0] < 0 || arrTime[0] > 12) {
    badRetry('hours', '1-12')
  } else if (arrTime[1] < 0 || arrTime[1] > 59) {
    badRetry('minutes', '1-59')
  } else if (arrTime[2] < 0 || arrTime[2] > 59) {
    badRetry('seconds', '1-59')
  } else if (arrTime[3] !== 'AM' && arrTime[3] !== 'PM') {
    badRetry(arrTime[3], 'AM/PM')
  } else {
    return arrTime
  }
}

// Handles failed validation and prompts for new input with parameters.
function badRetry (unit, range) {
  Time = window.prompt('Provide a time in HH:MM:SS AM/PM format. ERR: ' + unit + ' not in range ' + range, '')
  buildTime(Time)
}

// Takes a time string and converts it to an array of [hours, minutes, seconds]
// Also sends input to validation
function buildTime (time) {
  if (time.length !== 11) {
    badRetry('time format', '')
  }
  var hou = parseInt(time.substring(0, 2), 10),
    min = parseInt(time.substring(3, 5), 10),
    sec = parseInt(time.substring(6, 8), 10),
    ap = Time.substring(9, 11).toUpperCase(),
    arrTime = valInput([hou, min, sec, ap]),
    add12 = (hou !== 12) ? (ap === 'PM') : !(ap === 'PM')
  arrTime[0] = (add12) ? hou + 12 : hou
  return arrTime
}

// Prints a validated time property to the div
function giveTime (sTime) {
  dateVar.setHours(sTime[0], sTime[1], sTime[2])
  timeOut.innerHTML = dateVar.toLocaleTimeString([], {timeZone: 'America/Los_Angeles'})
}

// Runtime
giveTime(buildTime(Time))
