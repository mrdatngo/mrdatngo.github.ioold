// function

function hello(name) {
    alert("Hello " + name)
    console.log("hello " + name)
}

// invoke, call function
// hello("Class")
// hello("World")

// function isPrime, check is default true
var global = 5;

function checkPrime(number) {
    // var global = 6;
    global = 6;
    console.log("Global: ", global)
    var isPrime = true
    if (number < 2) {
        isPrime = false
    } else {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false
                break
            }
        }
    }
    number = 1;
    console.log("Number: ", number)
    return isPrime
}
var number = 13
var isPrimeNumber = checkPrime(number)
console.log("Global 2: ", global)

console.log("Number: ", number)

// recursive
// function check(number) {
//     if (number == 0) { return 0; }
//     var result = check(number - 1);
//     return number + result;
// }

let check = function(number) {
    if (number == 0) { return 0; }
    var result = check(number - 1);
    return number + result;
}
var total = check(10)
console.log("Total: ", total)

// function check even number
function isEven(number) {
    // if (number % 2 === 0) {
    //     return true
    // } else {
    //     return false
    // }
    return number % 2 === 0
}
// use arrow function, fat arrow
let isEvenArrow = number => number % 2 === 0

var checkEven = isEvenArrow(2)
console.log("checkEven", checkEven)

// math handle`
var strNumber = "1234.5"
var numberInt = Number.parseInt(strNumber)
var numberFloat = Number.parseFloat(strNumber)
var number = Number(strNumber)
console.log("numberInt: ", numberInt,
    "numberFloat", numberFloat,
    "number: ", number, Number.isInteger(number))

console.log("Math.floor: ", Math.floor(number))
console.log("Math.ceil: ", Math.ceil(number))
console.log("Math.round: ", Math.round(number))
console.log("Random:", Math.random())

// random a number from 1 - n
var n = 19;

function getRandomFrom1ToN(n) {
    return Math.floor(Math.random() * n) + 1;
}

// function random0toN(n) {
//     return Math.floor(Math.random() * n + 1)
// }

function getRandom(from, to) {
    return from + Math.floor(Math.random() * (to - from + 1))
}

console.log("result", getRandom(n))
var from = 5;
var to = 10;
console.log("result " + from + " -> " + to + " :",
    getRandom(from, to))

// String
var name = "\"'Mr \n \t Toan\""
    // var name2 = '"MrToan"'
var userName = "Chinh"
var name3 = `Mr${userName} - 20 age - not Marry`
console.log(name, name3)

// Ex8 - Kiểm tra số n có toàn số lẻ tạo thành hay không
var n = 75975;
var check2 = true;
while (n > 0) {
    var remain = n % 10;
    // console.log("remain", remain)
    if (remain % 2 == 0) {
        check2 = false;
        break;
    }
    n = Math.floor(n / 10)
}
alert(check2)