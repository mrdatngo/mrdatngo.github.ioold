
// document.getElementsByTagName("h3")[0].style.color = "red"
// getElementsByTagName
// let elements = document.getElementsByTagName("h3")
// getElementsByClassName
let elements = document.getElementsByClassName("math")
let h3 = elements[0]
// h3.style.color = "red"
// h3.style.fontSize = "30px"
// h3.style.border = "1px solid black"

// h3.setAttribute("style", "color: green")
// h3.setAttribute("class", "red-color bg-color")

setTimeout(() => {
    h3.innerHTML = "My Math"
    h3.classList.add("red-color", "bg-color")
}, 3000)

console.log("Elements: ", h3)

function buttonClick() {
    alert(h3.innerHTML)
}