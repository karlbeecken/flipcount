let l = 0
let r = 0
let rp = 100
let lp = 0
let sum = 0

function docKeyUp (e) {
  if (e.keyCode === 40) {
    clickLeft()
  } else if (e.keyCode === 38) {
    clickRight()
  } else if (e.keyCode === 39) {
    getSum()
  }
}
document.addEventListener('keyup', docKeyUp, false)

function clickLeft () {
  l = l + 1
  sum = l + r
  document.getElementById('left').innerText = l
  document.getElementById('sum').innerText = sum
}

function clickRight () {
  r = r + 1
  sum = r + l
  document.getElementById('right').innerText = r
  document.getElementById('sum').innerText = sum
}

function getSum () {
  lp = l / sum * 100
  rp = r / sum * 100
  console.log('Rücken: ' + l + ' (' + lp + '%)\nUnten: ' + r + ' (' + rp + '%)\nInsgesamt: ' + sum)
  alert('Rücken: ' + l + ' (' + lp + '%)\nUnten: ' + r + ' (' + rp + '%)\nInsgesamt: ' + sum)
}
