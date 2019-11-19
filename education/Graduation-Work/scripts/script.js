$(document).ready(function() {
    $('body').on('click', '.menu__icon ', function () {
        $('.naw-content_mobile').slideToggle(200);
        $(this).closest('.header__menu').toggleClass('menu_state_open');
    });

    $(document).on( 'scroll',  function(){
        $('.naw-content_mobile').fadeOut(200)
        $('.header__menu').removeClass('menu_state_open');
    });
});


