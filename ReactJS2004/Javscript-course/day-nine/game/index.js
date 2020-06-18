var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
var imgPlayer = document.createElement("img");
var imgTrap = document.createElement("img");
var imgTreasure = document.createElement("img");
imgPlayer.src = "./medias/player.png";
imgTrap.src = "./medias/trap.png";
imgTreasure.src = "./medias/treasure.png";
var screenWidth = 500;
var screenHeight = 500;
var cellWidth = 50;
var cellHeight = 50;
var lengthWidth = screenWidth / cellWidth;
var lengthHeight = screenHeight / cellHeight;
var numberOfTreasure = 0;
var map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, -1, 0, 0, 0, 0],
    [2, 0, 0, -1, 0, 0, 0, 0, 0, 0],
    [-1, -1, -1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
    [0, -1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, -1, -1, -1, 0, 0, 0, 0, 0, 0],
    [2, -1, 1, -1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, -1, 0, 0, 0, 0, 0, 0]
]
var drawMap = () => {
    for (let y = 0; y < lengthHeight; y++) {
        for (let x = 0; x < lengthWidth; x++) {
            if (map[y][x] === -1) {
                context.drawImage(imgTrap,
                    x * cellWidth, y * cellHeight, cellWidth, cellHeight);
            }
            if (map[y][x] === 2) {
                context.drawImage(imgTreasure,
                    x * cellWidth, y * cellHeight, cellWidth, cellHeight);
            }
        }
    };
}

var removeTreasure = (x, y) => {
    map[x][y] = 0;
}

var playerXIndex = 0;
var playerYIndex = 0;
for (let y = 0; y < lengthHeight; y++) {
    for (let x = 0; x < lengthWidth; x++) {
        if (map[y][x] === 1) {
            playerXIndex = x;
            playerYIndex = y;
        } else if (map[y][x] === 2) {
            numberOfTreasure++;
        }
    }
};

var player = {
    map: map,
    ctx: context,
    x: playerXIndex * cellWidth,
    y: playerYIndex * cellHeight,
    // xIndex: playerXIndex,
    // yIndex: playerYIndex,
    width: cellWidth,
    height: cellHeight,
    img: imgPlayer,
    treasureColleted: 0,
    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    },
    moveRight() {
        if (this.x < screenWidth - cellWidth) {
            this.x += cellWidth;
            this.checkWin()
        }
    },
    moveLeft() {
        if (this.x > 0) {
            this.x -= cellWidth;
            this.checkWin()
        }
    },
    moveTop() {
        if (this.y > 0) {
            this.y -= cellHeight;
            this.checkWin()
        }
    },
    moveDown() {
        if (this.y < screenHeight - cellHeight) {
            this.y += cellHeight;
            this.checkWin()
        }
    },
    checkWin() {
        var xIndex = this.x / cellWidth;
        var yIndex = this.y / cellHeight;
        if (this.map[yIndex][xIndex] === 2) {
            // console.log("X, y", xIndex, yIndex)
            this.treasureColleted++;
            removeTreasure(yIndex, xIndex);
            if (this.treasureColleted === numberOfTreasure) {
                setTimeout(() => {
                    alert("You win!");
                }, 100)
            }
        } else if (this.map[yIndex][xIndex] === -1) {
            removeTreasure(yIndex, xIndex);
            setTimeout(() => {
                alert("You lose!");
            }, 100)
        }
    }
}

console.log("Player: ", player)

var clearScreen = (ctx) => {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, screenWidth, screenHeight)
}

window.onload = () => {
    // player.draw();
    setInterval(() => {
        clearScreen(context);
        player.draw();
        drawMap();
    }, 1)
};
// catch event of keyboard
window.addEventListener("keydown", (event) => {
    // console.log("Event: ", event);
    switch (event.keyCode) {
        case 37:
            console.log("Arrow Left");
            player.moveLeft()
            break;
        case 38:
            console.log("Arrow Top");
            player.moveTop()
            break;
        case 39:
            console.log("Arrow Right");
            // clearScreen(context);
            player.moveRight();
            // player.draw();
            break;
        case 40:
            console.log("Arrow Down");
            player.moveDown()
            break;
    }
})