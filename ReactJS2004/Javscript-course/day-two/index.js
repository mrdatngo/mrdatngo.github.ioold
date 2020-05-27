// function - invoke
/*
var global = 5;

function change(x) {
    x = 10;
    global = 6;
}
var x = 5;
change(x)
console.log("X = ", x, "Global = ", global)

function hello(name, age) {
    if (name == "Quy") {
        return false
    }
    var str = "Hello " + name + ", age: " + age;
    alert(str)
    return true
}

var result = hello("Quy", 22)
console.log("Result: ", result)

// check prime - true : prime, false: not prime

// function isEven(number) {
//     if (number % 2 == 0) {
//         return true
//     }
//     return false
// }
// var isEvenNumber = isEven(5)
// if (isEvenNumber) {
//     alert("EVEN")
// } else {
//     alert("ODD")
// }

// function isPrime(number) {
//     var check = true;
//     if (number <= 1) { check = false }
//     //Math.sqrt(value) căn bậc 2
//     for (var i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i == 0) {
//             check = false
//             break
//         }
//     }
//     return check;
// }
var isPrime = function(number) {
    var check = true;
    if (number <= 1) { check = false }
    //Math.sqrt(value) căn bậc 2
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            check = false
            break
        }
    }
    return check;
}
console.log("Prime Function", isPrime)


var myNumber = 22;
var check = isPrime(myNumber)
if (check === true) {
    console.log("Prime")
} else {
    console.log("Not prime")
}
var n = 20
for (var i = 1; i <= n; i++) {
    var result = isPrime(i)
    if (result) {
        console.log("Prime: ", i)
    }
}
*/
// String
// arrow function, fat arrow
var isOdd = number => {
    // if (number % 2 === 1) {
    //     return true
    // }
    // return false;
    return number % 2 === 1
}

var isOdd2 = number => number % 2 == 1
console.log(isOdd2(5))

// function get correct value
function getNumberFromInput() {
    var myNumber;
    do {
        myNumber = Number(prompt("Enter a number: ", 0))
    } while (Number.isNaN(myNumber))
    return myNumber
}

// alert("hello")
// window.alert("Hello 2")

var strNumber = "1234"
var floatNumber = Number.parseFloat(strNumber)
var intNumber = parseInt(strNumber)
var number = Number(strNumber)
console.log("Float Number: ", floatNumber, Number.isInteger(floatNumber))
console.log("Int Number: ", intNumber, Number.isInteger(intNumber))
console.log("Number: ", number, Number.isInteger(number))
console.log(typeof(NaN))

// Math.round(), Math.ceil(), Math.floor(), Math.random(), Math.foFixed()
var x = 1234.925482347328
var roundX = Math.round(x)
var floorX = Math.floor(x)
var ceilX = Math.ceil(x)
var toFixedX = x.toFixed(4)
console.log("roundX: ", roundX)
console.log("floor: ", floorX)
console.log("ceil: ", ceilX)
console.log("toFixed", toFixedX)

// Solve Ex-8
var check = true
var n = 2337537379;
while (n > 0) {
    var remain = n % 10;
    if (remain % 2 == 0) {
        check = false
    }
    console.log(remain)
    n = (n - remain) / 10;
}
console.log("check: ", check)

console.log("Random: ", Math.random())
    // random 1 number from 1 - n


// function randomFrom1ToN(n) {
//     return Math.floor(Math.random() * n) + 1;
// }

function randomFromZeroToN(n) {
    return Math.floor(Math.random() * (n + 1));
}

function random(from, to) {
    return from + randomFromZeroToN(to - from);
}
var from = 5;
var to = 6;
// console.log("Random 1 -> 10: ", randomFrom1ToN(10))
console.log("Random " + from + " -> " + to + ":", random(from, to))