// var myFunc = (callback) => {
//     this.name = "Hello"
//     callback()
// }

let car = {
    name: "Fiat",
    start: function () {
        // let myCarFunc = () => {
        //     console.log(this.name) 
        // }
        // myFunc(myCarFunc)
        console.log(this.name)
    }
}

this.name = "Global"
// car.start()
car.start()
let carStart = car.start.bind(car)
carStart()

// call back

function dojob(callback) {
    // do a lot of work
    callback()
}

function myCallback() {
    console.log("Hello world")
}

dojob(myCallback)

// dojobs

// function dojobs() {
//     console.log("Start do jobs")
//     setTimeout(cookingRice, 1000)
//     console.log("End job")
// }

// dojobs()
let cookingRice = resolve => {
    console.log("Start cooking rice")
    setTimeout(() => {
        resolve({ status: "true", des: "Done cooking rice" })
    }, 2000)
}

let cookingSoup = resolve => {
    console.log("Done cooking rice")
    console.log("Start cooking soup")
    setTimeout(() => {
        resolve({ status: "true", des: "Done cooking soup" })
    }, 3000)
}

let cookingFish = resolve => {
    console.log("Done cooking soup")
    console.log("Start cooking fish")
    setTimeout(() => {
        resolve({ status: "true", des: "Done cooking fish" })
    }, 3000)
}

// var p = new Promise(cookingRice)

// new Promise(cookingRice).then(data => {
//     console.log(data)
//     return new Promise(cookingSoup)
// }).then(data => {
//     console.log(data)
//     return new Promise(cookingFish)
// }).then(data => {
//     console.log(data)
// })

// async function doJobsAsync() {
//     const result = await p
//     console.log("Result:", result)
// }

// doJobsAsync()

console.log("Studying....")

// p.then((data) => {
//     if (data.status) {
//         var s = new Promise(cookingFish)
//         s.then(data => {
//             console.log("Data: ", data)
//             if (data.status) {
//                 var f = new Promise(cookingSoup)
//                 f.then(() => {
//                     console.log("Data: ", data)
//                 })
//             }
//         })
//     }
// }).catch(data => {
//     console.log("Data: ", data)
// })


let url = "https://www.mocky.io/v2/5185415ba171ea3a00704eed"

// async function requestApiXml(url) {
//     return new Promise ((resolve, reject) => {
//         var result = "hehe"
//         var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 // document.getElementById("demo").innerHTML =
//                 // result = this.responseText;
//                 resolve(this.responseText)
//             }
//         };
//         xhttp.open("GET", url, true);
//         xhttp.send();
//         return result
//     })
// }


// const pData = requestApiXml(url)
// pData.then(data => {
//     console.log("Data hihi: ", data)
// })


async function requestApi(url) {
    const response = fetch(url)
    const data = await response
    return data.json()
}

// let url2 = "http://google.com.vn"
// requestApi(url).then(data => {
//     console.log(data)
// })

const dataP = requestApi(url)
dataP.then((data) => {
    console.log("Data: ", data)
})

console.log("Main thread")

// let url2 = "https://jsonplaceholder.typicode.com/todos/1"
// setTimeout(() => {
//     requestApi(url2).then(data => {
//         console.log("Data", data)
//         document.getElementById("title").innerHTML = data.title
//     })
// }, 1000);

// console.log("HIHI")

// requestApi2(url)
