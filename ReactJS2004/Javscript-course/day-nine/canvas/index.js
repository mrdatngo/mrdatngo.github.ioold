var canvas = document.getElementById("game")
var context = canvas.getContext("2d")

context.strokeStyle = 'red';
context.moveTo(0, 0);
context.lineTo(200, 300);
context.stroke();

context.beginPath();
context.strokeStyle = 'orange';
context.moveTo(200, 0);
context.lineTo(0, 300);
context.stroke();

context.beginPath()
context.arc(100, 150, 100, 0, Math.PI * 2)
context.stroke()

context.font = "30px Arial";
context.fillText("12", 85, 45);

// draw image
window.onload = function() {
    var playerImage = document.getElementById("player")
    context.drawImage(playerImage, 0, 0, 48, 48)
}