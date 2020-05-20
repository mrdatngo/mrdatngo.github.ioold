var map = [
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
]

class User {
    constructor(x, y, width, height, step) {
        this.x = x;
        this.y = y;
        this.step = step;
        this.height = height;
        this.width = width;
        var img = new Image;
        img.src = "./images/user.png";
        this.img = img;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y,
            this.width, this.height)
    }

    moveLeft() {
        let newPosX = this.x - this.step;
        if (newPosX >= 0) {
            this.x = newPosX;
        } else {
            this.x = 0;
        }
    }

    moveRight() {
        let newPosX = this.x + this.step;
        if (newPosX <= 500 - this.width) {
            this.x = newPosX
        } else {
            this.x = 500 - this.width
        }

    }

    moveUp() {
        let newPosY = this.y - this.step;
        if (newPosY >= 0) {
            this.y = newPosY
        } else {
            this.y = 0
        }
    }

    moveDown() {
        let newPosY = this.y + this.step;
        if (newPosY <= 500 - this.height) {
            this.y = newPosY
        } else {
            this.y = 500 - this.height
        }
    }
}
var user = new User(0, 0, 50, 50, 10);

// var user2 = new User(100, 100, 100, 100, 10);

var treasureImg = new Image;
treasureImg.src = "./images/treasure.png";

window.onload = () => {
    var c = document.getElementById("treasure")
    var ctx = c.getContext("2d")
    setInterval(() => {
        ctx.fillStyle = "#00FF00";
        ctx.fillRect(0, 0, 500, 500);
        user.draw(ctx)
            // user2.draw(ctx)
        for (let i = 0; i <= map.length; i++) {
            for (let j = 0; j <= map[i].length; j++) {
                if (map[i][j] == 1) {
                    ctx.drawImage(treasureImg, j * 50, i * 50,
                        50, 50);
                }
            }
        }
    }, 1);
}
let keyDown = (event) => {
    switch (event.keyCode) {
        case 39:
            user.moveRight()
            break;
        case 37:
            user.moveLeft();
            break;
        case 38:
            user.moveUp();
            break;
        case 40:
            user.moveDown();
            break;
    }
    // console.log(event)
}
window.addEventListener("keydown", keyDown)