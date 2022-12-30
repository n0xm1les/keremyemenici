const clouds = document.querySelector("img#clouds");
const backMountains = document.querySelector("img#back-mountains");
const middleMountains = document.querySelector("img#middle-mountains");
const frontMountains = document.querySelector("img#front-mountains");
const trees = document.querySelector("img#trees");
const firstSee = document.querySelector("div#first-see");
const navbar = document.querySelector("nav#navbar");
console.log(firstSee);

window.addEventListener("scroll", function (e) {
    let value = window.scrollY;
    clouds.style.top = value * 0.5 + "px";
    clouds.style.left = value * 0.7 + "px";
    backMountains.style.top = value * 0.5 + "px";
    middleMountains.style.top = value * 0.35 + "px";
    frontMountains.style.top = value * 0.1 + "px";
    firstSee.style.top = value * 0.48 + "px";
    navbar.style.top = value + "px";
})