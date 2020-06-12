function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
                this.responseText;
            // console.log(this.responseText)
        }
    };
    xhttp.open("GET", "https://5e8e421f22d8cd0016a7a062.mockapi.io/api/v1/users?page=2", true);
    xhttp.send();
}

// loadData();

// fetch('https://5e8e421f22d8cd0016a7a062.mockapi.io/api/v1/users')
//     .then(response => response.json())
//     .then(data => console.log(data));

// class

class Person {
    constructor(lastName, firstName) {
        // this.name = name;
        this.lastName = lastName;
        this.firstName = firstName;
        this.name = firstName + " " + lastName;
        // this.go = this.go.bind(this)
    }

    // go = function() {
    //     console.log(this.name + " is going.....")
    // }.bind(this)

    go = () => {
        console.log(this.name + " is going.....")
    }
}

var person = new Person("Thuong", "Nguyen Thi");
var person2 = new Person("Thai", "Nguyen Van");
console.log("Person: ", person)
person.go()
console.log("Go function: ", person.go)

console.log("Person2: ", person2)
person2.go()

// var gogo = person.go.bind(person2);
// gogo()

function someoneGoing(go) {
    // some another tasks....
    go()
}
// var someoneGoing = (go) => {
//     go()
// }
someoneGoing(person.go)

class Doctor extends Person {
    constructor(lastName, firstName, degree) {
        super(lastName, firstName)
        this.degree = degree
    }
}

class Developer extends Person {
    constructor(lastName, firstName, languages) {
        super(lastName, firstName);
        this.languages = languages;
    }
}

class Hacker extends Developer {
    constructor(lastName, firstName, languages, hat) {
        super(lastName, firstName, languages);
        this.hat = hat;
    }
    go = () => {
        console.log("Hacker " + this.name + " is going...")
    }
}

var doctor = new Doctor("Chinh", "Nguyen Tien", "Dentist")
console.log("doctor: ", doctor)
var developer = new Developer("Dat", "Nguyen Van", ["html", "css", "java", "javascript"])
console.log("developer: ", developer)
var hacker = new Hacker("Dung", "Nguyen Thi", ["C/C++", "Assembly"], "blackhat")
console.log(hacker)
hacker.go()

// advance
console.log("---------advance--------");
// var x = 5;
// var x = 6;
let x = 5;
x = 6;
console.log("x: ", x); {
    {
        var y = 5;
        let z = 6;
        console.log("z: ", z)
    }
    // console.log("z: ", z)
}

// function test() {
//     console.log("t: ", t);
//     var t = 5; // hoisting
//     // let t = 5;
// }

function test() {
    let t;
    console.log("t: ", t);
    t = 5; // hoisting
}


test();
// console.log("t: ", t)

console.log("y: ", y)
    // console.log("z: ", z)
    // passing agrument to a function
var number = 5;
var name = "Chinh";

function check(number, name) {
    number = 3;
    name = "Thai"
}
check(number, name);
console.log("number:", number);
console.log("name:", name);

var obj = { number, name };
// var obj = {number: number, name: name}
console.log("obj: ", obj)

function checkObj(myObj) {
    myObj.number = 3;
    myObj.name = "Thai"
}
var cpObj = {...obj }
checkObj(cpObj);
console.log("obj: ", obj)