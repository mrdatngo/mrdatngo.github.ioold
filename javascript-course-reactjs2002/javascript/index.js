// console.log("Hello class 234!")

// var str = "Hello world!"
// alert(str)

var myNumber = 10
var myName = "Nguyen Van A"
var isMale = true
var person = {
    name: "Nguyen Van B",
    age: 20
}
console.log("Type of myNumber:", typeof (myNumber))
console.log("Type of myNumber:", typeof (myName))
console.log("Type of myNumber:", typeof (isMale))
console.log("Type of myNumber:", typeof (person))
console.log("Type of myNumber:", typeof (person2))
person = null
console.log("Type of myNumber:", typeof (person), person)

var lengthRoad = 150; // meter
var lengthRoad2 = 300;
var lengthRoad3 = 600;
var lengthTotal = lengthRoad2 + lengthRoad + lengthRoad3;
var vec = 30; // m/s
var vec2 = vec - 5; // 25 m/s
var vec3 = 2 * vec;
var timer = lengthTotal / vec;
var timer2 = lengthTotal / vec2;
var timer3 = lengthTotal / vec3;
// var timer = 150 / 30;
console.log("Timer", timer, "s")
console.log("Timer2", timer2, "s")
console.log("Timer3", timer3, "s")
console.log("Remain: ", 7 % 3)

// ++, --
var ageOfNgan = 22;
// ageOfNgan = ageOfNgan + 1;
// ++ageOfNgan

var newAge = ++ageOfNgan
var odlerAge = ageOfNgan--
console.log("Age of Ngan: ", newAge, "Old Age:", ageOfNgan, "Older Age: ", odlerAge)

// calculate
var i = 1;
var j = 2;
var k = 3;
var total = i++ + --i + j++ + ++j + k++;
i = 1;
j = 2;
k = 3;
var totalTemp = i++; totalTemp += --i; totalTemp += j++; totalTemp += ++j;
totalTemp += k++; // a += b <=> a = a + b
1 + (i = 2 - 1) + 2 + 4 + 3
console.log("Total: ", total, "Total2", totalTemp)

var totalCostOfProducts = (1 + (3 / 3)) * 3;
console.log("totalCost: ", totalCostOfProducts)


// var, let , const
var a = 5;
let b = 5;
{
    console.log("Value of a:", a)
    console.log("Value of b:", b)
}

{
    var a2 = 5;
    let b2 = 6;
    console.log("Value of b2:", b2)
}
console.log("Value of a2:", a2)

const c = 5;
// c = 10;
const PI = 3.14;
console.log("Value of c:", c, "PI: ", PI)

// var userName = "Ngan"
// var userName = "Tho"
var userName = "Minh"
var age = 22;
// var userName = prompt("Enter your name:", "")
// var age = parseInt(prompt("Enter your age:", ""))


// difference of == and ===
console.log("Comparation: ", (1 === "1"))
console.log("Comparation: ", (1 == "1"))
console.log("Comparation: ", (1 === "1"))
console.log("Comparation: ", ("Ngan2" === "Ngan"))

if (userName === "Ngan") {
    if (age === 22) {
        console.log("Yes, I'm Ngan of REACTJS2002")
    } else {
        console.log("Yes, I'm Ngan but not in REACTJS2002")
    }
} else if (userName === "Tho") {
    console.log("Yes, I'm Tho")
} else if (userName === "Minh") {
    console.log("Yes, I'm Minh")
} else {
    console.log("Helo, I don't know you!")
}
console.log("-----------------------------------")
userName = "Ngan"
switch (userName) {
    case "Ngan":
        console.log("Yes, I'm Ngan of REACTJS2002");
        break;
    case "Tho":
        console.log("Yes, I'm Tho");
        break;
    case "Minh":
        console.log("Yes, I'm Minh");
        break;
    default:
        console.log("Helo, I don't know you!")
}

// other comparasion
// Rule GRade: nhỏ hơn hoặc bằng 4: yếu, (4 - 6]: trung bình, (6; 8]: Khá, (8, 10]: giỏi 
var grade = 10;
userName = "Huan"
if (userName === "Huan" || (grade < 4 && userName !== "Ngan")) {
    console.log("You're a loser");
} else if (grade <= 6 && userName !== "Ngan") {
    console.log("Your're Medium");
} else if (grade <= 8) {
    console.log("You are good");
} else if (grade <= 10) {
    console.log("You're excellent");
} else {
    console.log("You're monster");
}
// For, while, do-while, For in, For of

