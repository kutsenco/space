$(function(){
    $('.slider__box').slick({ 
        prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/slider/01.svg" alt="prew">',
        nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/slider/03.svg" alt="next">',
    });

    $('.menu-btn').on('click', function() {
        $('.menu__list').toggleClass('active');
    })
});