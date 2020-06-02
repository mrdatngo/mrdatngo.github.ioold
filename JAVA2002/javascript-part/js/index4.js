var fruits = ['Apple', 'Banana', 'Orange', 'Lemon']
var numbers = [1, 3, 5, 2, 4]
var mixed = ['Apple', 2, 'Banana', true, 'Orange']

var fruits2 = new Array('Apple', 'Banana', 'Orange')

console.log("fruits: ", fruits);
console.log("fruits2: ", fruits2);
console.log("numbers: ", numbers);
console.log("mixed: ", mixed);
console.log("first fruit:", fruits[0])
console.log("last fruit:", fruits[fruits.length - 1])
console.log("typeof(fruits): ", typeof(fruits))

// get and remove the last element of array
// var lastFruit = fruits[fruits.length - 1]
// fruits.length = fruits.length - 1
var lastFruit = fruits.pop()
console.log(`lastfruit: ${lastFruit},
            fruits: ${fruits}
`)

// get and remove the first element of array
// var firstFruit = fruits[0]
// for (var i = 0; i < fruits.length - 1; i++) {
//     fruits[i] = fruits[i + 1];
// }
// fruits.length--;
var firstFruit = fruits.shift()
console.log(`firstFruit: ${lastFruit},
            fruits: ${fruits}
`)

// array methods
// append to the last of array
fruits.push("Kiwi")
fruits.push("Banana")

// append to the frist of array
fruits.unshift("Cherry")
console.log("fruits: ", fruits)

// indexOf, lastIndexOf, reverse, slice, splice, join
var foundBanana = fruits.indexOf("Banana2")
var foundLastBanana = fruits.lastIndexOf("Banana")
console.log("foundBanana: ", foundBanana)
console.log("foundLastBanana: ", foundLastBanana)

var subFruits = fruits.slice(1, 2)
var subFruits2 = fruits.slice(1); // end == length
// create a copy
var subFruits3 = fruits.slice(0)
console.log("subFruits", subFruits)
console.log("subFruits2", subFruits2)

var reverseFruits = fruits.slice(0).reverse()
console.log("reverseFruits: ", reverseFruits)
console.log("fruits: ", fruits)

// remove elements
// fruits.splice(fruits.indexOf("Orange"), 3)
// insert elements
fruits.splice(2, 1, "Watermelon", "Strawberry")
console.log("fruits: ", fruits)

// join
console.log("join(,): ", `[ ${fruits.join(", ")} ]`)

// callback

function hello(callback, number) {
    // go to class
    console.log("number: ", number)
    callback()
}

function sayHelloClass() {
    console.log("Hello class")
}

// sayHelloClass()

hello(sayHelloClass, 123)


function cookingFish() {
    console.log("I'm cooking fish")
        // boiled ....
}

function cooking(cookingFish) {
    // cooking rice
    cookingFish();
    // cooking soup
    // ..
}
// cookingFish()
cooking(cookingFish)

var cherry = {
    name: "Cherry",
    price: 5,
}
var watermelon = {
    name: "Watermelon",
    price: 10
}
var fruits = [
    cherry,
    watermelon,
    cherry,
    {
        name: "Banana",
        price: 7
    }
]
console.log("access property: watermelon.name: ", watermelon.name)

var foundBananaObj = fruits.indexOf({
    name: "Banana",
    price: 7
})
var foundCherryObj = fruits.indexOf(cherry)

console.log("Compareobjects: ", {} === {})
console.log(fruits)
console.log("foundBananaObj: ", foundBananaObj)
console.log("foundCherryObj: ", foundCherryObj);
// find

var findElem = function(item) {
    console.log("Item: ", item);
    // return item.name === "Watermelon";
    return item.price === 7;
};
// rewrite array find
function myFind(find) {
    for (var i = 0; i < fruits.length; i++) {
        var result = find(fruits[i]);
        if (result) {
            return fruits[i]
        }
    }
}
var findBanana = fruits.find(findElem);
// var findBanana = myFind(findElem)

console.log("findBanana: ", findBanana)