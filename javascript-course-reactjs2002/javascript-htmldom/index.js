
var value = prompt("How old are you!", "")
alert(value)

// var strA = "A"
// var strB = "B"

// var a = 5;
// var b = "asdf5asadf";
// var c = a + b

// console.log("a + b = ", c)
// console.log("strA + strB = '" + strA + strB + "'")

let btnClick = document.getElementById("btn-click")

btnClick.addEventListener('click', btnOnClick2)

function btnOnClick() {
    let inputValue = document.getElementById("inputValue")
    let showResult = document.getElementById("showResult")
    var value = Number(inputValue.value)
    let text = ""
    if (isNaN(value)) {
        text = "Please enter a number!"
    } else {
        if (inputValue.value % 2 === 0) {
            text = "EVEN"
        } else {
            text = "ODD"
        }
    }
    showResult.innerHTML = "Result: " + text
}

function btnOnClick2() {
    let inputValue = document.getElementById("inputValue")
    var value = Number(inputValue.value)
    let text = ""
    if (isNaN(value)) {
        text = "Please enter a number!"
    } else {
        if (inputValue.value % 2 === 0) {
            text = "EVEN"
        } else {
            text = "ODD"
        }
    }
    let oldResultElem = document.getElementById("result-elem")
    if (oldResultElem !== null) {
        document.body.removeChild(oldResultElem)
    }
    let resultElem = document.createElement("p")
    resultElem.id = "result-elem"
    let textNode = document.createTextNode("Result: " + text)
    resultElem.appendChild(textNode)
    document.body.appendChild(resultElem)
}