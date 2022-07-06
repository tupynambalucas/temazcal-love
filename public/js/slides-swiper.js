var swiper = new Swiper(".mySwiper", {
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 6000,
    },
    on: {
        slideChange: function () {
        const index_currentSlide = swiper.realIndex;
        const currentSlide = swiper.slides[index_currentSlide]
        const animateCSS = (element, animation, prefix = 'animate__') =>
        // We create a Promise and return it
            new Promise((resolve, reject) => {
                const animationName = `${prefix}${animation}`;
                const node = document.querySelector(element);

                node.classList.add(`${prefix}animated`, animationName);

                // When the animation ends, we clean the classes and resolve the Promise
                function handleAnimationEnd(event) {
                event.stopPropagation();
                node.classList.remove(`${prefix}animated`, animationName);
                resolve('Animation ended');
                }

                node.addEventListener('animationend', handleAnimationEnd, {once: true});
        });

        var slide1P = document.getElementById('slide-p-1');
        var slide2P = document.getElementById('slide-p-2');
        var slide3P = document.getElementById('slide-p-3');

        if (currentSlide.id== 'slide1') {
            slide1P.style.display = "none";
            animateCSS('#slide-h1-1', 'fadeInDown').then(() => {
                setTimeout(function(){
                    slide1P.style.display = "block";
                    animateCSS('#slide-p-1', 'fadeInLeft');
                }, 1); 
            });
        }
        if (currentSlide.id== "slide2") {
            slide2P.style.display = "none";
            animateCSS('#slide-h1-2', 'fadeInDown').then(() => {
                setTimeout(function(){
                    slide2P.style.display = "block";
                    animateCSS('#slide-p-2', 'fadeInLeft');
                }, 1); 
            });
        }
        if (currentSlide.id== "slide3") {
            slide3P.style.display = "none";
            animateCSS('#slide-h1-3', 'fadeInDown').then(() => {
                setTimeout(function(){
                    slide3P.style.display = "block";
                    animateCSS('#slide-p-3', 'fadeInLeft');
                }, 1); 
            });
        }
        },
    },
});
