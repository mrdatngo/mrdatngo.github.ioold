var hello = "Hello world"
var helloThuong = "Hello 'Thuong'"
var helloChinh = '"Hello" \'Chinh\''
var helloClass = `Hello Class`
console.log(hello, helloThuong, helloChinh, helloClass)

// usage of template string
// var googleDocUrl = `https://docs.google.com/document/d/${doc_id}/${action}`

function getIntroduce(name, age) {
    // var introduce = "I'm " + name +
    //     " and have age is " + age + "."
    var introduce = `I'm ${name} \n and \t have age is ${age}`
    return introduce
}

console.log(getIntroduce("Huyen", 21))

// strings method
var str = "Today is a beautiful day, is'nt it?"
var substr = "day"
console.log(`length: ${str.length},
    charAt(0): ${str.charAt(0)},
    toUpperCase(): ${str.toUpperCase()},
    toLowerCase(): ${str.toLowerCase()},
    indexOf("day"): ${str.indexOf(substr)},
    lastIndexOf("day"): ${str.lastIndexOf(substr)},
    slice(0, 5): ${str.slice(0, 5)},
    substring(0, 5): ${str.substring(0, 5)},
    substr(0, 5): ${str.substr(1, 6)},
    concat(0, 5): ${str.concat(substr)},
    include("day"): ${str.includes(substr)},
    replace("beautiful", "good"): ${str.replace("beautiful", "good")}
`)

function myReplace(str, oldStr, newStr) {
    var pos = str.indexOf(oldStr)
    if (pos === -1) {
        return str
    }
    str = str.slice(0, pos) + "good" + str.slice(pos + oldStr.length)
    return str;
}
console.log("str: ", myReplace(str, "beautiful2", "good"))
    // trim()
function validateName(name) {
    // coding...
    name = name.trim()
        // while (name.includes("  ")) {
        //     name = name.replace("  ", " ")
        // }
        // regular expression
    name = name.replace(/\s+/g, " ")
    return name
}
var userName = "      Dinh      Xuan     Tien      "
console.log("trim: >" + userName.trim() + "<")
console.log("validateName: >" + validateName(userName) + "<")