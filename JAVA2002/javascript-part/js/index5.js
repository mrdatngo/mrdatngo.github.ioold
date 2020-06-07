var numbers = [1, 6, 3, 5, 8]

// find the first even number
function findNumber(value) {
    if (value % 2 === 0) {
        return true;
    }
    return false
}

var foundNumber = numbers.find(findNumber)
    // console.log(foundNumber)

// filter all even number
var evenNumbers = numbers.filter((value) => {
    return value % 2 == 0
})

console.log("evenNumbers: ", evenNumbers)

// map, reduce, concat, sort
var thai = {
    id: 1,
    firstName: "Luu Quang",
    lastName: "Thai",
    class: "JAVA"
}
var chinh = {
    id: 2,
    firstName: "Nguyen Tien",
    lastName: "Chinh",
    class: "JAVA"
}
var thuong = {
    id: 3,
    firstName: "Nguyen Thi Thu",
    lastName: "Thuong",
    class: "JAVA"
}

thuong.age = 18;

console.log(thuong)

var students = [
    thai,
    chinh,
    thuong
]
console.log("students: ", students)

var newStudents = students.map((student) => {
    // var newStudent = new Object(student)
    // ES6 ...
    return {...student,
        fullName: student.firstName + " " + student.lastName
    }
    // newStudent.fullName = student.firstName + " " + student.lastName;
    // return newStudent;
    // return {
    //     id: student.id,
    //     fullName: student.firstName + " " + student.lastName,
    //     firstName: student.firstName,
    //     lastName: student.lastName,
    //     class: student.class
    // }
})

console.log("newStudents: ", newStudents)

numbers.push(8)
numbers.unshift(2)
console.log("Numbers: ", numbers);
// reduce
var result = numbers.reduce((previousTotal, value) => {
    // return total
    // if (value % 2 === 0) {
    //     var total = previousTotal + value;
    //     console.log(previousTotal, value, total);
    //     return total
    // }
    // return previousTotal
    var total = previousTotal + value;
    console.log(previousTotal, value, total);
    return total
})

console.log(result)
    // sort
var studentsName = ["thuong", "huyen", "khoi", "dung", "hien"]
    // var sortStudentsName = studentsName.sort()
var sortStudentsName = studentsName.sort((a, b) => {
    if (a > b) {
        return -1
    } else if (a < b) {
        return 1
    }
    return 0
})
console.log("sortStudentsName: ", sortStudentsName)

numbers.push(20)
var sortNumbers = numbers.sort((a, b) => {
    return b - a
})
console.log("sortNumbers: ", sortNumbers)
console.log("Concat: ", sortNumbers.concat(sortStudentsName))

// sort list students.... by last name
console.log("students: ", students)

var sortStudents = students.sort((s1, s2) => {
    if (s1.lastName > s2.lastName) {
        return 1
    } else if (s1.lastName < s2.lastName) {
        return -1
    }
    return 0
})

console.log("sortStudents: ", sortStudents);
// for of  -- (1) <=> (2)
for (var student of sortStudents) {
    console.log("Student: ", student);
    // (1)
}

for (var i = 0; i <= sortStudents.length; i++) {
    var student = sortStudents[i];
    // (2)
}
// object
window.name = "Window"
var car = {
    name: "Vinfast",
    model: "2020",
    weight: 900,
    start: function() {
        console.log(this.name + " starting....")
    }
}

function updateCar(car, prop, value) {
    car[prop] = value
        // car.prop = value
}

updateCar(car, "name", "Vinfast2")
updateCar(car, "model", "2022")
console.log("CARRRRR: ", car)

car.country = "Vietnam"
car.stop = function() {
    console.log(this.name + " stopping...")
}

console.log("car name: ", car.name, car["name"], car.country);
// car.start()
car["start"]()
car.stop()

function printObj(obj) {
    for (var prop in obj) {
        if (typeof obj[prop] !== "function") { // only get property, not method
            console.log("prop: ", prop, ", data: ", obj[prop])
        } else {
            obj[prop]()
        }
    }
}

printObj(car)
printObj(thai)

// Function Object
function Car(year, weight, model) {
    this.year = year;
    this.weight = weight;
    this.model = model;
    this.start = function() {
        console.log(this.model + " starting...")
    }
}

var myCar = new Car("2020", 850, "Phone")
var myCar2 = new Car("2021", 950, "IPhone")
console.log(myCar)
console.log(myCar2)

myCar.start()
window.model = "Windowmodel"
var car2Start = myCar2.start.bind(myCar) //.bind(myCar)
car2Start()
myCar2.start()