$(document).ready(function () {
    // slider
    $('.js-slider').slick({
        dots: true,
        infinite: false,
        draggable: false,
        adaptiveHeight: true
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


    // inputs
    $('.input__text').each(function() {
        if (this.value) {
            $(this).next().addClass('is-active');
        }
    });
    $('.input__text').on('blur', function(e) {
        if (e.target.value) {
            $(this).next().addClass('is-active');
        } else {
            $(this).next().removeClass('is-active');
        }
    });

    // select
    $('.input--select').on('click', function(e) {
        if ($(this).find('input').is(':disabled')) {
            return;
        }
        $(this).toggleClass('is-opened');
    });
    $('.input--select__item').on('click', function(e) {
        $(this).parent().siblings('.input--select__value').html($(this).html());
        $(this).parent().siblings('input[type="hidden"]').val($(this).html().trim());
    });

    // menu 
    $('#js-open-menu').click(function() {
        $('body').addClass('is-menu-opened');
    });
    $('#js-close-menu').click(function() {
        $('body').removeClass('is-menu-opened');
    });
    $('#js-toggle-menu').click(function() {
        $('body').toggleClass('is-menu-opened');
    });
});