const clouds = document.querySelector("img#clouds");
const backMountains = document.querySelector("img#back-mountains");
const middleMountains = document.querySelector("img#middle-mountains");
const frontMountains = document.querySelector("img#front-mountains");
const trees = document.querySelector("img#trees");
const firstSee = document.querySelector("div#first-see");
const navbar = document.querySelector("nav#navbar");
const slidingText = document.querySelector(".sliding-text")
var playedAnimations = []

window.addEventListener("scroll", scrolling)

function scrolling(e) {
    let value = window.scrollY;
    clouds.style.top = value * 0.5 + "px";
    clouds.style.left = value * 0.7 + "px";
    backMountains.style.top = value * 0.5 + "px";
    middleMountains.style.top = value * 0.35 + "px";
    frontMountains.style.top = value * 0.2 + "px";
    firstSee.style.top = value * 0.48 + "px";
    navbar.style.top = value + "px";
    if (value>=300 && !playedAnimations.includes("about-me-title-slide")) {
        slideAboutMeTitle.play()
        playedAnimations.push("about-me-title-slide")
    }

    if (value>=700 && !playedAnimations.includes("about-me-item-slide")) {
        slideAboutMeContent.play()
        playedAnimations.push("about-me-item-slide")
    }
}

var slideAboutMeTitle = anime({
    targets: '#about-me-title',
    translateX: "50%",
    opacity: 0,
    direction: "reverse",
    autoplay: false,
    duration: 2000,
    easing: "easeInBack",
});

var slideAboutMeContent = anime({
    targets: '.about-me-item',
    translateX: "50%",
    opacity: 0,
    direction: "reverse",
    autoplay: false,
    duration: 2000,
    delay: anime.stagger(500),
    easing: "easeInCubic",
});

scrolling()