const clouds = document.querySelector("img#clouds");
const backMountains = document.querySelector("img#back-mountains");
const middleMountains = document.querySelector("img#middle-mountains");
const frontMountains = document.querySelector("img#front-mountains");
const trees = document.querySelector("img#trees");
const firstSee = document.querySelector("div#first-see");
window.addEventListener("scroll", scrolling)

// Parallax effect
function scrolling(e) {
    let value = window.scrollY;
    clouds.style.top = value * 0.5 + "px";
    clouds.style.left = value * 0.7 + "px";
    backMountains.style.top = value * 0.5 + "px";
    middleMountains.style.top = value * 0.35 + "px";
    frontMountains.style.top = value * 0.2 + "px";
    firstSee.style.top = value * 0.48 + "px";
}

function main() {
    // Initalizing AOS module
    AOS.init({
        // Global settings:
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 500,
        delay: 50,
        duration: 1250,
        easing: 'ease',
        once: true,
        mirror: false,
        anchorPlacement: 'center-bottom',
    });

    scrolling()
};

main();
