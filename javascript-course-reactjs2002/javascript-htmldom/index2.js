updateTime()
let loop = setInterval(updateTime, 1000)

function updateTime() {
    let showTime = document.getElementById("show-time")
    showTime.innerHTML = new Date().toLocaleString()
}

let stopOClock = () => {
    clearInterval(loop)
}

let startOClock = () => {
    loop = setInterval(updateTime, 1000)
}

