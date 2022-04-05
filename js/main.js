
// ANIMATION INITIATION  
AOS.init({
    duration: 1000,
    once: true,
})


const header = document.querySelector('header')
const hamburger = document.querySelector('header .navbar .hamburger')
const navbar = document.querySelector('header .navbar')

// HEADER STICKY 
window.addEventListener('scroll', () => {
    if (window.scrollY) header.classList.add("header__sticky")
    else header.classList.remove("header__sticky")
})


// NAVBAR ACTIVE 
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active')
    navbar.classList.toggle('is-active')
    document.body.classList.toggle('modal-open')
})

var example = flatpickr('#flatpickr', {
    dateFormat: 'd-m-Y',
    altInput: true,
    altFormat: "F j, Y",
    disableMobile: "true",
    position: 'above center',
});

if (document.querySelector('.sldier__1')) {
    new Splide('.sldier__1', {
        type: 'loop',
        perPage: 5,
        rewind: true,
        gap: 20,
        arrows: false,
        pagination: false,
        autoplay: true,
        interval: 2000,
        breakpoints: {
            992: {
                perPage: 4,
            },
            768: {
                perPage: 3,
            },
            575: {
                perPage: 2,
            },
        }
    }).mount();
}

$(function () {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 4040,
        values: [0, 4040],
        slide: function (event, ui) {
            $("#min").val(ui.values[0]);
            $("#max").val(ui.values[1]);
        }
    });
    $("#min").val($("#slider-range").slider("values", 0));
    $("#max").val($("#slider-range").slider("values", 1));
});
