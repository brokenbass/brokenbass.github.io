$(document).ready(function() {


    $('body').on('click', '#hb', function () {
        $('.popap').fadeIn(100);
        $("html,body").css("overflow","hidden");
    });

    $('body').on('click', '#mob-butt', function () {
        $('.popap').fadeIn(100);
        $("html,body").css("overflow","hidden");
    });

    $('body').on('click', '#footer-butt', function () {
        $('.popap').fadeIn(100);
        $("html,body").css("overflow","hidden");
    });

    $('body').on('click', '#closed', function () {
        $('.popap').fadeOut(200)
        $("html,body").css("overflow","visible");
    });

    $('body').on('click', '.popap__center-popap', function (event) {
        if(event.target == this) {
            $('.popap').fadeOut(200)
        }
        $("html,body").css("overflow","visible");
    });



    $('body').on('click', '#learn-more-buttom', function () {
        $('.popap').fadeIn(100);
        $("html,body").css("overflow","hidden");
    });

    $('body').on('click', '#closed-learn-more-popap', function () {
        $('.popap').fadeOut(200)
        $("html,body").css("overflow","visible");
    });

    $('body').on('click', '#popap', function (event) {
        if(event.target == this) {
            $(this).fadeOut(200)
        }
        $("html,body").css("overflow","visible");
    });


    $('body').on('click', '#cost', function () {
        $('.popap-cost').fadeIn(100);
        $("html,body").css("overflow","hidden");
    });

    $('body').on('click', '#closed-popap-cost', function () {
        $('.popap-cost').fadeOut(200)
        $("html,body").css("overflow","visible");
    });

    $('body').on('click', '.popap-cost__center-popap-cost', function (event) {
        if(event.target == this) {
            $('.popap-cost').fadeOut(200)
        }
        $("html,body").css("overflow","visible");
    });


    $('body').on('click', '#popap-order-buttom', function () {
        $('.popap-order').fadeIn(100);
        $("html,body").css("overflow","hidden");
    });

    $('body').on('click', '#closed-popap-order', function () {
        $('.popap-order').fadeOut(200)
        $("html,body").css("overflow","visible");
    });

    $('body').on('click', '.popap-order__center-popap-order', function (event) {
        if(event.target == this) {
            $('.popap-order').fadeOut(200)
        }
        $("html,body").css("overflow","visible");
    });


    $(function(){
        $("#number").mask("8(999) 999-9999");
    });

});

