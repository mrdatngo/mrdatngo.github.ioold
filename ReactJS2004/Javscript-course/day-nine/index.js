var ulTotoList = document.getElementById("js-todo")
var inputText = document.getElementById("js-input-text");
var btnAdd = document.getElementById("js-btn-add")

console.log(ulTotoList, inputText, btnAdd)

var addTodo = () => {
    // alert("Add")
    let value = inputText.value
    if (value === "") {
        alert("Please enter value")
    } else {
        // Create a li element and append ul
        let listItem = document.createElement("li")
        listItem.innerText = value;
        let btnRemove = document.createElement("button")
        btnRemove.innerText = "-"
        listItem.appendChild(btnRemove)
        btnRemove.addEventListener("click", () => {
            ulTotoList.removeChild(listItem)
        })
        inputText.value = ""
        ulTotoList.appendChild(listItem)
    }
}

// btnAdd.onclick = () {}
btnAdd.addEventListener("click", addTodo)

inputText.onkeyup = (event) => {
    if (event.keyCode === 13) {
        addTodo()
    }
}