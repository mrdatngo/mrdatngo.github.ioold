// Solve exercise 20
let queriesStr = `computer =            " ngAND    98    " AND class = "  REACTJS2002 "`
let queries = queriesStr.split(/"*"/) // split by " with inside is anything

for (let i = 1; i < queries.length; i += 2) {
    queries[i] = '"' + queries[i].trim() + '"'
}

let result = queries.join("")
console.log(result)

// 23's solution
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 8, 7, 6, 6, 6, 6, 6, 6, 6, 6, 5, 4, 3, 2, 1]
// a = a.sort() // n*log(n)
// console.log(a)
let maxFrequency = 0
for (let i = 0; i < a.length; i++) {
    // first solution
    // let curFrequency = 0
    // for (let j = 0; j < a.length; j++) {
    //     if (a[j] == a[i]) {
    //         curFrequency++
    //     }
    // }
    let filterEqualValue = a.filter((value) => {
        return a[i] == value
    })
    curFrequency = filterEqualValue.length
    if (maxFrequency < curFrequency) {
        maxFrequency = curFrequency
    }
    // console.log(a[i] + " Frequency " + curFrequency)
}

console.log("Output: " + maxFrequency)

// 24's solution

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

let resultPrimes = a.filter(value => {
    return isPrimeNumber(value)
})

console.log("Result", resultPrimes)

function absCus2Param(a, b) {
    let space = a - b
    if (space < 0) {
        space *= -1
    }
    console.log()
    return space
}
function absCus(value) {
    if (value < 0) {
        value *= -1
    }
    return value
}

// 26's solution
let b = [1, 2, 3, 4, 5, 6, 7]
let k = 5
let minSpace = Infinity
for (let i = 0; i < b.length; i++) { // tìm minspace 
    let space = absCus(b[i] - k)
    if (minSpace > space) {
        minSpace = space
    }
}
let results26 = []
for (let i = 0; i < b.length; i++) { // lấy tất cả các value có khoảng cách = minspace
    let space = absCus(b[i] - k)
    if (space === minSpace) {
        results26.push(b[i])
    }
}
console.log("Result: ", results26)
console.log("Cusabs: ", absCus(5, 1))

// note cac bai tap
//a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1] .Output: 8
/* 30: solution:
    1. Tìm số lớn nhất trong vòng lặp đầu tiên 9
    2. Tìm số lớn nhất nhưng khác số tìm được trong vòng
*/

/*
 Bài 31: 3 vòng for lồng nhau:
    1. i = 0 -> n
    2. j = i + 1 -> n
    3. v = j + 1 -> n
    if (a[i] + a[j] + a[v] === k) // oke
*/

/*
 Bài 32: Lặp từ i -> length, if a[i] < k => a.splice(i, 0, k)
*/

/* Tìm hiểu về sort */
console.log("-----------------------------")
// Object
let car = {
    name: "Fiat",
    model: 500,
    weight: 850,
    color: "white",
    start: function () {
        console.log(this.name + " is start running...");
    }
};

// loop all properties and methods in object car
for (let variable in car) {
    console.log("Variable: ", variable, typeof (variable))
    console.log("value: ", car[variable], typeof (car[variable]))
}

// loop all value in object car
let cars = [{ name: "Fiat" }, { name: "Honda" }]
for (let variable of cars) {
    console.log("Variable: ", variable)
}

console.log("Car ", car.name)
car.start()

// function object
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

var myCar = new Car("Egle", "Talon", 1993)
console.log("myCar", myCar)
console.log("MyCar make: ", myCar.make)

console.log("-----------------------------")

let mySetTimeOut = function (callback) {
    return callback()
}

// Object
let myCarObject = {
    name: "Fiat",
    model: 500,
    weight: 850,
    color: "white",
    start: function () {
        var self = this
        // console.log("=>" + this.name + "<=" + " is start running...");
        let runningSelf = function () {
            console.log("=>" + self.name + "<=" + " is start running...");
        }

        let runningThis = function () {
            console.log("=>" + this.name + "<=" + " is start running...");
        }
        // mySetTimeOut(runningSelf)
        mySetTimeOut(runningThis)
        // setTimeout(runningSelf, 1000)
        // console.log("Hello class")
    }
};

// myCarObject.start()

console.log("-----------------------------")

// Object
let myCarObject2 = {
    name: "Fiat",
    model: 500,
    weight: 850,
    color: "white",
    start: function () {
        console.log("=>" + this.name + "<=" + " is start running........");
        let running = () => {
            console.log("=>" + this.name + "<=" + " is start running........");
        }
        // bindRunning = running.bind(this)
        window.setTimeout(running, 1000)
    }
};
// myCarObject2.start()
/*

this.name = "GlobalEx"
let ObjectContentName = {
    name: "ObjectContentName"
}

const startFuc = myCarObject2.start.bind(myCarObject2);
myCarObject2.start()
startFuc()

const startFuncBind = myCarObject2.start.bind(ObjectContentName)
startFuncBind()

// const globalContextStart = myCarObject2.start.bind(this)
// const myCarContextStart = myCarObject2.start.bind(myCarObject2)

// globalContextStart()
// myCarContextStart()

// myCarObject2.start() */


function hello() { console.log("Hello world") }
const helloFunc = function () { console.log("Hello world") }
const helloArrow = () => { console.log("Hello world") } // binding

console.log("--------------------------------------------")

studying = () => {
    console.log("Studying");
    setTimeout(function () {
        console.log("Go to sleep")
    },3000)
}

eatRice = () => {
    console.log("Eat rice!")
    setTimeout(studying, 2000)
}

doTask = () => {
    setTimeout(eatRice, 1000)
}

// doTask()

const doJob = () => {
    for( var i = 0; i < 2000000000; i++) {
    }
    let random = Math.floor(Math.random() * 10)
    if (random % 2 === 0) {
        return true
    }
    return false
}

//promise
const p = new Promise((resolve, reject) => {
    setTimeout(()=> {
        let status = doJob()
        if (status) {
            resolve({status: "oke"})
        } else {
            reject({status: "not oke"})
        }
       
    }, 0)
    console.log("promise done")
})

p.then((value)=> {
    console.log("then: Value: ", value.status)
    console.log("Do job you want!")
}).catch(value => {
    console.log("catch: Value: ", value.status)
})

// doJob()
console.log("Render()")
console.log("END")