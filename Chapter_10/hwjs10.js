var div = document.getElementById('div1')
var span = document.getElementById('span1')
var clicked = false

function hide () {
  span.style.display = 'none'
  span.innerHTML = 'You found the hidden text!<br>'
}

function clicker () {
  clicked = !clicked
  if (clicked === true) {
    div.removeEventListener('mouseout', hide)
    span.innerHTML = 'This text is no longer hidden.<br>'
  } else {
    div.addEventListener('mouseout', hide)
  }
}

span.style.display = 'none'
document.onload = window.alert('Find the hidden text! Maybe click on it...')
div.addEventListener('mouseover', function () {
  span.style.display = 'block'
  if (clicked === false) {
    span.innerHTML = 'You found the hidden text!<br>'
  }
})
div.addEventListener('mouseout', hide)
span.addEventListener('click', clicker)
