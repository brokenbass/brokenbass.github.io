$(document).ready(function () {
    $('.responsive').slick({
        dots: false,
        infinite: true,
        prevArrow: '<button class="arrow-slider-left" type="button"><div class="bottom-arrow-left"></div></button>',
        nextArrow: '<button class="arrow-slider-right" type="button"><div class="bottom-arrow-right"></button>',
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                    // prevArrow: false,
                    // nextArrow: false
                }
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false,
                    dots: true
                }
            }
        ]
    });
});