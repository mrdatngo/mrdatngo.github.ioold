var number = 7;

var result = number % 2 == 0 ? "EVEN" : "ODD"
var result = number > 10 ? "INVALID" : (number % 2 == 0 ? "EVEN" : "ODD")
console.log(result)

var check = true;
var result = "";
// if (check) {
//     result = "OKE"
// }

// var result = check && "OKE" && "Last value";
var result = check && "OKE"

console.log("Result: ", result)

// map
var list = ["1", "3", "5"]
var data = list.map(item => `<p>${item}</p>`)
console.log(data)