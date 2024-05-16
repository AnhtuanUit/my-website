// Toggles visibility of sub nav
function blink(show = false) {
    const mainNav = document.querySelector('main .nav');
    console.log(mainNav);
    console.log(mainNav.classList);
    mainNav.classList.toggle("bg-sub-nav")
}

// Blink every 2 seconds
window.setInterval(blink, 2000);

