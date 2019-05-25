
$(document).ready( function() {

  var iconMenu = $('.icon-menu--content')
  var overlay = $('.overlay-menu')
  var width = window.innerWidth

  var windowsWidth = $(window).width()

  $(iconMenu).on('click', function(e){
    e.preventDefault()
    var el = $(this)
    if( width < 1024 ){
      if( $(overlay).is(':hidden') ){
        el.addClass('icon-menu--active')
        $('.header-contenedor').css('background-color','rgba(243,226,118,90)');
        $(overlay).fadeIn();
        $('body').css('overflow-y','hidden')
      }else{
        el.removeClass('icon-menu--active')
        $('.header-contenedor').css('background-color','transparent');
        $(overlay).fadeOut();
        $('body').css('overflow-y','visible')
      }
    }
  })
  // Evento que cierra el menu principal al seleccionar una opción
  $('.item-menu').on('click', function(){
    if ( $('.icon-menu--content').is('hidden')){

    }else{
      if ( $(iconMenu).hasClass('icon-menu--active') ){
        $(iconMenu).removeClass('icon-menu--active')
        $(overlay).fadeOut();
        $('.header-contenedor').css('background-color','transparent');
        $('body').css('overflow-y','visible');
      }
    }
  })

  $('.valores-slide').slick({
    dots: false,
    infinite: true,
    speed: 700,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: 'false',
  });

  // Efecto scroll en el body
  $(document).on('click', 'a[href^="#"]', function(event){
    event.preventDefault()
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500)
  })

  // Capturando evento del scoll
  $(window).scroll(function(){
    var el = $('.botonSubir')
    if( windowsWidth < 1024 ){
      if( $(this).scrollTop() > 200 ){
        $('.botonSubir').css('bottom','5%');
      }else{
        $('.botonSubir').css('bottom','-20%');
      }
    }else{
      if( $(this).scrollTop() > 100 ){ 
      }else{

      }  
    }  
  });

});  