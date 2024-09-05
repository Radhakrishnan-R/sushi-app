import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 150,
});

// the additional code you saw in the video will not be needed :)

function adjustHeroHeight(){
    const navHeight= document.querySelector("header").offsetHeight;

    document.querySelector(".hero").style.minHeight = `calc(100vh - ${navHeight}px)`;
}

adjustHeroHeight();

window.addEventListener("resize", adjustHeroHeight);