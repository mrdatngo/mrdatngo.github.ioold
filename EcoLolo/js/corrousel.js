// navbar control

var lists = [
    ["./images/bangalow_1.jpg", "./images/bangalow_2.jpg", "./images/bangalow_3.jpg", "./images/bangalow_4.jpg", "./images/bangalow_5.jpg", "./images/bangalow_6.jpg"],
    ["./images/private_1.jpg", "./images/slider_4.jpg"],
    ["./images/dorm_1.jpg", "./images/dorm_2.jpg", "./images/dorm_3.jpg"]
];

var navbars = document.getElementsByClassName("js-room-navbar");
var imageShowList = document.getElementsByClassName("js-slide-img-show");
var contents = document.querySelectorAll(".js-room-container .content");
var curListIndex = 0
if (navbars) {
    for (let i = 0; i < navbars.length; i++) {
        let nav = navbars[i]
        // removeAllClassActive of Narbar in service
        let removeAllClassActiveNavbar = (cur) => {
            for (let j = 0; j < navbars.length; j++) {
                if (cur !== j) {
                    let cur_nav = navbars[j];
                    cur_nav.classList.remove("active")
                }
            }
        }
        // removeAllClassActive of active content in service
        let assignActiveContent = (i) => {
            for (let j = 0; j < contents.length; j++) {
                let content = contents[j];
                if (j !== i) {
                    content.classList.remove("active")
                } else {
                    content.classList.add("active")
                }
            }
        }

        let assignList = (i) => {
            curListIndex = i;
            for(let k = 0; k < lists[i].length; k++) {
                imageShowList[k].src = lists[i][k];
            }
        }
        nav.addEventListener("click", function () {
            removeAllClassActiveNavbar()
            assignActiveContent(i)
            nav.classList.add("active")
            assignList(i)
            initElement(i, slides[0].parentNode)
        })
    }
}

function initElement(i, slidesWrapper) {
    var slides = slidesWrapper.getElementsByClassName("slide-show")
    while( slides > 0) {
        var slide = slides[slides.length - 1]
        slide.remove(slide)
    }
    // for(var i = 0; i < slides.length; i++) {
    //     slides.removeChild(slides[i])
    // }
    var numberOfSlide = lists[i].length;
    for(var i = 0; i < numberOfSlide; i++) {
        var div = document.createElement('div')
        div.classList.add("slide-show")
        var imgElement = document.createElement('img')
        imgElement.classList.add("js-slide-img-show")
        div.appendChild(imgElement)
        slidesWrapper.appendChild(div)
    }
}

leftArrow.addEventListener("click", function () {
    nextImage(-1)
})


// corrousel
var numberOfSlide = 3;
var currentIndex = 0;
var interVal;
var running = false;
var slideWrapper = document.getElementsByClassName("slide-show-wrapper")[0]
initElement(0, slideWrapper)
var slides = document.getElementsByClassName("slide-show")
console.log("slides: ", slides)

for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
}
slides[currentIndex].style.display = "block"

function pushSlideUserAction(step) {
    if (running) return;
    clearInterval(interVal)
    pushSlide(step, createAutoSlide);
}

function pushSlide(step, createAutoSlide) {
    let nextIndex = currentIndex + step;
    if (nextIndex < 0) {
        nextIndex += lists[curListIndex].length;
    }
    if (nextIndex >= lists[curListIndex].length) {
        nextIndex -= lists[curListIndex].length;
    }
    let way = "left";
    if (step == -1) {
        way = "right";
    }

    slides[currentIndex].classList.add(way);
    slides[nextIndex].style.display = "block";
    slides[nextIndex].classList.add("next");
    slides[nextIndex].classList.add(way);
    running = true;
    setTimeout(() => {
        slides[currentIndex].classList.remove(way);
        slides[currentIndex].classList.remove("active");
        slides[currentIndex].style.display = "none";

        slides[nextIndex].style.display = "block";
        slides[nextIndex].classList.remove(way);
        slides[nextIndex].classList.remove("next");
        slides[nextIndex].classList.add("active");
        currentIndex = nextIndex;
        if (createAutoSlide) {
            createAutoSlide()
        }
        running = false
    }, 1000);
}

function createAutoSlide() {
    clearInterval(interVal)
    interVal = setInterval(() => {
        pushSlide(1)
    }, 2000)
}

createAutoSlide()