//Script: header
$(document).ready(function () {
      $('#menu-toggle').click(function (e) {
        e.stopPropagation();
        $('#nav-menu').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars fa-times');
      });
      
      $('#nav-menu a').click(function() {
        $('#nav-menu').removeClass('active');
        $('#menu-toggle i').removeClass('fa-times').addClass('fa-bars');
      });
      
      $(document).click(function() {
        $('#nav-menu').removeClass('active');
        $('#menu-toggle i').removeClass('fa-times').addClass('fa-bars');
      });
      
      $('#nav-menu').click(function(e) {
        e.stopPropagation();
      });
    });


//Slider
$(document).ready(function () {
      $('.interactive-img').css({
        'opacity': '1',
        'transform': 'scale(1)'
      });

      setTimeout(function () {
        $('.overlay').css({
          'opacity': '1',
          'transform': 'translateY(0)'
        });
      }, 300);

      $('.card').each(function (i) {
        $(this).delay(400 + i * 300).animate({
          opacity: 1,
          top: 0
        }, 700);
      });
    });