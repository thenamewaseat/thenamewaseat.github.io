// LENIS SMOOTH SCROLL
let lenis;
    if (Webflow.env("editor") === undefined) {
    lenis = new Lenis({
        lerp: 0.12,
        wheelMultiplier: 0.9,
        gestureOrientation: "vertical",
        normalizeWheel: false,
        smoothTouch: false
    });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    }

    //show and hide navbar
    window.addEventListener('scroll', function() {
        const container = document.getElementById('header');
        if (window.scrollY > 0) {
            container.classList.add('scrolled');
        } else {
            container.classList.remove('scrolled');
        }
    });

    let lastScrollTop = 0;
    const element = document.getElementById("header");

    window.addEventListener("scroll", function() {
        const currentScroll = window.scrollY || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop && window.scrollY > 300) {
            // Scrolling Down
            element.style.transform = "translate(0,-88px)";
        } else {
            // Scrolling Up
            element.style.transform = "translate(0,0px)";
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });

    //scroll dot divider
    window.addEventListener('scroll', () => {
        const divider = document.querySelectorAll('.divider');
        divider.forEach(divider => {
            const rect = divider.getBoundingClientRect();
            if (rect.top <= window.innerHeight*0.85 && rect.bottom >= 0) {
                divider.classList.add('scrolled');
            } else {
                divider.classList.remove('scrolled');
            }
        });
    });