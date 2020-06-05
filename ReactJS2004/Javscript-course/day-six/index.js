// introduce bind()
// window.name = "Camera"
var camera = function(mathStudying) {
    mathStudying()
}

var student = {
    name: "Minh",
    study: function() {
        // var mathStudying = function() {
        //         console.log(this.name + "'s studying math....")
        //     }.bind(this)

        var mathStudying = () => {
                console.log(this.name + "'s studying math....")
            }
            // mathStudying()
            // camera(mathStudying)
    }
}

student.study()

// callback

var cookingSoup = () => {
    console.log("Done cooking soup")
}

var cookingRice = () => {
    console.log("Done cooking rice")
    console.log("Starting cooking soup")
    var minh = setTimeout(cookingSoup, 3000);
}

var thinking = () => {
    console.log("Done thinking....")
    console.log("Starting cooking rice")
    var dat = setTimeout(cookingRice, 2000)
}

function doTasks() {
    console.log("Starting do tasks...")
    var quy = setTimeout(thinking, 1000)
}

//doTasks()
//console.log("continue...")

var goodStudent = true;
var goodBoy = true;

// promise
var buyCarCallback = (resolve, reject) => {
        setTimeout(() => {
            if (goodStudent) {
                console.log("Buying car....")
                resolve({ name: "Lambogini", weight: 850 })
            } else {
                reject({ reason: "Not good student" })
            }
        }, 2000);
    }
    // var buyCar = new Promise(buyCarCallback)

var hangoutCallback = (resolve, reject) => {
        setTimeout(() => {
            if (goodBoy) {
                resolve({ status: true })
            } else {
                reject({ status: false })
            }
        }, 2000)
    }
    // after buyCar then drive
    // buyCar
    //     .then(car => {
    //         console.log("Driving car..." + car.name + " " + car.weight);
    //         // have a girlfriend
    //         return new Promise(hangoutCallback)
    //     })
    //     .then(hangoutStatus => {
    //         if (hangoutStatus.status) {
    //             console.log("You're is the luckiest in the world")
    //         }
    //     })
    //     .catch(result => {
    //         console.log("Don't buy car because " + result.reason)
    //     })


async function myLife() {
    var result = await new Promise(buyCarCallback)
    console.log("Result: ", result)
    var status = await new Promise(hangoutCallback)
    console.log("Status: ", status)
}

// myLife()

// console.log("Living....")
// class
class Student {
    constructor(id, name, className) {
        this.id = id;
        this.name = name;
        this.className = className
    }

    study = () => {
        console.log(this.name + " is studying...")
    }
}

var quy = new Student(1, "Xuan Quy", "REACTJS")
var khang = new Student(2, "Khang", "REACTJS")
console.log(quy, typeof(quy))
console.log(khang, typeof(khang))
quy.study()
khang.study()