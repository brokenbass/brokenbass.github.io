$(document).ready( function () {


    $('nav-toggle').on('click', function(e){
        e.preventdefault();

        if ( $('#navigation').hasClass('navigation-holder--mobile-open') ) {
            $('#navigation').removeClass('navigation-holder--mobile-open');
            $(this).text('open nav');
        } else {
            $('#navigation').addClass('navigation-holder--mobile-open');
            $(this).text('close nav');
        }
        
    });
});
