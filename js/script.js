$(function() {

  "use strict";

  var topoffset = 50; //variable for menu height
  var slideqty = $('#featured .item').length;
  var wheight = $(window).height(); //get the height of the window
  
  $('.fullheight').css('height', wheight); //set to window tallness  

  //recalculates height of .fullheight elements as window is resized
  $(window).resize(function() {
    wheight = $(window).height(); //get the height of the window
    $('.fullheight').css('height', wheight); //set to window tallness
  });

  //Activate Scrollspy
  $('body').scrollspy({
    target: 'header .navbar',
    offset: topoffset
  });

  // add inbody class
  var hash = $(this).find('li.active a').attr('href');
  if(hash !== '#featured') {
    $('header nav').addClass('inbody');
  } else {
    $('header nav').removeClass('inbody');
  }


  // Add an inbody class to nav when scrollspy event fires
  $('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
    var hash = $(this).find('li.active a').attr('href');
    if(hash !== '#featured') {
      $('header nav').addClass('inbody');
    } else {
      $('header nav').removeClass('inbody');
    }
  });


  //Use smooth scrolling when clicking on navigation
  $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling

  //Activate ReadMore plugin
  $('.puppy-rm').readmore({speed: 500});

  //Initialize Masonry
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  });
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry();
  });  

  // Initialize Magnific-Popup
  $('.image-link').magnificPopup({

    type:'image',

    gallery: {
    // options for gallery
    enabled: true
  },

  });

});