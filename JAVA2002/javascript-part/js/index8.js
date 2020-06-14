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
var btnCaculate = document.getElementById("js-btn-caculate");
console.log(inputFirstNumber, inputSecondNumber, inputResult, btnCaculate);