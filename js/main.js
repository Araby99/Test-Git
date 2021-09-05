var next = document.getElementById("next");
var prev = document.getElementById("prev");
var image = document.getElementsByClassName("carousel-item");
var bars = document.getElementsByClassName("bars")[0];
var bar = document.getElementsByClassName("bar");
var nav = document.getElementsByClassName("menu")[0];
var menu = false;
var html = document.getElementsByTagName("html")[0];


next.onclick = function () {
    if (image[0].classList.contains("yes")) {
        image[1].classList.add("yes");
        image[0].classList.remove("yes");
        image[2].classList.remove("yes");
        image[0].style.opacity = "0";
        image[1].style.opacity = "1";
        image[2].style.opacity = "0";
    } else if (image[1].classList.contains("yes")) {
        image[2].classList.add("yes");
        image[0].classList.remove("yes");
        image[1].classList.remove("yes");
        image[0].style.opacity = "0";
        image[1].style.opacity = "0";
        image[2].style.opacity = "1";
    } else if (image[2].classList.contains("yes")) {
        image[0].classList.add("yes");
        image[1].classList.remove("yes");
        image[2].classList.remove("yes");
        image[0].style.opacity = "1";
        image[1].style.opacity = "0";
        image[2].style.opacity = "0";
    }
}
prev.onclick = function () {
    if (image[0].classList.contains("yes")) {
        image[2].classList.add("yes");
        image[0].classList.remove("yes");
        image[1].classList.remove("yes");
        image[0].style.opacity = "0";
        image[2].style.opacity = "1";
        image[1].style.opacity = "0";
    } else if (image[1].classList.contains("yes")) {
        image[0].classList.add("yes");
        image[2].classList.remove("yes");
        image[1].classList.remove("yes");
        image[2].style.opacity = "0";
        image[1].style.opacity = "0";
        image[0].style.opacity = "1";
    } else if (image[2].classList.contains("yes")) {
        image[1].classList.add("yes");
        image[0].classList.remove("yes");
        image[2].classList.remove("yes");
        image[1].style.opacity = "1";
        image[0].style.opacity = "0";
        image[2].style.opacity = "0";
    }
}

bars.onclick = function () {
    if (menu == false) {
        menu = true;
        nav.style.height = "100vh";
        html.style.overflow = "hidden";
        bar[0].style.transform = "rotate(45deg)";
        bar[0].style.top = "8px";
        bar[1].style.transform = "rotate(-45deg)";
        bar[2].style.opacity = "0";
    } else if (menu == true) {
        menu = false;
        nav.style.height = "75px";
        html.style.overflow = "auto";
        bar[0].style.transform = "rotate(0deg)";
        bar[0].style.top = "0";
        bar[1].style.transform = "rotate(0deg)";
        bar[2].style.opacity = "1";
    }
}