// Loop forever
// for(;;) {
//     console.log("I love you")
// }
// while(true) {
//     console.log("I love you")
// } 

for (var i = 0; i < 5; i++) {
    console.log("I'm running round ", (i + 1))
}
// check myNumber2 is Prime or not
var myNumber2 = 41;
var isPrime = false;
if (myNumber2 > 1) {
    isPrime = true;
    for (var i = 2; i <= Math.sqrt(myNumber2); i++) {
        if (myNumber2 % i === 0) {
            isPrime = false;
        }
    }
}

if (isPrime) {
    console.log("It's prime Numer")
} else {
    console.log("It's not prime Number")
}

// Ex1 solution
var n = 10;
for (var i = 0; i < n; i++) {
    console.log(i + 1)
}

// Ex2
var n = 10;
for (var i = 0; i < n; i++) {
    if ((i + 1) % 2 === 1) {
        console.log(i + 1)
    }
}

// 4
console.log("---------------------")
var n = 10;
for (var i = 0; i < n; i++) {
    var myNumber = i + 1;
    var isPrime = false;
    if (myNumber > 1) {
        isPrime = true;
        for (var j = 2; j <= Math.sqrt(myNumber); j++) {
            if (myNumber % j === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        console.log("Prime:", myNumber)
    }
}

// 8
var n = 13578;
var check = true;
while (n > 0 && check) {
    var curLastDigit = n % 10;
    console.log(curLastDigit)
    if (curLastDigit % 2 === 0) {
        check = false;
    }
    n = Math.floor(n / 10);
}

if (check) {
    console.log("YES");
} else {
    console.log("NO");
} n = Math.floor(n / 10)

// done bai tap

function speak() {
    console.log("Hello class");
}

function helloWorld(userName) {
    console.log(userName, "say Hello world")
}

function cooking(userName1, userName2) {
    console.log(userName1, " và ", userName2, " góp gạo thổi cơm chung")
    return true
}

speak();
helloWorld("Tho")
var userName = "Ha"
helloWorld(userName)
var check = cooking("Ha", "Tho")
if (check) {
    // alert("Congratulation")
}

function isEven(value) { // >< odd
    var remain = value % 2;
    if (remain == 0) {
        return true;
    }
    return false;
}
// console.log("Remain", remain)

var checkEven = isEven(4)
var checkEven2 = isEven(5)
console.log("Check", checkEven, checkEven2)

// 4 - format
console.log("---------------------")
function isPrimeNumber(value) { // accpept value param,  return true false
    var isPrime = false;
    if (value > 1) {
        isPrime = true;
        for (var j = 2; j <= Math.sqrt(value); j++) {
            if (value % j === 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime
}

var n = 10;
for (var i = 0; i < n; i++) {
    var isPrime = isPrimeNumber(i + 1)
    if (isPrime) {
        console.log("Prime:", i + 1)
    }
}

const MAX_10000 = 10000;
// explore isEven -- Hoisting
// let, var, const đều có thể dùng để khai báo biến toàn cục
// var có thể dẫn đến hoisting
// const (constant) dùng để khai báo 1 số không thay đổi
// Lưu ý nên dùng let thay var trong trường hợp có thể

function isEven2(value) { // >< odd
    let remain = value % 2;
    let checker;
    if (remain == 0) {
        checker = true;
    } else {
        checker = false;
    }
    console.log("Checker", checker)
    return checker;
}
console.log(isEven2(5))

// recursive - đệ quy - hàm gọi chính nó
// regular function
function count(value) {
    if (value <= 0) return
    console.log(value + 1);
    count(--value);
}

// function expression
let count2 = function(value) {
    if (value <= 0) return
    console.log(value + 1);
    count(--value);
}

// arrow function (fat arrow)
let count3 = (value) => {
    if (value <= 0) return
    console.log(value + 1);
    count(--value);
}

// function countReverse(value) {
//     if (value <= 0) return
//     --value
//     // if (value % 2 === 0) {
//         console.log("Even: ", value)
//     // }
//     countReverse(value);
// }

// countReverse1 -> countReverse2 -> .... -> countReverse10 return, quay lai
// console.log() của countReverse1 <-          <-console.log của hàm 9 <- console.log của hàm 10
count2(10)
count3(10)
// console.log("--------------------------")
// countReverse(10)



