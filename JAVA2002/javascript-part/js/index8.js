var btnShow = document.getElementById("js-btn-show");
var inputValue = document.getElementById("js-input-value");
var pMessage = document.getElementById("js-message");

btnShow.addEventListener("click", () => {
    // alert(inputValue.value);
    pMessage.innerText = inputValue.value
});
// Caculate
var inputFirstNumber = document.getElementById("js-first-number");
var inputSecondNumber = document.getElementById("js-second-number");
var inputResult = document.getElementById("js-result");
// var btnCaculate = document.getElementById("js-btn-caculate");
// console.log(inputFirstNumber, inputSecondNumber, inputResult, btnCaculate);

inputFirstNumber.oninput = caculate;
inputSecondNumber.oninput = caculate;

// inputFirstNumber.addEventListener("input", function() {
//     alert("Hihi")
// })

// btnCaculate.onclick = caculate;

function caculate() {
    let firstValue = Number(inputFirstNumber.value);
    let secondValue = Number(inputSecondNumber.value);
    let total = firstValue + secondValue;
    inputResult.value = total;
}