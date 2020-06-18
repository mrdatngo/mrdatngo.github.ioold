var game = document.getElementById("game");
var context = game.getContext("2d");
var imgPlayer = document.createElement("img");
imgPlayer.src = "./images/player.png";

function clearScreen(ctx) {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 500, 500);
}

var player = {
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    img: imgPlayer,
    context: context,
    draw() {
        context.drawImage(this.img, this.x, this.y, this.width, this.height);
    },
    moveRight() {
        this.x += 20;
    },
    moveLeft() {
        if (this.x >= 20) {
            this.x -= 20;
        }
    },
    moveTop() {
        this.y -= 20;
    },
    moveDown() {
        this.y += 20;
    }
}

window.onload = () => {
    // start game
    // context.drawImage(player.img, player.x, player.y, player.width, player.height);
    // player.draw();
    setInterval(() => {
        clearScreen(context)
        player.draw()
    }, 1)
}

window.addEventListener("keydown", (event) => {
    // console.log(event);
    switch (event.keyCode) {
        case 37:
            console.log("Left arrow");
            player.moveLeft();
            break;
        case 38:
            console.log("Top arrow");
            player.moveTop();
            break;
        case 39:
            console.log("Right arrow");
            player.moveRight();
            // clearScreen(context);
            // player.draw();
            break;
        case 40:
            console.log("Down arrow");
            player.moveDown();
            break;
    }
})