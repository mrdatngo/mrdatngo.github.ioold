var btnShow = document.getElementById("js-btn-show");
var inputValue = document.getElementById("js-input-value");
var pMessage = document.getElementById("js-message");

btnShow.addEventListener("click", () => {
    // alert(inputValue.value);
    pMessage.innerText = inputValue.value
});
// Caculate ------ 
var inputFirstNumber = document.getElementById("js-first-number");
var inputSecondNumber = document.getElementById("js-second-number");
var inputResult = document.getElementById("js-result");
var operator = document.getElementById("js-operator");
// var selectOperator = document.getElementById("js-operator");

inputFirstNumber.oninput = caculate;
inputSecondNumber.oninput = caculate;
// selectOperator.onchange = caculate;
document.getElementById("js-operator").onchange = caculate;

function getOperator() {
    return operator.options[operator.selectedIndex].value;
}

function caculate() {
    let firstValue = Number(inputFirstNumber.value);
    let secondValue = Number(inputSecondNumber.value);
    let operator = getOperator();
    let total = 0;
    switch (operator) {
        case "+":
            total = firstValue + secondValue;
            break;
        case "-":
            total = firstValue - secondValue;
            break;
        case "*":
            total = firstValue * secondValue;
            break;
        case "/":
            total = firstValue / secondValue;
            break;
    }
    // console.log("Total", String(total))
    inputResult.value = total;
}
// createElement, appendChild
var unorderList = document.getElementById("js-todo");
var inputAdd = document.getElementById("js-input-add");
var btnAdd = document.getElementById("js-btn-add");

console.log(unorderList, inputAdd, btnAdd)
btnAdd.onclick = () => {
    let newTask = inputAdd.value;
    // alert(newTask);
    let listItem = document.createElement("li");
    let buttonRemove = document.createElement("button")
    listItem.innerText = newTask;
    buttonRemove.innerText = "-";
    buttonRemove.onclick = () => {
        unorderList.removeChild(listItem)
    }
    listItem.append(buttonRemove)
    unorderList.append(listItem);
}