$(document).ready(function () {
    // animate 'X'
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    //takes to item when menu item clicked
    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    //smooth scrolling
    $('nav a[href*="#"]').on('click', function () {
       $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 100
       }, 2000);
    });

    //bring to top button function
    $('#up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
           }, 2000);  
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });

});