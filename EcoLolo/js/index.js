// Menu
var menuBar = document.getElementsByClassName("js-menu-bar-icon")[0]
if (menuBar != undefined) {
    menuBar.addEventListener("click", function () {
        if (document.getElementsByClassName("js-nav-wrapper")[0].classList.contains('active')) {
            document.getElementsByClassName("js-nav-wrapper")[0].classList.remove('active')
        } else {
            document.getElementsByClassName("js-nav-wrapper")[0].classList.add('active')
        }
    })
}

// json slide show
var leftArrow = document.getElementsByClassName("js-left-arrow")[0]
var rightArrow = document.getElementsByClassName("js-right-arrow")[0]
var imageShow = document.getElementsByClassName("js-slide-img")[0]
var urls = ["./images/slider_1.jpg", "./images/slider_2.jpg", "./images/slider_3.jpg"]
var numberOfUrl = urls.length
var currentUrlIndex = 0;


if (leftArrow != undefined) {
    leftArrow.addEventListener("click", function() {
        nextImage(-1)
    })
}

if (rightArrow != undefined) {
    rightArrow.addEventListener("click", function() {
        nextImage(+1)
    })
}

function nextImage(step) {
    currentUrlIndex += step;
    if (currentUrlIndex < 0) {
        currentUrlIndex += numberOfUrl;
    }
    if (currentUrlIndex >= numberOfUrl) {
        currentUrlIndex = 0;
    }
    imageShow.style.display = "none";
    setTimeout(() => {
        imageShow.style.backgroundImage = `url(${urls[currentUrlIndex]})`;
        imageShow.style.display = "block";
    }, 0)
}

setInterval(() => nextImage(1), 3000)

// animation

window.addEventListener('scroll', () => {
    
    console.log("payYOffset", window.pageYOffset)
    
	if(window.pageYOffset >= 30){
        document.querySelector('.js-zoom-out.first').style.animation = "zoom-out 0.5s ease 0s 1 forwards";
        var fades = document.querySelectorAll('.js-text-fade');
        for(var i = 0; i < fades.length; i++) {
            fades[i].classList.remove("fadeout");
            fades[i].classList.add("fadein");
        }
	} else {
        var fades = document.querySelectorAll('.js-text-fade');
        for(var i = 0; i < fades.length; i++) {
            fades[i].classList.remove("fadein");
            fades[i].classList.add("fadeout");
        }
        document.querySelector('.js-zoom-out.first').style.animation = "";
    }
	
	if(window.pageYOffset >= 1000){
        var fades = document.querySelectorAll('.js-text-fade');
        for(var i = 0; i < fades.length; i++) {
            fades[i].classList.remove("fadein");
            fades[i].classList.add("fadeout");
        }
		document.querySelector('.js-zoom-out.first').style.animation = "";
    }
    
    if (window.pageYOffset >= 750) {
        var slides = document.querySelectorAll('.js-text-slide');
        console.log("Slides", slides)
        for(var i = 0; i < slides.length; i++) {
            slides[i].classList.remove("slideout");
            slides[i].classList.add("slidein");
        }
    } else if (window.pageYOffset < 600) {
        var slides = document.querySelectorAll('.js-text-slide');
        console.log("Slides", slides)
        for(var i = 0; i < slides.length; i++) {
            slides[i].classList.remove("slidein");
            slides[i].classList.add("slideout");
        }
    }
});

