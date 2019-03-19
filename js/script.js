let one = 0
let two = 0
let three = 0
let four = 0
let five = 0
let six = 0
let p1 = 100
let p2 = 0
let p3 = 0
let p4 = 0
let p5 = 0
let p6 = 0
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

function click1 () {
  one++
  sum = one + two + three + four + five + six
  document.getElementById('one').innerText = one
  document.getElementById('sum').innerText = sum
}

function click2 () {
  two++
  sum = one + two + three + four + five + six
  document.getElementById('two').innerText = two
  document.getElementById('sum').innerText = sum
}


function click3 () {
  three++
  sum = one + two + three + four + five + six
  document.getElementById('three').innerText = three
  document.getElementById('sum').innerText = sum
}


function click4 () {
  four++
  sum = one + two + three + four + five + six
  document.getElementById('four').innerText = four
  document.getElementById('sum').innerText = sum
}


function click5 () {
  five++
  sum = one + two + three + four + five + six
  document.getElementById('five').innerText = five
  document.getElementById('sum').innerText = sum
}


function click6 () {
  six++
  sum = one + two + three + four + five + six
  document.getElementById('six').innerText = six
  document.getElementById('sum').innerText = sum
}

function getSum () {
  p1 = one / sum * 100
  p2 = two / sum * 100
  p3 = three / sum * 100
  p4 = four / sum * 100
  p5 = five / sum * 100
  p6 = six / sum * 100
  console.log(`1: ${one} (${p1} %)
2: ${two} (${p1} %)
3: ${three} (${p1} %)
4: ${four} (${p1} %)
5: ${five} (${p1} %)
6: ${six} (${p1} %)`)
  alert(`1: ${one} (${p1} %)
2: ${two} (${p1} %)
3: ${three} (${p1} %)
4: ${four} (${p1} %)
5: ${five} (${p1} %)
6: ${six} (${p1} %)`)
}
