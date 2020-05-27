// var firstName = "Khang";
// var lastName = 'Nguyen';
// var introduce = 'I\'m a \t student'
// var age = 20;
// var introduce2 = firstName + " " + lastName +
//     " is a student and have age's" + age;

// var templateIntroduce = `${firstName} is a student`
// var name = lastName + " " + firstName;
// // console.log("Name: ", name, introduce);
// console.log("introduce2: ", introduce2)
// console.log("templateIntroduce: ", templateIntroduce)

// // var name = null
// // var x = "abc";
// // x = null
// // console.log(x.length)
// console.log("name: ", name.length, name[0],
//     name.charAt(0), name.toUpperCase(), name.toLowerCase())

// var user1 = "Thai Bao"
// var user2 = "tHai baO"
// console.log(user1 === user2)
// console.log(user1.toLowerCase() === user2.toLowerCase())

// // indexOf, lastIndexOf, slice, substring, substr, 
// // replace, include

// var str = "Today is a beautiful Day, is't it?"
// console.log("indexof: ", str.indexOf("day"))
// console.log("indexof(not include): ", str.indexOf("day2"))
// console.log("indexof: ", str.lastIndexOf("day"))
// console.log("slice:", str.slice(6))
// console.log("slice get 'is':", str.slice(6, 8))
// console.log("slice get all:", str.slice(0, str.length))
// console.log("substring get 'is':", str.substring(6, 8))
// console.log("substr get 'is':", str.substr(6, 8))
// console.log("replace:", str.replace("day", ""))
// console.log("include:", str.includes("day"))

// // convert to "Today is a good day, is't it?" not use replace
// var substr = "beautiful"
// var pos = str.indexOf(substr)
// console.log(pos)
// var newStr = str.slice(0, pos) + "good" + str.slice(pos + substr.length)
// console.log("newStr: ", newStr)

// // trim

var unTrimStr = "     Nguyen     Van      Nam      ";
var trimStr = unTrimStr.trim()
    // console.log("unTrimStr: >" + unTrimStr + "<")
    // console.log("TrimStr: >" + trimStr + "<")

function replace(str, newSubStr, length, pos) {
    return str.slice(0, pos) + newSubStr + str.slice(pos + length)
}

function trimName(name) {
    name = name.trim()
    while (name.indexOf("  ") !== -1) {
        name = name.replace("  ", " ")
    }
    return name
}

function trimNameOp(name) {
    var index = 0;
    while (index < name.length - 1) {
        if (name[index] == " " && name[index + 1] == " ") {
            name = replace(name, " ", 2, index)
            console.log("index: ", index)
        } else {
            index++;
        }
    }
    return name;
}
console.log("replace: ", replace("Nguyen Van Nam", "Le", "Nguyen".length, 0))
var expectedResult = "Nguyen Van Nam"
console.log("trimName: >" + trimNameOp(trimStr) + "<")