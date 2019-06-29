(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  //var mostreDom = $("#content")[0].innerHtml.findElementById("mostre-personali");

  $("#content").load("home.html");
  $("#home").addClass("active");

  $("#home").click(function(){
    $("#content").load("home.html");
    deactivateNavBarLinks();
    $("#home").addClass("active");
  });

  $("#geometrico-bn").click(function(){
    $("#content").load("geometrico-bn.html");
    deactivateNavBarLinks();
    $('.navbar-collapse').collapse('hide');
    $("#geometrico-bn").addClass("active");
  });

  $("#geometrico-col").click(function(){
    $("#content").load("geometrico-col.html");
    deactivateNavBarLinks();
    $("#geometrico-col").addClass("active");
  });

  $("#geometrico-fig").click(function(){
    $("#content").load("geometrico-fig.html");
    deactivateNavBarLinks();
    $("#geometrico-fig").addClass("active");
  });
  
  $("#treni").click(function(){
    $("#content").load("treni.html");
    deactivateNavBarLinks();
    $("#treni").addClass("active");
  });

  $("#biografia").click(function(){
    $("#content").load("biografia.html");
    deactivateNavBarLinks();
    $("#biografia").addClass("active");
  });

  $("#scritti-critici-it").click(function(){
    $("#content").load("scritti-critici-it.html");
    deactivateNavBarLinks();
    $("#scritti-critici-it").addClass("active");
  });

  $("#mostre-personali").click(function(){
    $("#content").load("mostre-personali.html");
    deactivateNavBarLinks();
    $("#mostre-collettive").click(function(){
      console.log("click listener");
      $("#content").load("mostre-collettive.html");
    });
    $("#mostre-personali").addClass("active");
  });

  $("#mostre-collettive").ready(function(){
    console.log("loaded");
    $("#mostre-collettive").click(function(){
      console.log("click listener");
      $("#content").load("mostre-collettive.html");
    });
  });

 

  var deactivateNavBarLinks = function () {
    $(".nav-link").removeClass("active");
    $('.navbar-collapse').collapse('hide');
  }


  // Hide collapsed navbar if a click outside it is made
  $("body").click(function (event) {
    var navigation = $(event.target).parents(".navbar").length;
    if(!navigation) {
        $(".navbar .navbar-collapse").collapse("hide");
    }
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict
