let divOne = document.querySelector('#div1')
let divTwo = document.querySelector('#div2')
let divThree = document.querySelector('#div3')
let divFour = document.querySelector('#div4')
let divFive = document.querySelector('#div5')
let divSix = document.querySelector('#div6')
let divSeven = document.querySelector('#div7')
let divEight = document.querySelector('#div8')
let divNine = document.querySelector('#div9')

var count = 1
function fill(control) {

    if (count <= 9) {
        if (count % 2 != 0) {
            document.getElementById(control.id).innerHTML = 'X'
        } else {
            document.getElementById(control.id).innerHTML = '0'
        }
        count++
        if (checkWin()) {
            alert('winner')
            reset()
        }
    } else {
        alert("match draw")
        reset()
    }
}
function reset() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById('div' + i).innerHTML = ''
    }
    count=1
}
// function checkWin() {
//     if (document.getElementById('div1').innerHTML != '' && document.getElementById('div2').innerHTML != '' && document.getElementById('div3').innerHTML != ''
//         && document.getElementById('div1').innerHTML == document.getElementById('div2').innerHTML && document.getElementById('div2').innerHTML == document.getElementById('div3').innerHTML) {
//         return true
//     }

// }
function checkWin() {
    if (checkCondition('div1', 'div2', 'div3') || checkCondition('div1', 'div5', 'div9') || checkCondition('div1', 'div4',' div7') || checkCondition('div3', 'div5', 'div7') || checkCondition('div5', 'div5', 'div6') || checkCondition('div7', 'div8', 'div9') || checkCondition('div2', 'div5', 'div8') || checkCondition('div3', 'div6', 'div9')) {
        return true
    }
}

function checkCondition(div1, div2, div3) {
    if (getData(div1) != '' && getData(div2) != '' && getData(div3) != ''
        && getData(div1) == getData(div2) && getData(div2) == getData(div3)) {
        return true
    }
}



function getData(div) {
    return document.getElementById(div).innerHTML
}

