async function getWeatherTmp() {
    var crawl = await fetch("http://api.openweathermap.org/data/2.5/weather?id=1581349&appid=664cf038cad79f0a3e1aa1ee6c20d033")
    var data = await crawl.json()
    var temp = data.main.temp;
    return temp - 273.15; // convert F to C degree
}

async function showTimeAndTemp() {
    var temp = await getWeatherTmp();
    var curDate = new Date();
    var hour = curDate.getHours();
    var mode = "am";
    if (hour > 12) {
        mode = "pm"
    }
    hour %= 12;
    var minutes = curDate.getMinutes();
    var text = hour + ":" + minutes + " " + mode +  " _____ " + Math.round(temp) + "°C";
    document.getElementById("time").innerText = text;
}

showTimeAndTemp()

