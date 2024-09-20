// LENIS SMOOTH SCROLL
let lenis;
    if (Webflow.env("editor") === undefined) {
    lenis = new Lenis({
        lerp: 0.12,
        wheelMultiplier: 0.8,
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