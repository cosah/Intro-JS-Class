window.onload = function () {
  var greeting = document.getElementById('greeting')
  if (document.cookie) {
    readOne(greeting)
  } else {
    document.cookie = setOne()
    readOne(greeting)
  }
}

function setOne () {
  var yourName = window.prompt('What is your name?')
  yourName = 'name=' + yourName
  var now = new Date()
  now.setUTCDate(now.getUTCDate() + 1)
  yourName += '|expires=' + now.toUTCString()
  yourName = encodeURIComponent(yourName)
  return yourName
}

function readOne (greeting) {
  var myCookie = document.cookie
  myCookie = decodeURIComponent(myCookie).split('|')
  var finName = myCookie[0].split('=')
  greeting.innerHTML = 'Welcome, ' + finName[1]
}
