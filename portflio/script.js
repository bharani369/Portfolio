
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});

window.addEventListener('load', function () {
    document.querySelector('.pre-loader').className += ' hidden';
});

gsap.registerPlugin(ScrollTrigger);

{
    const process = document.querySelector('.process');
    if ((typeof (process) != 'undefined' && process != null)) {
        let sections = gsap.utils.toArray('.process__item');
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "ease-in",
            scrollTrigger: {
                trigger: process,
                start: " top 600%",
                scrub: 1,
                pin: true,
                end: "300%",
            },
        });
    }
}

(function () {
    var scroll = new LocomotiveScroll();
})();

var duration = 20 * 700;
var animationEnd = Date.now() + duration;
var defaults = {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0
};

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
        return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti({
        ...defaults,
        particleCount,
        origin: {
            x: randomInRange(0.1, 0.3),
            y: Math.random() - 0.2
        }
    });
    confetti({
        ...defaults,
        particleCount,
        origin: {
            x: randomInRange(0.7, 0.9),
            y: Math.random() - 0.2
        }
    });
}, 250);