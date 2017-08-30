/**
 * Created by rhettmiller on 7/29/17.
 */

// Click to scroll to id

$(document).on('click', '.click-to-scroll', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1500);
});

// Calculate viewport height for mobile built-in headers

function calcVH() {
    $('.home-container').innerHeight( $(this).innerHeight() );
    $('.left-arrow').innerHeight( $(this).innerHeight() );
    $('.right-arrow').innerHeight( $(this).innerHeight() );
}
(function($) {
    calcVH();
    $(window).on('orientationchange', function() {
        calcVH();
    });
})(jQuery);


// Show/hide menus on click

$(document).ready(function(){

    $("[href]").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        }
    });

    $(".left-arrow").click(function(){
        $('#left-menu').animate({
            left: '0'
        });
        $('#left-menu-close').animate({
            right: '0'
        });
        $('#right-menu').animate({
            right: '-100%'
        });
    });

    $("#left-menu-close").click(function(){
        $('#left-menu').animate({
            left: '-60%'
        });
        $('#left-menu-close').animate({
            right: '-100%'
        });
    });

    $(".right-arrow").click(function(){
        $('#right-menu').animate({
            right: '0'
        });
        $('#right-menu-close').animate({
            left: '0'
        });
        $('#left-menu').animate({
            left: '-60%'
        });
    });

    $("#right-menu-close").click(function(){
        $('#right-menu').animate({
            right: '-100%'
        });
        $('#right-menu-close').animate({
            left: '-100%'
        });
    });

    $(".top-arrow").click(function(){
        $('#top-menu').animate({
            top: '0'
        });
        $('#top-menu-close').animate({
            bottom: '0'
        });
    });

    $("#top-menu-close").click(function(){
        $('#top-menu').animate({
            top: '-50%'
        });
        $('#top-menu-close').animate({
            bottom: '-100%'
        });
    });


    $("#left-menu").click(function(){
        $('#left-menu').animate({
            left: '-60%'
        });
        $('#left-menu-close').animate({
            right: '-100%'
        });
    });

    $("#right-menu").click(function(){
        $('#right-menu').animate({
            right: '-100%'
        });
        $('#right-menu-close').animate({
            left: '-100%'
        });
    });

    $("#top-menu").click(function(){
        $('#top-menu').animate({
            top: '-50%'
        });
        $('#top-menu-close').animate({
            bottom: '-100%'
        });
    });

});

// Show/hide menus on swipe

var swipe = new Hammer(document);

swipe.on('swiperight swipeleft', function(e) {
    e.preventDefault();
    if (e.type == 'swiperight') {
        // open menu
        $('#left-menu').animate({
            left: '0'
        });
        $('#left-menu-close').animate({
            right: '0'
        });
        $('#right-menu').animate({
            right: '-100%'
        });
    } if (e.type == 'swipeleft') {
        // open menu
        $('#right-menu').animate({
            right: '0'
        });
        $('#right-menu-close').animate({
            left: '0'
        });
        $('#left-menu').animate({
            left: '-60%'
        });
    }

});

// $(document).ready(function() {
//     $("[href]").each(function() {
//         if (this.href == window.location.href) {
//             $(this).addClass("active");
//         }
//     });
// });


