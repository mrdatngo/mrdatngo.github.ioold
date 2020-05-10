
function createNewPerson(name) {
    const obj = {
        name: name,
        greeting: function() {
            alert("Hi! Im " + this.name)
        }
    }
    return obj
}

const person1 = createNewPerson("Thien")
console.log(person1.name)
// person1.greeting()

person1.age = 20
person1.hello = function () {
    alert(person1.name + " say hello")
}

console.log(person1.age)
// person1.hello()

console.log(window)

// function Person(_name) {
//     var name = _name
//     this.greeting = function() {
//         alert("Hi! Im " + name)
//     }
// }

function Array(name) {
    var a = [];
    var size = 0;
    this.Size = 0;
    var name = ""

    this.setName = function(newName) {
        name = newName.toUpperCase()
    }

    this.getName = function() {
        return name
    }

    this.append = function (value) {
        a.push(value)
        size = a.length
        this.Size = a.length
    }

    this.values = function() {
        return a
    }

    this.getSize = function() {
        return size
    }
}

// console.log("My Array: %v", myArray)

// let myArray = new Array()
// myArray.append(10)
// myArray.append(20)
// myArray.Size = 10;
// console.log(myArray.Size)
// var values = myArray.values()
// values[myArray.Size] = 20
// console.log(values[myArray.Size])
// console.log(values)
// console.log(myArray.getSize())
// encapsulation


// let person = new Person("Phuc")
// person.greeting()
// console.log(person.getName())



// Person.prototype.age = 20

// let person2 = new Person("abc")
// person2.age = 20
// person2.name = "override name"
// console.log("person2 age", person2.age)
// console.log("person2 name", person2.name)


// let person3 = new Person("Thu")
// console.log("Person 3 age", person3.age)
// console.log("Person 3: ", person3)

// for(let pro in person3) {
//     console.log("Prop:", pro)
// }

// let strValue = "hello world"
// let strValueObj = new String("hello world")

// console.log("strValue", strValue)
// console.log("strValue", strValueObj.toString())

// let person2 = new Person("Bob")
// let person3 = new Person("Thu")
// console.log("Person3: ", person3)
// console.log("person2: ", person2.name)
// person2.greeting()

// console.log("ABC", Person("abc"))


// Student Teacher < Person

function Person(_name) {
    var name = _name
    this.greeting = function() {
        alert("Hi! Im " + name)
    }
}

let person = new Person("Thien")
let person2 = new Person("Thu")
// person.greeting.bind(person2)()
// person.greeting.call(person2)

function Student(_name, mark) {
    this.mark = mark
    this.name = _name
    Person.call(this, this.name)
    this.goToSchool = function() {
        console.log("Go to school")
    }
}

// let student = new Student("Ngan")
// student.goToSchool()
// student.greeting()

function Teacher(name) {
    this.name = name
    this.checkMark = function() {
        console.log("Check mark")
    }
}

// class
class PersonClass {
    constructor(age) {
        this.age = age
    }
    go = () => {
        alert("Go")
    }
}

class StudentClass extends PersonClass {
    constructor(name, age) {
        super(age)
        this.name = name;
    }

    goToSchool = () => {
        alert("Go to school " + this.name)
    }
}

let myStudent = new StudentClass("Ngan")
myStudent.goToSchool()
myStudent.go()