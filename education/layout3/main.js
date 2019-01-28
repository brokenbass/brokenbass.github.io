$(document).ready( function () {


    $('#nav-toggle').on('click', function(e){
        e.preventDefault();

        if ( $('#navigation').hasClass('navigation-holder--mobile-open') ) {
            $('#navigation').removeClass('navigation-holder--mobile-open');
            
        } else {
            $('#navigation').addClass('navigation-holder--mobile-open');
           
        }
        
    });
});
