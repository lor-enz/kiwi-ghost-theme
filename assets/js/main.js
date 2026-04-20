$(function () {
    'use strict';
    featured();
    pagination(false);
    initParticles();
    addParticlesPointerSupport();

    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
            initParticles();
            addParticlesPointerSupport();
        });
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
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: false },
                resize: true
            },
            modes: {
                repulse: { distance: 100 }
            }
        },
        retina_detect: true
    });
}

function addParticlesPointerSupport() {
    var cover = document.querySelector('.cover');
    if (!cover || !window.pJSDom || !window.pJSDom.length) { return; }

    function updateFromClient(clientX, clientY) {
        var pJS = window.pJSDom[0].pJS;
        var rect = pJS.canvas.el.getBoundingClientRect();
        pJS.interactivity.mouse.pos_x = (clientX - rect.left) * pJS.canvas.pxratio;
        pJS.interactivity.mouse.pos_y = (clientY - rect.top) * pJS.canvas.pxratio;
        pJS.interactivity.status = 'mousemove';
    }

    cover.addEventListener('mousemove', function (e) {
        updateFromClient(e.clientX, e.clientY);
    });

    cover.addEventListener('mouseleave', function () {
        window.pJSDom[0].pJS.interactivity.status = 'mouseleave';
    });

    cover.addEventListener('touchstart', function (e) {
        updateFromClient(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    cover.addEventListener('touchmove', function (e) {
        updateFromClient(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    cover.addEventListener('touchend', function () {
        window.pJSDom[0].pJS.interactivity.status = 'mouseleave';
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
                stagePadding: 40,
                dots: true,
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
