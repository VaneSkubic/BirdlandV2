let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

function hamburgerMenu() {
    var nav = document.getElementById("nav");
    var cross = document.getElementById("cross");
    var hamburger = document.getElementById("hamburger");
    var phoneNav = document.getElementById("phone-nav");
    var header = document.getElementById("header");
    if (nav.style.display === "flex") {
        phoneNav.style.height = '15vh';
        phoneNav.style.alignItems = 'flex-start';
        cross.style.display = 'none';
        hamburger.style.display = 'inline';
        nav.style.display = "none";
        header.style.backgroundColor = '#00000000';
    } else {
        phoneNav.style.height = '10vh';
        phoneNav.style.alignItems = 'center';
        cross.style.display = 'inline';
        hamburger.style.display = 'none';
        nav.style.display = "flex";
        header.style.backgroundColor = '#242424';
    }
}