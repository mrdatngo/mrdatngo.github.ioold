// alert("Hello class")

// int my_number = 5; // c 

var helloMessage = "Hello class"
    // console.log(helloMessage)
var space = (100 + 20 - (40 - 10)) * 2;
var velocity = 5;
var timer = space / velocity;
// console.log("timer = ", timer)
// console.log("remainer = ", 5 % 3)

var index = 0;
index++;
++index;
// console.log("index", index)

var a = 0;
var a1 = a++;
var a2 = ++a;
a = 2;

var b = 5;
var c = b++ + ++b + --a + a-- + a;
// console.log("c = ", c)
// console.log("a = ", a, ", a1 = ", a1, ", a2 = ", a2)

let d = 5;
const PI = 3.14;
// PI = 3.15;
// console.log(PI)

// Cac cau lenh

// if ([]) {
//     alert("True")
// } else {
//     alert("False")
// }

// var studentName = window.prompt("Enter your name", "no name")
// var studentMark = prompt("Enter your mark", -1)
// studentMark = Number(studentMark)
//     // console.log("myMark: ", studentMark, "Typeof(mymark):", typeof(studentMark))
// console.log("Student Name: ", studentName)
// console.log("Student Mark: ", studentMark, typeof(studentMark))
/*
    Problem: check the level of student, and alert to browser
    [0 - 4): Bad,
    [4 - 6): Medium,
    [6 - 8): Good,
    [8 - 9): Very good,
    [9 - 10]: Excellent 
*/
// if (studentMark) {
//     alert("True")
// } else {
//     alert("False")
// }
// if (studentMark < 0 || studentMark > 10) {
//     alert("Your mark is not correct, F5 to re-enter")
// } else if (studentMark < 4) {
//     alert(studentName + "'re bad")
// } else if (studentMark < 6) {
//     alert(studentName + "'re medium 2")
// } else if (studentMark < 8) {
//     alert(studentName + "'re good")
// } else if (studentMark < 9) {
//     alert(studentName + "'re very good")
// } else if (studentMark <= 10) {
//     alert(studentName + "'re excellent")
// }

// if (studentName === "Minh") {
//     alert("Hello Minh")
// } else if (studentName === "An") {
//     alert("Hello An")
// } else if (studentName === "Quy") {
//     alert("Xin chao Tan Back Khoa")
// } else if (studentName === "Dat") {
//     alert("Xin chao ban cua Tan Back Khoa")
// } else if (student === "Nam") {
//     alert("Xin chao Nam")
// }

// switch (studentName) {
//     case "Minh":
//         alert("Hello Minh");
//         break;
//     case "An":
//         alert("Hello An");
//         break;
//     case "Quy":
//         alert("Xin chao Tan Back Khoa");
//         break;
//     default:
//         alert("I don't know you!")
// }

// var month = 5;
// switch (month) {
//     case 1:
//     case 2:
//     case 3:
//         alert("Spring");
//         break;
//     case 4:
//     case 5:
//     case 6:
//         alert("Summer");
//         break;
//     case 7:
//     case 8:
//     case 9:
//         alert("Autumn");
//         break;
// }


// console.log(Number.MAX_VALUE)
var i = 0;
var limit = 10;
for (var i = 0; i < limit; i++) {
    // for (var j = 0; j < limit; j++) {
    //     console.log("i & j", i, "&", j)
    // }
    console.log("I love you!")
}

// var number = Number(prompt("Enter a number: ", 0))
// while (true) {
//     if (number < 0 || number > 10) {
//         number = Number(prompt("Enter a number: ", 0))
//     } else {
//         break;
//     }
// }

// while (number < 0 || number > 10) {
//     number = Number(prompt("Enter a number: ", 0))
// }

var myNumber;
do {
    myNumber = Number(prompt("Enter a number: ", 0))
} while (Number.isNaN(myNumber))

/// check even odd of myNumber
if (myNumber % 2 == 1) {
    alert("ODD")
} else {
    alert("EVEN")
}

// EVEN
// ODD 7 % 2 = 1
// Number.isNaN(value)

console.log("Oke, you enter a good number: ", myNumber)


// var i2 = 0;
// while (i2 < limit) {
//     i2 += 1;
//     console.log("I love you!")
// }

console.log("Done")
    // if (studentMark === 10 && studentName === "Minh") {
    //     window.alert("You're excellent")
    // } else {
    //     alert("You're not excellent")
    // }

var todayIsRaining = true;
var number = 10;

// if (todayIsRaining) {
//     alert("It's true")
// } else {
//     alert("Its' false")
// }