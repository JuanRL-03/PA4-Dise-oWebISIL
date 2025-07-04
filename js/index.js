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



//-- Script de Testimonios----
const $track = $('#carousel');
  const $dotsContainer = $('#dots');
  const $leftArrow = $('.arrow.left');
  const $rightArrow = $('.arrow.right');
  let currentSlide = 0;

  function getCardsPerView() {
    const width = $(window).width();
    if (width <= 600) return 1;
    if (width <= 992) return 2;
    return 3;
  }

  function getTotalSlides() {
    const perView = getCardsPerView();
    return Math.ceil($('.testimonio').length / perView);
  }

  function updateSlide() {
    const cardWidth = $('.testimonio').outerWidth(true);
    const perView = getCardsPerView();
    const offset = currentSlide * cardWidth * perView;
    $track.css('transform', `translateX(-${offset}px)`);
    $('.dot').removeClass('active');
    $('.dot').eq(currentSlide).addClass('active');
  }

  function createDots() {
    $dotsContainer.empty();
    const total = getTotalSlides();
    for (let i = 0; i < total; i++) {
      const $dot = $('<span class="dot"></span>');
      if (i === 0) $dot.addClass('active');
      $dot.on('click', () => {
        currentSlide = i;
        updateSlide();
      });
      $dotsContainer.append($dot);
    }
  }

  function nextSlide() {
    const total = getTotalSlides();
    currentSlide = (currentSlide + 1) % total;
    updateSlide();
  }

  function prevSlide() {
    const total = getTotalSlides();
    currentSlide = (currentSlide - 1 + total) % total;
    updateSlide();
  }

  $(window).on('resize', () => {
    createDots();
    currentSlide = 0;
    updateSlide();
  });

  $rightArrow.on('click', nextSlide);
  $leftArrow.on('click', prevSlide);

  setInterval(nextSlide, 6000);

  createDots();
  updateSlide();


  //--Slider--

  document.addEventListener('DOMContentLoaded', () => {
    const primeraImagen = document.querySelector('#spaPetCarousel .carousel-item.active img');
    if (primeraImagen) {
      primeraImagen.classList.add('animar-una-vez');

      // Elimina la clase tras la animación para que no se repita si vuelve al slide
      primeraImagen.addEventListener('animationend', () => {
        primeraImagen.classList.remove('animar-una-vez');
      });
    }
  })

