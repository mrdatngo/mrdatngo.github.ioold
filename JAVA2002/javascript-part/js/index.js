// // console.log("Hello")
// // alert("Hello world")
// var helloWorld = "Hello world! 2020"
// let helloWorld2 = "Hello world"
// const helloWorld3 = "Hello world"
//     // const number;
//     // number = 6;
// var number;
// number = 6;
// console.log(number)
// console.log(helloWorld, typeof(helloWorld))
// console.log(number, typeof(number))
// var x;
// var object = null
// console.log(x)
// console.log(object)

// // caculate timer
// var space = 120 + 100 - 60;
// var velocity = 20;
// var timer = space / velocity;
// console.log(timer, "hours")
// console.log(9 % 5)
// var hello = "Hello" + " " + "world"
// console.log(hello)

// // mix
// var mix = 5 + "5";
// console.log("Mix: ", mix, typeof(mix))

// 20 - 05

var i = 0;
i += 1; // <=> i = i + 1
i -= 1;
i *= 1;
i /= 1;
i = 0;
i++ // value the same i = i + 1;
console.log("i : ", i)
i = 0;
++i // value the same i = i + 1;
i = 0;
var j = ++i;
console.log("i = ", i, ", j = ", j)

i = 3;
j = 2;
var k = i++ + i++ + ++i + ++i + --j + j;
console.log("K = ", k)

// if
// var answer = prompt("Is it rainning today?", "NO")
// console.log("answer:", answer);
// var isOkay = prompt("Are you okay?", "YES")

// var x = 5;
// x == 5;

// var isRainning = answer == "YES"
// if (answer == "NO") {
//     isRainning = false
// } else {
//     isRainning = true
// }

// if (answer == "NO" || isOkay == "YES") {
//     alert("I'm going to school")
// } else {
//     alert("Im stay at home")
// }

// var mark = prompt("Enter your mark: ", 0)
// mark = Number(mark)
// console.log("Mark: ", mark, typeof(mark))
/*
    mark [0, 4) : bad,
    mark [4, 6) : medium,
    mark [6, 8) : good,
    mark [8, 9) : very good,
    mark [9, 10]: excellent5
*/

// if (mark < 0 || mark > 10) {
//     console.log("Your mark is not valid")
// } else if (mark < 4) {
//     console.log("You're bad")
// } else if (mark < 6) {
//     console.log("You're medium")
// } else if (mark < 8) {
//     console.log("Your're good")
// } else if (mark < 9) {
//     console.log("Your're very good")
// } else if (mark <= 10) {
//     console.log("Your're excellent")
// }

// var month = prompt("Enter month: ", 0)
// month = Number(month)
// switch (month) {
//     case 1:
//     case 2:
//     case 3:
//         console.log("Spring");
//         break;
//     case 4:
//     case 5:
//     case 6:
//         console.log("Summer");
//         break;
//         //..
// }

// for - while - do while

var n = 10;
for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
        // console.log("I love you", i, j)
    }
    // if (i % 2 == 0) {
    //     console.log("I love you", i)
    // }
}

// var answer = prompt("Do you love me, ha?", "YES")
// console.log("Answer", answer)
// while (answer !== "YES") {
//     answer = prompt("Do you love me, ha?", "YES")
// }


var answer
var number
do {
    answer = prompt("Enter a number", "0")
    number = Number(answer)
} while (Number.isNaN(number))

// if (number % 2 == 1) {
//     alert("ODD")
// } else {
//     alert("EVEN")
// }
// window.alert("I love you, too!");

// check prime number
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

alert(isPrime)