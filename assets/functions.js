$(document).ready(function(){


    $('.js--scroll-how-it-works').click(function(){
        $('html, body').animate({scrollTop: $('.js--how-it-works').offset().top -100},1000);
    });

    $('.js--scroll-faq').click(function(){
        $('html, body').animate({scrollTop: $('.js--faq').offset().top -100},1000);
    });


    $("a.accordion-question").click(function(){
        $(this).find('i').toggleClass("fa-caret-right fa-caret-down")
    });
});