// function total(n) {
//     if (n == 0) {
//         return 0
//     }
//     return result = total(n - 1) + n;
// }

// console.log("Total(9): ", total(9))

// Arrays

var names = new Array("Quy", "Dat", "Minh", "Nam", "Vu")
var names2 = ["Quy", 23, true, "Dat", "Minh", "Nam", "Vu"]
console.log("names: ", names, typeof(names), names.length)
console.log("names[0]: ", names[0])
console.log("names[1]: ", names[1])

console.log("names2: ", names2, typeof(names2), names2.length)
console.log("names2[0]: ", names2[0])
console.log("names2[1]: ", names2[1])

// loop all element in an array

for (var i = 0; i < names2.length; i++) {
    var value = names2[i]
    console.log(`Value ${i}:`, value)
}
// Check variable is an array
console.log("Array.isArray(names):",
    Array.isArray(names))

// methods of array

var fruits = []
fruits.push("Mango")
fruits.push("Banana")
fruits.push("Apple")
console.log("fruits:", fruits)
var item = fruits.pop()
console.log("fruits:", fruits, "item: ", item)

fruits.unshift("Orange")
fruits.unshift("Lemon")
console.log("fruits:", fruits)
var firstItem = fruits.shift()
console.log("fruits:", fruits, "item: ", firstItem)

// fruits[100] = "Watermelon"
// console.log("fruits:", fruits, fruits[20])

console.log("fruits.indexOf('lemon')",
    fruits.indexOf('Mango'),
    fruits.lastIndexOf('Mango'),
)

console.log("Origin fruits: ", fruits)
var reverseFruits = fruits.slice(0);
reverseFruits = reverseFruits.reverse();
// slice, splice, join, reverse
console.log("fruits.reverse()", reverseFruits)
fruits.push("watermelon")
console.log("fruits: ", fruits)
    // console.log("slice(start,end): ", fruits.slice(0, 2))
console.log("splice(start,end): ",
    fruits.splice(1, 2, "Mango2", "Banana2", "Banana3", "Banana4"))
console.log("fruits", fruits)

console.log("Join: ", fruits.join(" ,"))
console.log("toString: ", fruits.toString(","));
// callback function

// function helloWorld(name) {
//     console.log("Hello world: ", name)
// }

function helloClass() {
    console.log("Hello Class")
}

function helloWorld(name) {
    console.log("Hello world: ", name)
}

function call(hello) {
    // console.log()
    // for()
    // if (tao thich) thi tao moi hello
    // name = getDataName()
    name = "Quy"
    hello(name)
}
call(helloWorld)
    // helloWorld()
    // call(helloWorld)
    // call(helloClass)

// arrays - find
var findCallBack = (item) => {
    console.log("handling item: ", item)
    return item === "Banana3"
}

// function myFind(findCallBack) {
//     for (var i = 0; i < fruits.length; i++) {
//         if (findCallBack(fruits[i])) {
//             return fruits[i];
//         }
//     }
// }

var foundItem = fruits.find(findCallBack)
    // var foundItem = myFind(findCallBack)
console.log("foundItem: ", foundItem)

// numbers
var numbers = [1, 3, 4, 6, 5, 7, 9];

var checkEven = (number) => {
    if (number % 2 === 0) {
        return true
    }
    return false
}
var result = numbers.find(checkEven)
console.log("result: ", result)
    // Coding a function return first prime number
    // in array - 3

// Coding a function return first even number
// in array - 4