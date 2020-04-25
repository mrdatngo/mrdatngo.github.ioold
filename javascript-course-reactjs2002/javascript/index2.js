// Numbers
let strX = "123.4";
let x = parseInt(strX)
let x2 = Number(strX);
console.log(strX, typeof(strX))
console.log(x, typeof(x))
let strX2 = x.toString()
console.log(strX2, typeof(strX2))

console.log(x2, typeof(x2))
// Math
// let y = Math.random()
// console.log("Y", y)
// 
// expect random từ 1 - 100
// console.log("y*100", y*100)
// console.log("Result", Math.floor(y*100 + 1))
function randomOneToValue(value) {
    return Math.floor(Math.random() * value + 1)
}

function randomZeroToValue(value) {
    return Math.floor(Math.random() * (value + 1))
}

function randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
}

console.log("Random 1 - 10 ", randomOneToValue(10))
console.log("Random 0 - 10 ", randomZeroToValue(10))
console.log("Random 45 - 50 ", randomFromTo(49, 72))

// Strings
let myName = "Minh";
let myName2 = "'Ha \"  \\ '";
let myName3 = `Hoa, ${myName} di an com, va ${myName} an xong di ngu`;
let myName4 = "Hoa " + myName + "di an com, va " + myName + " an xong di ngu"
console.log("String1: ", myName)
console.log("String2: ", myName2)
console.log("String3: ", myName3)
console.log("String4: ", myName4)
let permalink = "reactjs"
let id = "hehe"
let myString5 = `multi_permalinks=${permalink}&notif_id=${id}&notif_t=group_activity&ref=notif`

// String - properties and method
let describe = "Hom nay la thu may, chac chan la thu Heigh";
let lengthOfDescribe = describe.length;

let describeUppercase = describe.toUpperCase()
let describeLowercase = describe.toLowerCase()


console.log("lengthOfDescribe: ", lengthOfDescribe)
console.log("describeUppercase: ", describeUppercase)
console.log("describeLowercase: ", describeLowercase)
console.log("describe.charAt(1):", describe.charAt(1))
console.log("describe[1]):", describe[1])
console.log("describe.indexOf('la')", describe.indexOf('la'))
console.log("describe.lastIndexOf('la')", describe.lastIndexOf('la'))
console.log("describe.indexOf('la23')", describe.indexOf('la23'))
console.log("describe.slice()", describe.slice(8, 18))
console.log("describe.substr()", describe.substr(8, 10))
console.log("describe.replace()", describe.replace("la", "is"))
console.log("describe.concat()", describe.concat(describeUppercase))
console.log("describe.include()", describe.includes("la"))
console.log("trim(): '", "    la     thu may      ".trim(), "'")

// Giai bai 15
let xx = " NguyeN THI tho tHu hA"
let expect = "Nguyen Thi Tho Thu Ha";
xx = xx.toLowerCase().trim()
console.log("Before =>" + xx + "<=")
for (let i = 0; i < xx.length; i++) {
    if (i == 0 || xx[i - 1] == " ") {
        // replace character at position i to Uppercase
        // xx[i] = xx[i].toUpperCase() // can't
        xx = xx.slice(0, i) + xx[i].toUpperCase() + xx.slice(i + 1)
    }
}
console.log("after =>" + xx + "<=")


function findPosition(s2, s1) {
    let lastIndex = s1.lastIndexOf(s2)
    if (lastIndex < 0) return -1
    s1 = s1.slice(0, lastIndex) + s1.slice(lastIndex + s2.length)
    console.log("First part", s1, s2)
    return s1.lastIndexOf(s2)
}

let s1 = "This is is a beautiful day day!"
let s2 = "day"

console.log("findPosition '", s2, "' in '", s1, "' is ", findPosition(s2, s1))


// Array
let myArray = ["Nguyen Nhat Minh", "Thu Ha", "Thanh Binh", "Thuy Ngan", "Tho", "Huan", "Doanh"]
console.log("origin myArray", myArray)
// behavior like stack
let lastValue = myArray.pop()
lastValue = myArray.pop()

myArray.push("Phuc")
lastValue = myArray.pop()
console.log("last in index of myArray", "=>" + lastValue + "<=")

