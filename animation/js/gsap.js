window.addEventListener("DOMContentLoaded",function() {


    setTimeout (() => {
        gsap.from(".js__hero__heading", {
            duration:.7,
             y: 100,
             opacity:0
        });

        gsap.from(".js__hero__descr", {
            duration:.7,
             y: 100,
             opacity:0,
             delay:1
        });

        gsap.from(".js__hero__btn", {
            duration:.7,
             y: 100,
             opacity:0
        });
        // 
        gsap.from(".js__photo-one", {
            duration:.7,
             opacity:0,
             scale:.5,
             delay:1.5
        });
        gsap.from(".js__photo-two", {
            duration:.5,
            scale:.5,
             opacity:0,
             delay:2
        });
        gsap.from(".js__photo-three", {
            duration:.5,
            scale:.5,
             opacity:0,
             delay:2.2
        });

        gsap.from(".js__portfolio__author", {
            duration:.5,
            scale:.5,
             opacity:0,
             delay:2.5
        });
    

    })

})
