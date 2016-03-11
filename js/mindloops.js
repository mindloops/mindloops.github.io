// Page scrolling feature 
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top' 
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

var header = (function() {

    var docElem = document.documentElement;
    var didScroll = false;
    var changeHeaderOn = 300;

    function init() {
        window.addEventListener( 'scroll', function(event) {
            if(!didScroll) {
                didScroll = true;
                setTimeout(scrollPage, 250);
            }
        }, false);
    }

    function scrollPage() {
        var scrollY = window.pageYOffset || docElem.scrollTop;
        if ( scrollY >= changeHeaderOn ) {
            $('.navbar-default').addClass('navbar-shrink');
            $('.logo').show();
        }
        else {
            $('.navbar-default').removeClass('navbar-shrink');
            $('.logo').hide();
        }
        didScroll = false;
    }

    init();

})();