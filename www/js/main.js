$(document).ready(function () {
    $('.js-slider').slick({
        dots: true,
        infinite: false,
        draggable: false
    });

    function toggleArrows(event, slick, currentSlide) {
        if(currentSlide === slick.slideCount - 1) {
            $('.slick-next').addClass('hidden');
        } else {
            $('.slick-next').removeClass('hidden');
        }

        if(currentSlide === 0) {
            $('.slick-prev').addClass('hidden');
        } else {
            $('.slick-prev').removeClass('hidden');
        }  
    }

    $('.js-slider').on('afterChange', toggleArrows);

    $('.slick-prev').addClass('hidden');
});