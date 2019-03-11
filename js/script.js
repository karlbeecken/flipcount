let l = 0
let r = 0
let rp = 100
let lp = 0
let sum = 0

function doc_keyUp (e) {
  if (e.keyCode === 40) {
    clickleft()
  } else if (e.keyCode === 38) {
    clickright()
  }
}
document.addEventListener('keyup', doc_keyUp, false)

function clickleft () {
  l = l + 1
  sum = l + r
  document.getElementById('left').innerText = l
  document.getElementById('sum').innerText = sum
}

function clickright () {
  r = r + 1
  sum = r + l
  document.getElementById('right').innerText = r
  document.getElementById('sum').innerText = sum
}

function getsum () {
  lp = l / sum * 100
  rp = r / sum * 100
  alert('Rücken: ' + l + ' (' + lp + '%)\nUnten: ' + r + ' (' + rp + '%)\nInsgesamt: ' + sum)
  console.log('Rücken: ' + l + ' (' + lp + '%)\nUnten: ' + r + ' (' + rp + '%)\nInsgesamt: ' + sum)
}
