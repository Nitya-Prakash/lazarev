function locomotiveanim() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
        smoothMobile: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },

        pinType: document.querySelector(".main").style.transform
            ? "transform"
            : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

function navMenuAnimation() {
    let nav = document.querySelector(".nav-part2");
    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to(".nav-bottom", {
            height: "24vh"
        })
        tl.to(".nav-part2 h4", {
            display: "block"
        }, "anim2")
        tl.to(".nav-part2 h4 span", {
            y: 0,
            stagger: {
                amount: 0.5
            }
        }, "anim2")
    })

    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()

        tl.to(".nav-part2 h4 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h4", {
            display: "none",
            duration: 0.4
        }, "anim2")
        tl.to(".nav-bottom", {
            height: "0vh",
            duration: 0.4
        }, "anim2")
    })
}

function imgOnHover() {
    let rightElem = document.querySelectorAll(".right-elem");
    rightElem.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[3], {
                display: "block",
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                display: "none",
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (dets) {
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 45,
                y: dets.y - elem.getBoundingClientRect().y - 45
            })
        })
    })
}

let icon = document.querySelector(".page3-center .icon");

function textOnHover() {

    icon.addEventListener("mouseenter", function () {
        gsap.to(".page3 .page3-center h4", {
            opacity: 1,
            y: -5,
            cursor: "pointer"
        })
    })

    icon.addEventListener("mouseleave", function () {
        gsap.to(".page3 .page3-center h4", {
            opacity: 0,
            y: 0,
            cursor: "default"
        })
    })
}

function playOnClick() {
    let video = document.querySelector(".page3 video");

    icon.addEventListener("click", function () {
        video.play()
        gsap.to("video", {
            transform: "scaleX(1) scaleY(1)",
            display: "block",
            borderRadius: 0,
            zIndex: 99
        })
    })

    video.addEventListener("click", function () {
        video.load()
        gsap.to("video", {
            transform: "scaleX(.7) scaleY(0)",
            display: "none",
            borderRadius: "30px",
            zIndex: 0
        })
    })
}

function playOnHover() {
    let sections = document.querySelectorAll(".page7-top-right");

    sections.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[5].style.opacity = 1
            elem.childNodes[5].play()
        })

        elem.addEventListener("mouseleave", function () {
            elem.childNodes[5].style.opacity = 0
            elem.childNodes[5].load()
        })
    })
}

function mouseFollower() {
    let rightDiv = document.querySelectorAll(".page7-top-right");

    rightDiv.forEach(function (details) {
        details.addEventListener("mouseenter", function () {
            gsap.to(details.childNodes[1], {
                display: "block",
                scale: 1
            })
        })

        details.addEventListener("mouseleave", function () {
            gsap.to(details.childNodes[1], {
                display: "none",
                scale: 0
            })
        })

        details.addEventListener("mousemove", function (data) {
            gsap.to(details.childNodes[1], {
                x: data.x - details.getBoundingClientRect().x - 70,
                y: data.y - details.getBoundingClientRect().y - 70
            })
        })
    })
}






locomotiveanim();
navMenuAnimation();
imgOnHover();
textOnHover();
playOnClick();
playOnHover();
mouseFollower();