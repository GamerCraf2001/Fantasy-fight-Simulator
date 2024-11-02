let def_BG= "./assets/img/background.gif";
let full_screen_icon = "./assets/img/fullscreen.png";
let def_move = "./assets/img/attack.png";
let unitbackground = "./assets/img/unitbutton.png";
let menubackground = "./assets/img/menubutton.png";
let icon= "./assets/img/app_icon.png";
let bgm_obj = document.getElementById("bgm");
const touchGuide = document.getElementById('touchGuide');

let set_icon = document.querySelector("link[rel*='icon']");
if (set_icon != null) {
    linkElement.href = icon;
} else {
    let linkElement = document.createElement('link');
    linkElement.rel = 'icon';
    linkElement.href = icon;
    document.getElementsByTagName('head')[0].appendChild(linkElement);
}


var unit2changebackground = document.getElementsByClassName("unit");
for (var i = 0; i < unit2changebackground.length; i++) {
    unit2changebackground[i].style.backgroundImage = `url('${unitbackground}')`;
}

var menuitem2changebackground = document.getElementsByClassName("menu-item");
for (var i = 0; i < menuitem2changebackground.length; i++) {
    menuitem2changebackground[i].style.backgroundImage = `url('${menubackground}')`;
}

var mainArea = document.getElementById("mainArea");
mainArea.style.backgroundImage = `url('${def_BG}')`;

var fullScreenBtn = document.getElementById("fullScreenBut");
fullScreenBtn.style.backgroundImage = `url('${full_screen_icon}')`;

document.querySelectorAll(".unitMove").forEach(function (element) {
    element.style.backgroundImage = `url('${def_move}')`;
})

document.querySelectorAll('*').forEach(function (element) {
    element.addEventListener('click', function () {
        if (bgm.paused) {
            bgm.play();
        }
    })
})


var lang = navigator.language || navigator.userLanguage;

