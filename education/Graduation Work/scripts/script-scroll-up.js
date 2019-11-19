$(document).ready(function () {
      var button = $('#scroll-up');
      $(window).scroll (function () {
          if ($(this).scrollTop () > 500) {
              button.fadeIn();
          } else {
              button.fadeOut();
          }
      });
      button.on('click', function(){
          $('body, html').animate({
              scrollTop: 0
          }, 600);
          return false;
      });
});