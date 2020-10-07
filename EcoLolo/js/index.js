// Menu
var menuBar = document.getElementsByClassName("js-menu-bar-icon")[0];
if (menuBar != undefined) {
    menuBar.addEventListener("click", function () {
        if (
            document
                .getElementsByClassName("js-nav-wrapper")[0]
                .classList.contains("active")
        ) {
            document
                .getElementsByClassName("js-nav-wrapper")[0]
                .classList.remove("active");
        } else {
            document
                .getElementsByClassName("js-nav-wrapper")[0]
                .classList.add("active");
        }
    });
}

// json slide show
var leftArrow = document.getElementsByClassName("js-left-arrow")[0];
var rightArrow = document.getElementsByClassName("js-right-arrow")[0];
var imageShow = document.getElementsByClassName("js-slide-img")[0];
var slogonsViewer = document.getElementsByClassName("js-slide-slogon")[0];
var urlsImages = [
    "./images/slider_1.jpg",
    "./images/slider_2.jpg",
    "./images/slider_3.jpg",
    "./images/slider_4.jpg",
    "./images/slider_5.jpg"
];
var slogons = [
    "Nơi cực Bắc tổ quốc, một Hà Giang đích thực còn sót lại",
    "Khu nghỉ dưỡng độc đáo tại Hà Giang, nơi mang đậm dấu ấn văn hoá độc đáo tại hà Giang, mảnh đất của những dãy núi huyền thoại",
    "Đủ gần để khám phá, đủ xa để riêng tư",
    "Đủ gần để khám phá, đủ xa để riêng tư",
    "Đủ gần để khám phá, đủ xa để riêng tư",
];
var numberOfUrl = urlsImages.length;
var currentUrlIndex = 0;

// Init
slogonsViewer.getElementsByClassName("content")[0].innerText =
    slogons[currentUrlIndex];

if (leftArrow != undefined) {
    leftArrow.addEventListener("click", function () {
        nextImage(-1);
    });
}

if (rightArrow != undefined) {
    rightArrow.addEventListener("click", function () {
        nextImage(+1);
    });
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
        imageShow.style.backgroundImage = `url(${urlsImages[currentUrlIndex]})`;
        imageShow.style.display = "block";
        // slogons.h2.value = slogons[currentUrlIndex]
        slogonsViewer.getElementsByClassName("content")[0].innerHTML =
            slogons[currentUrlIndex];
    }, 0);
}

setInterval(() => nextImage(1), 3000);

// active navbar
var navWrapper = document.querySelector("#header .nav .nav-wrapper");
var items = navWrapper.querySelectorAll(".item");
var urls = navWrapper.querySelectorAll("a");
var hashes = Array.from(urls).map((url) => url.hash);
var anchors = hashes.map((hash) => {
    return document.querySelector(hash);
});

function activeAnchor(pageYOffset) {
    var nearTop = Number.MAX_VALUE;
    var hashMatch = "";
    for (var i = 0; i < anchors.length; i++) {
        let anchor = anchors[i]
        if (Math.abs(anchor.offsetTop - pageYOffset) < nearTop) {
            nearTop = Math.abs(anchor.offsetTop - pageYOffset);
            hashMatch = hashes[i];
        }
    }

    if (hashMatch != "") {
        items.forEach(item => {
            item.classList.remove("active")
        })
        items[hashes.indexOf(hashMatch)].className += " " + "active"
    }
}

// animation
window.addEventListener("scroll", () => {
    activeAnchor(window.pageYOffset);
    if (window.pageYOffset >= 30) {
        document.querySelector(".js-zoom-out.first").style.animation =
            "zoom-out 0.5s ease 0s 1 forwards";
        var fades = document.querySelectorAll(".js-text-fade");
        for (var i = 0; i < fades.length; i++) {
            fades[i].classList.remove("fadeout");
            fades[i].classList.add("fadein");
        }
    } else {
        var fades = document.querySelectorAll(".js-text-fade");
        for (var i = 0; i < fades.length; i++) {
            fades[i].classList.remove("fadein");
            fades[i].classList.add("fadeout");
        }
        document.querySelector(".js-zoom-out.first").style.animation = "";
    }

    if (window.pageYOffset >= 1000) {
        var fades = document.querySelectorAll(".js-text-fade");
        for (var i = 0; i < fades.length; i++) {
            fades[i].classList.remove("fadein");
            fades[i].classList.add("fadeout");
        }
        document.querySelector(".js-zoom-out.first").style.animation = "";
    }

    if (window.pageYOffset >= 750) {
        var slides = document.querySelectorAll(".js-text-slide");
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove("slideout");
            slides[i].classList.add("slidein");
        }
    } else if (window.pageYOffset < 600) {
        var slides = document.querySelectorAll(".js-text-slide");
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove("slidein");
            slides[i].classList.add("slideout");
        }
    }
});

// show less - show more
var showLesses = document.getElementsByClassName("js-show-less")
var showMores = document.getElementsByClassName("js-show-more")
var showLessBtns = document.getElementsByClassName("js-show-less-link")
var showMoreBtns = document.getElementsByClassName("js-show-more-link")

for(let i = 0; i < showMoreBtns.length; i++) {
    let showMoreBtn = showMoreBtns[i]
    showMoreBtn.addEventListener("click", (event) => {
        showLesses[i].className += " hidden";
        showMoreBtns[i].className += " hidden";
        showMores[i].classList.remove("hidden");
        showLessBtns[i].classList.remove("hidden");
    })
}

for(let i = 0; i < showLessBtns.length; i++) {
    let showLessBtn = showLessBtns[i]
    showLessBtn.addEventListener("click", (event) => {
        showMores[i].className += " hidden";
        showLessBtns[i].className += " hidden";
        showLesses[i].classList.remove("hidden");
        showMoreBtns[i].classList.remove("hidden");
    })
}
