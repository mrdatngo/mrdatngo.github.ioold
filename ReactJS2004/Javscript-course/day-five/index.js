function cooking(cookingRice) {
    // cooking fish
    // cooking soup
    cookingRice()
}

// callback
function cookingRice() {
    // coding...
    console.log("Cooking rice")
}

cooking(cookingRice)

var numbers = [1, 4, 3, 7, 10]

function checkPrime(item) {
    console.log("Item: ", item)
    return item === 4
}

// custom find
function find(checkPrime) {
    for (var i = 0; i < numbers.length; i++) {
        var result = checkPrime(numbers[i])
        if (result) {
            return numbers[i]
        }
    }
}

// var foundNumber = numbers.find(checkPrime)
var foundNumber = find(checkPrime)
console.log("foundNumber: ", foundNumber);
// console.log(numbers.indexOf(3))
// object basic
var quy = {
    firstName: "Quy",
    lastName: "Le Xuan",
    age: 22,
    mark: 5
}

var dat = {
    firstName: "Dat",
    lastName: "Duong Tien",
    age: 22,
    mark: 9
}

var students = [
        quy,
        dat,
        {
            firstName: "Bao",
            lastName: "Pham Thai",
            age: "18",
            mark: "8"
        },
        {
            firstName: "Minh",
            lastName: "Pham Anh",
            age: "15",
            mark: "8"
        }
    ]
    // quy.name = "Duong Tien Dat"
console.log("Find Thai Bao: ",
    students.indexOf({
        name: "Thai Bao",
        age: "18",
        mark: "8"
    })
)

console.log("Find Quy: ",
    students.indexOf(quy)
)

console.log("Name:", quy.name, quy["name"])
console.log("Age: ", dat.age)
console.log("students: ", students)

// testing
var x = "Le Quan Quy"
var y = x
x = "Duong Tien Dat"
console.log("x, y", x, y)

var objX = { name: "Le Xuan Quy" }
var objY = objX
objY.name = "Duong Tien Dat"

console.log("objX, objY", objX, objY)

// find Thai Bao in students
console.log("Students: ", students)
var foundBao = students.find((item) => {
    return item.name === "Thai Bao"
})

console.log("Found Bao: ", foundBao)

// filter, map, reduce
var filterStudents = students.filter((item) => {
    // console.log("Item", item)
    return item.age >= 22
})

console.log("Filter Students: ", filterStudents);
// ------------------------------
console.log("Students: ", students)
var studentFullNames = students.map((student) => {
    return student.lastName + " " + student.firstName
})

var studentsRestructure = students.map((student) => {
    return {
        name: student.lastName + " " + student.firstName,
        age: student.age,
        mark: student.mark
    }
    // return {...student, name: student.lastName + " " + student.firstName }
})

console.log("quy: ", quy)
console.log("studentsRestructure: ", studentsRestructure)

var numbers = [1, 2, 10, 5, 6, 8, 9]
var result = numbers.reduce((total, value, index, arr) => {
    // console.log("c: ", c, d)
    if (value % 2 === 1) {
        return total + value
    }
    return total
}, 0)

var odds = numbers.reduce((total, value) => {
    if (value % 2 === 1) {
        total.push(value)
        return total
    }
    return total
}, [])
console.log("Result: ", result)
console.log("odds: ", odds)

// sort
var names = ["dat", "quy", "minh", "khang"]
console.log("beginning numbers: ", numbers)
numbers.sort((a, b) => {
    // console.log("a, b", a, b)
    // return 1
    // if (a > b) {
    //     return -1
    // } else if (a < b) {
    //     return 1
    // } else {
    //     return 0
    // }
    // return a - b
})
console.log("ending numbers:", numbers)

console.log("beginning names: ", names);
// names.sort().reverse()
names.sort((firstStr, secondStr) => {
    if (firstStr > secondStr) {
        return -1
    } else if (firstStr < secondStr) {
        return 1
    } else {
        return 0
    }
})
console.log("ending names:", names)
console.log("Concat: ", names.concat(numbers))

for (var student of students) {
    console.log("Student: ", student)
    student.firstName = "abc"
    for (var prop in student) {
        console.log("prop: ", prop)
    }
}

console.log("students: ", students)

for (var i = 0; i < students.length; i++) {
    var student = students[i]
        // students[i].firstName = "xyz"
    student.firstName += " " + (i + 1)
}
console.log("students: ", students)

var mixes = [{
        name: "Nguyen Van A",
        class: "Math"
    },
    {
        name: "Fiat",
        weight: "850"
    },
    {
        school: "T3H",
        prop: "hihi"
    }
]

for (var mix of mixes) {
    for (var prop in mix) {
        console.log(prop, mix[prop])
    }
}

// object
var car = {
    name: "Fiat",
    weight: 850,
    year: 2000,
    start: function() {
        console.log(this.name + " starting....")
    }
}

car.model = "Model A"
car.name = "Fiat rename";
// window.name = "Window"
car.stop = function() {
    console.log(this.name + " car stopping")
}

console.log(car)
car.start()
car.stop()

// function object
function Student(id, name, className) {
    this.id = id;
    this.name = name;
    this.class = className;
    this.exam = function() {
        console.log(this.name + " exam...")
    }
}

var quy = new Student(1, "Quy", "REACTJS")
quy.school = "abc"
window.name = "Window"
quy.exam()
var quyExam = quy.exam.bind(quy)
quyExam()
var dat = new Student(2, "Dat", "REACTJS")
console.log("Quy", quy)