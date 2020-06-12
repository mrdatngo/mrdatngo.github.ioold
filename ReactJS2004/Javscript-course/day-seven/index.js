// class Person {
//     constructor(name) {
//         this.name = name;
//         // this.eat = this.eat.bind(this);
//     }
//     go = () => {
//         console.log(this.name + " is going...")
//     }
//     eat = () => {
//         console.log(this.name + " is eating...")
//     }
// }
// var quy = new Person("Quy");
// quy.go()
// quy.eat();
// var go = quy.go
// var eat = quy.eat
// go()
// eat()

// // var dat = new Person("Dat")
// // dat.go()

// class Teacher extends Person {
//     constructor(name, age) {
//         super(name)
//         this.age = age;
//     }
// }

// class Doctor extends Person {
//     constructor(name, degree) {
//         super(name)
//         this.degree = degree
//     }
// }
// var teacher = new Teacher("Huan", 30)
// var doctor = new Doctor("Blutooth", "dentist")
// console.log(teacher)
// console.log(doctor)

// document.body.style.backgroundColor = "green";

// document.getElementById("js-btn-click").onclick = onClick

// function onClick() {
//     var inputText = document.getElementById("js-input-text");
//     var value = inputText.value;
//     // alert(value);
//     document.body.style.backgroundColor = value;
// }

// var buttonStart = document.getElementById("js-start");
// var buttonStop = document.getElementById("js-stop");
// var oclock = document.getElementById("js-oclock");
// var clockInterval;
// buttonStart.onclick = function() {
//     clockInterval = setInterval(() => {
//         var curDate = new Date()
//         oclock.innerText = curDate.toLocaleTimeString()
//     }, 1000);
// }

// buttonStop.onclick = function() {
//     clearInterval(clockInterval);
//     oclock.innerText = "-- : -- : --"
// }

// var data = prompt("Enter value", 0)
// console.log("data: ", data)
// if (data % 2 == 0) {
//     alert("EVEN")
// } else {
//     alert("ODD")
// }

// validate form
var errUsername = document.getElementById("js-err-username");
var errPassword = document.getElementById("js-err-password");
var inputUsername = document.getElementById("username");
var inputPassword = document.getElementById("pwd");
var btnSubmit = document.getElementById("js-btn-submit");

var isAlpha = function(ch) {
    return /^[A-Za-z0-9]$/i.test(ch);
}

btnSubmit.onclick = function(event) {
    try {
        var username = inputUsername.value;
        var password = inputPassword.value;
        console.log(username, password);
        txtUserError = ""
        txtPasswordError = ""
        if (username === "") {
            txtUserError = "Please enter username"
        } else if (username.substr(0, 3) !== "T3H") {
            txtUserError = "Username must start with 'T3H'"
        } else if (username.length < 6) {
            txtUserError = "Username must have more than 6 characters"
        } else if (!isAlpha(username)) {
            txtUserError = "Username not contain special characters"
        }

        if (password == "") {
            txtPasswordError = "Please enter password"
        }
        if (txtUserError != "" || txtPasswordError != "") {
            errUsername.innerText = txtUserError
            errPassword.innerText = txtPasswordError
            event.preventDefault();
        }
    } catch (e) {
        console.log(e)
        event.preventDefault();
    }
}

console.log("Elements", inputUsername, inputPassword, errUsername, errPassword, btnSubmit)