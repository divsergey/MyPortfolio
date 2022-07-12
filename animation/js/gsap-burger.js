window.addEventListener("DOMContentLoaded",function() {


    setTimeout (() => {
        gsap.from(".js__menu", {
            duration:1,
             opacity:0,
             y:50,
             delay:1
        });

        gsap.from(".js__main__list", {
            duration:1,
             opacity:0,
             y:100,
            delay:1.5
        });

        gsap.from(".js__social-list", {
            duration:1,
             opacity:0,
             y:100,
            delay:2
        });

        gsap.from(".js__menu__extra", {
            duration:1,
             opacity:0,
             y:100,
            delay:2
        });

    

    })

})
