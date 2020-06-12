let PI = 3.14
var x2;

function task() {
    try {
        console.log(x)
        let x = 5;
        // throw "My exception"
    } catch (e) {
        console.log(e)
    }
}

function checkNumber(value) {
    if (Number.isNaN(Number(value))) {
        throw "Wrong number"
    }
    if (value % 2 == 0) {
        alert("EVEN")
    } else {
        alert("ODD")
    }
}

// task()
console.log("continue")
try {
    // checkNumber(6)
} catch (e) {
    console.log(e)
}

console.log("--------------------------");
// javascript advance
// differences of var, const, let
// var x = 5;
// var x = 6;
let PI2 = 3.1415;
let x = 5;
x = 6;
console.log(x);

function test() {
    console.log("Y: ", y); {
        {
            var y = 5;
        }
    }
}

if (true) {
    let y = 6;
}
test()
    // console.log(y)

{
    {
        console.log(x2)
            // console.log(x3)
        x2 = 5;
        let x3 = 5;
    }
    // console.log(x3)
}

console.log(x2)
    // passing arguement to a function

function changeValue(age, name) {
    age = 21;
    name = "Dat"
}
var age = 20;
var name = "Quy"
console.log("Origin: ", age, name)
changeValue(age, name)
console.log("after: ", age, name)

function changeValueObj(student) {
    console.log("STudent: ", student)
    student.age = 21;
    student.name = "Dat"
}
var student = { age: 20, name: "Quy" }
console.log("Student: ", student)
changeValueObj({...student, id: "STD1", name: "Quy2" })
console.log("After: ", student)

// function programmingLanguage(languages) {
//     console.log("languages: ", languages)
// }

function programmingLanguage(name, ...languages) {
    console.log(name)
    console.log("languages: ", languages)
}

programmingLanguage("C", "C++", "JavaScript", "HTML", "Java", "C#")
    // var languages = ["C", "C++", "Javascript", "HTML", "CSS"]
    // programmingLanguage(languages)

var student = {
    firstName: "Nguyen Van ",
    lastName: "Quy",
    age: 20
}
var newStudent = {...student, fullName: student.firstName + student.lastName }
console.log("New Student", newStudent)

// closure
var plus = (function() {
    var counter = 0;
    return function() {
        return ++counter;
    }
})()

function onClick() {
    alert("test")
}

console.log(plus())
console.log(plus())
console.log(plus())