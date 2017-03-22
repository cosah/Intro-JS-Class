function startCalendar () {
  var thetime = new Date(),
    themonth = thetime.getMonth(),
    thedate = thetime.getDate(),
    theyear = thetime.getFullYear(),
    dateDiv = document.getElementById('my_dater')
  dateDiv.innerHTML = themonth + '/' + thedate + '/' + theyear
  setTimeout(function () { startCalendar() }, 1000)
}
startCalendar()
