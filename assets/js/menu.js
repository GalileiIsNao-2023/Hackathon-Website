const menuBtn = document.querySelector(".header-bar-menu-button");
const exitBtn = document.querySelector(".exit");

let t1 = gsap.timeline({ paused: true });
t1.to(".menu", { opacity: 1, duration: 1, top: 0, ease: Power2.easeInOut });
t1.to(
    ".nav",
    {
        opacity: 1,
        marginBottom: 0,
        duration: 1,
        ease: Power2.easeInOut,
        stagger: 0.3,
    },
    ">-0.5"
);
t1.to(".background", { opacity: 1, duration: 1, left: 100, ease: Power2.easeInOut }, "-=2");

menuBtn.addEventListener("click", () => {
    t1.play().timeScale(1);
});

exitBtn.addEventListener("click", () => {
    t1.timeScale(2);
    t1.reverse();
});