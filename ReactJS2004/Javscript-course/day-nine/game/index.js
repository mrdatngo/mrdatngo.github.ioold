var canvas = document.getElementById("game");
var context = canvas.getContext("2d");

var imgPlayer = document.createElement("img");
imgPlayer.src = "./medias/player.png";

console.log(imgPlayer);
// document.body.appendChild(imgPlayer) -- test

var player = {
    ctx: context,
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    img: imgPlayer,
    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}

var clearScreen = (ctx) => {
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 500, 500)
}

window.onload = () => {
    // context.drawImage(imgPlayer, 0, 0, 48, 48);
    // context.drawImage(player.img, player.x, player.y, player.width, player.height);
    player.draw();
    setInterval(() => {
        clearScreen(context);
        player.x += 30;
        player.y += 30;
        player.draw();
    }, 1000)
}

// setTimeout(() => {
//     context.drawImage(imgPlayer, 0, 0, 48, 48);
// }, 2000)