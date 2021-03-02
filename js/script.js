const menu = document.querySelector('.navbar-toggler');
const body = document.querySelector('body');

menu.addEventListener('click', () => {
    body.classList.toggle('active')
})
// /////////////////////////////////////////////////////////
var swiper = new Swiper('.slider-quotes__swiper-container', {
    pagination: {
        el: '.slider-quotes__swiper-pagination ',
        clickable: true,
        dynamicBullets: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});
// ///////////////////////////////////////////////////////
var swiper = new Swiper('.project__swiper-container', {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
        nextEl: '.project__swiper-button-next',
        prevEl: '.project__swiper-button-prev',
    },
});
// ///////////////////////////////////////////