myArray.unshift("Thai")
let firstValue = myArray.shift()

console.log("myArray", myArray, firstValue, myArray.indexOf("Thu Ha"), myArray.lastIndexOf("Huan"))
myArray.push("Thu Ha")

console.log("myArray", myArray, firstValue, myArray.indexOf("Thu Ha"), myArray.lastIndexOf("Thu Ha"))

console.log("Unreverse: ", myArray)
let myArray2 = [...myArray] // way 1
myArray2 = myArray.slice() // way 1
myArray2 = myArray2.reverse()
console.log("Reverse: ", myArray2)

// pass parameter by value (origin type)
function change(valueA) {
    valueA = "XYZ"
    console.log("ValueA in function: ", valueA)
}

let valueA = "ABC"
change(valueA)
console.log("Value A: ", valueA)

function changeArray(valueArray) {
    valueArray[0] = "Tho"
}
// pass parameter by reference (object)
let valueArray = ["Thu Ha", "Thi Loan"]
console.log("Array Before: ", valueArray)
changeArray(valueArray)
console.log("Array: ", valueArray)

console.log("myArray: ", myArray, "with length", myArray.length)
myArray.splice(1, 2, "Do Thu Ha", "Nguyen Thanh Binh", "Thai")
console.log("myArray after splice(1,2): ", myArray, "with length", myArray.length)

console.log("Join()", myArray.join(", "))
console.log("Sort()", myArray.sort())

let finder = (value) => {
    console.log("Value: ", value)
    if (value == "Thu Ha") {
        return true
    }
    return false
}

let cusFind = (finder) => {
    for(let i = 0; i < myArray.length; i++) {
        let check = finder(myArray[i]);
        if (check) {
            return myArray[i]
        }
    }
    return -1
}

// find - tìm kiếm
// let findValue = myArray.find( finder )
let findValue = cusFind( finder )
console.log("findValue: ", findValue)

// array filter
myArray.unshift("Thuy Ngan")
console.log("Array: ", myArray)

let filterResult = myArray.filter((value, index, arr) => {
    // find value = user name
    // if (value === "Thuy Ngan") {
    //     return true
    // }
    // return false
    if (value[0] == "T") {
        return true
    }
    return false
})
console.log("filter Result: ", filterResult)

let mapIndexPlusValueResult = myArray.map((value, index) => {
    return index + "." + value
})
console.log("MAP: ", mapIndexPlusValueResult)
let studentNgan = {
    id: "T3HXX1",
    firstName: "Ngan",
    lastName: "Duong Thuy"
}
console.log("Id of Ngan", studentNgan.id)
let students = [
    studentNgan,
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
]

let ids = students.map(student =>{
    return student.id
})

let fullNames = students.map(student => {
    return student.lastName + " " + student.firstName
})

console.log("Array IDs: ", ids)
console.log("Array FullNames: ", fullNames)

console.log("Students:", students)

// reduce
let myNumbers = [3, 4, 5, 2, 1]
myNumbers.reduce((previous, value, index, arr)=> {
    // console.log("previous, value", previous, value)
    // => previous: get value of previous in return call function
    return index
}, 0 )

let totalCount = myNumbers.reduce((previous, value) => {
    console.log("previous, value", previous, value)
    return previous + value
}, 0)

console.log("totalCount: ", totalCount)

// apply
let applyTotalCount = myNumbers.reduce((previous, value) => previous + value)
console.log("applyTotalCount: ", applyTotalCount)
let applyTotalEvenCount = myNumbers.reduce((previous, value) => {
    if (value % 2 == 0) {
        return previous + value
    }
    return previous
}, 0)

let applyTotalEvenTotalMinusOddTotal = myNumbers.reduce((previous, value) => {
    if (value % 2 == 0) {
        return previous + value
    } else {
        return previous - value
    }
}, 0)
console.log("applyTotalEvenTotalMinusOddTotal: ", applyTotalEvenTotalMinusOddTotal)
// not apply
let sum = 0;
for( var i = 0; i < myNumbers.length; i++) {
    sum += myNumbers[i]
}
console.log("Sum: ", sum)
