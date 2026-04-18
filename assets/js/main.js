$(function () {
    'use strict';
    featured();
    pagination(false);
    initParticles();

    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', initParticles);
    }
});

function getParticlesColor() {
    var html = document.documentElement;
    var isDark = html.classList.contains('theme-dark') ||
        (!html.classList.contains('theme-light') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    return isDark ? '#c0c0c0' : '#505050';
}

function destroyParticles() {
    if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = [];
    }
}

function initParticles() {
    if (!document.getElementById('cover-particles')) { return; }
    destroyParticles();
    var color = getParticlesColor();
    particlesJS('cover-particles', {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: color },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true, anim: { enable: false } },
            size: { value: 3, random: true, anim: { enable: false } },
            line_linked: {
                enable: true,
                distance: 150,
                color: color,
                opacity: 0.25,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: false },
                resize: true
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 0.6 } }
            }
        },
        retina_detect: true
    });
}

function featured() {
    'use strict';
    $('.featured-feed').owlCarousel({
        dots: false,
        margin: 30,
        nav: true,
        navText: [
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="icon"><path d="M20.547 22.107L14.44 16l6.107-6.12L18.667 8l-8 8 8 8 1.88-1.893z"></path></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="icon"><path d="M11.453 22.107L17.56 16l-6.107-6.12L13.333 8l8 8-8 8-1.88-1.893z"></path></svg>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
        },
    });
}
