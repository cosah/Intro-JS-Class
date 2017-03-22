function tickTock () {
  var rawTime = new Date(),
    myClock = document.getElementById('my_clock'),
    hour = rawTime.getHours(),
    min = rawTime.getMinutes(),
    sec = rawTime.getSeconds(),
    day = rawTime.getDate(),
    month = rawTime.getMonth(),
    year = rawTime.getFullYear(),
    ap = (hour >= 12) ? 'pm' : 'am'
  month++
  hour = (ap === 'pm') ? hour -= 12 : hour
  hour = (hour < 1) ? hour = 12 : hour
  min = (min < 10) ? '0' + min : min
  sec = (sec < 10) ? '0' + sec : sec
  myClock.innerHTML = hour + ':' + min + ':' + sec + ' ' + ap + ', ' + month + '/' + day + '/' + year

  setTimeout(function () { tickTock() }, 1000)
}
tickTock()
