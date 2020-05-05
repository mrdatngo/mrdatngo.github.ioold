var callback = function (myFunc) {
    myFunc()
}

var car = {
    name: "Fiat",
    start: function () {
        callback(() => {
            console.log(this.name + " Car is running")
        })
    }
}

car.start()

/*
var x = "name"

console.log(car.name)
console.log(car["name"])
console.log(car[x])

car.start()
car["start"]()

// Many way to declare a object
// 1.Liter
var myCar = { name: "Fiat" }

// 2.function constructors

function Person() {
    this.name = "Fiat"
}

var person = new Person()

console.log(person.name)

// 3. Object create
var carClone = Object.create(car)
carClone.start()

// for in properties

for (let prop in car) {
    if (typeof(car[prop]) === "function") {
        console.log("Calling function: ")
        car[prop]()
    } else {
        console.log(prop, "Value: ", car[prop])
    }
}

// bind
// console.log("------------")
// this.name = "Wave"
// var myFunc = car.start.bind(this)
// myFunc()

*/

function doTasks() {
    console.log("Starting cooking")
    setTimeout(cookingRice, 1000)
}

function cookingRice() {
    console.log("Starting cooking rice")
    setTimeout(cookingSoup, 2000)
}
function cookingSoup() {
    console.log("Starting cooking soup")
    setTimeout(cookingFish, 2000)
}
function cookingFish() {
    console.log("Starting cooking fish");
    setTimeout(() => {
        console.log("Done")
    }, 1000)
}

// doTasks()

var check = false

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (check) {
            resolve({ status: true })
        } else {
            reject({ status: false })
        }
    }, 3000)
})

p.then((data) => {
    console.log(data)
}).catch(data => {
    console.log(data)
})

console.log("Program is not blocking")

function loadXMLDoc() {
    return new Promise((resolve, reject) => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(this.responseText)
            }
        };
        xhttp.open("GET", "https://www.mocky.io/v2/5185415ba171ea3a00704eed", true);
        xhttp.send();
    })
    
}


async function doJobs() {
    console.log("START do job")
    // for(let i = 0; i < 5000000000; i++) {}
    console.log("HIHI")
    let result
    try {
        // result = await p
        result = await loadXMLDoc()
        console.log("Result ne: ", result)
    } catch (e) {
        console.log(e)
    }

    console.log("result: ", result)
}
doJobs()

console.log("HIHI")

console.log("class")