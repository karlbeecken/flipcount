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
  if (e.keyCode === 49 || e.keyCode === 97) {
    click1()
  } else if (e.keyCode === 50 || e.keyCode === 98) {
    click2()
  } else if (e.keyCode === 51 || e.keyCode === 99) {
    click3()
  } else if (e.keyCode === 52 || e.keyCode === 100) {
    click4()
  } else if (e.keyCode === 53 || e.keyCode === 101) {
    click5()
  } else if (e.keyCode === 54 || e.keyCode === 102) {
    click6()
  } else if (e.keyCode === 13) {
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
  sum = one + two + three + four + five + six
  p1 = one / sum * 100
  p2 = two / sum * 100
  p3 = three / sum * 100
  p4 = four / sum * 100
  p5 = five / sum * 100
  p6 = six / sum * 100
  console.log(`1: ${one} (${p1} %)
2: ${two} (${p2} %)
3: ${three} (${p3} %)
4: ${four} (${p4} %)
5: ${five} (${p5} %)
6: ${six} (${p6} %)`)
  alert(`1: ${one} (${p1} %)
2: ${two} (${p2} %)
3: ${three} (${p3} %)
4: ${four} (${p4} %)
5: ${five} (${p5} %)
6: ${six} (${p6} %)`)
}

function save () {
  document.getElementById('1').value - 1 = one
  document.getElementById('2').value - 1 = two
  document.getElementById('3').value - 1 = three
  document.getElementById('4').value - 1 = four
  document.getElementById('5').value - 1 = five
  document.getElementById('6').value - 1 = six
  submit1()
  submit2()
  submit3()
  submit4()
  submit5()
  submit6()
}
