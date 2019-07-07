$('body').css('overflow-y','hidden');
function load() {
  $('.carga').fadeOut();
  $('body').css('overflow-y','visible');
}
window.onload = load;

$(document).ready( function() {
  $('.areas .slick-prev').text('');
  $('.areas .slick-prev').append('<i class="material-icons">add</i>');
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
    $('.modal-secciones').fadeIn()
        var idSeccion = $(this).attr('id');
        if( idSeccion === 's1' ){
          $('.modal-secciones').css('background-image','none')
          $('.modal-secciones').css('background-color','#F3E276')
          $('#seccion').load('../secciones/nosotros.html');
        }else if( idSeccion === 's2' ){
          $('.modal-secciones').css('background-image','none')
          $('.modal-secciones').css('background-color','#f5f5f5')
          $('#seccion').load('../secciones/mision.html');
        }else if( idSeccion === 's3' ){
          $('.modal-secciones').css('background-image','none')
          $('.modal-secciones').css('background-color','#f5f5f5')
          $('#seccion').load('../secciones/vision.html');
        }else if( idSeccion === 's4' ){
          $('.modal-secciones').css('background-image','linear-gradient(-180deg, #F8E776 0%, #09EAE6 99%)')
          $('#seccion').load('../secciones/historia.html');
        }else if( idSeccion === 's5' ){
          $('.modal-secciones').css('background-image','linear-gradient(-180deg, #09EAE6 0%, #F8E776 100%)')
          $('#seccion').load('../secciones/filosofia.html');
        }else if( idSeccion === 's6' ){
          $('.modal-secciones').css('background-image','none')
          $('.modal-secciones').css('background-color','#ffffff')
          $('#seccion').load('../secciones/valores.html');
        }else if( idSeccion === 's7' ){
          $('.modal-secciones').css('background-image','none')
          $('.modal-secciones').css('background-color','#e3f2fd')
          $('#seccion').load('../secciones/areas.html');
        }else if( idSeccion === 's8' ){
          $('.modal-secciones').css('background-image','none')
          $('.modal-secciones').css('background-color','#fffde7')
          $('#seccion').load('../secciones/contacto.html');
        }
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
/*
  $('.valores-slide').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    arrows: 'false',
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ] 
  });

  $('.areas-especificas').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    arrows: 'false',
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ] 
  });
  */
  // Efecto scroll en el body
  /*
  $(document).on('click', 'a[href^="#"]', function(event){
    event.preventDefault()
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500)
  })
  */
 
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
        $('.botonSubir').css('bottom','5%');
      }else{
        $('.botonSubir').css('bottom','-20%');
      }  
    }  
  });

  $('.botonContenedorPrincipal').on('click', function(){
    if( $('.modal-principal').is(':hidden') ){
      $('.modal-principal').fadeIn() 
      $('body').css('overflow-y','hidden')
    }
  })

  $('.modal-contenedor .boton-cerrar').on('click', function(){
    $(this).parent().fadeOut()
    $('body').css('overflow-y','visible')
  })

  $('.modal-secciones .boton-cerrar').on('click', function(){
    $(this).parent().fadeOut()
    $('body').css('overflow-y','visible')
  })

  /*
  $('.boton-historia').on('click', function(){
    if( $('.modal-historia').is(':hidden') ){
      $('.modal-historia').fadeIn() 
      $('body').css('overflow-y','hidden')
    }
  })
  */

  $('.caja > .boton').on('click', function(){
    var id = $(this).attr('id');
    if( $('.modal-'+id).is(':hidden') ){
      $('.modal-'+id).fadeIn();
      $('body').css('overflow-y','hidden')
    }
  });

  

  // slide-contendor 
  $('.slide-contendor ').slick({
    //dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    //autoplay: true,
    arrows: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          //dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          //infinite: true,
          //dots: false
          //arrows: 'true'
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          //dots: false
          //arrows: 'true'
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ] 
  });

});  