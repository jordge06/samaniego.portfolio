$(document).ready(function() {

  $(window).scroll(function() {
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }

    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass('show');
    } else {
      $('.scroll-up-btn').removeClass('show');
    }

  });

  // Owl Carousel
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 5000,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });

  // Slide-up
  $('.scroll-up-btn').click(function() {
    $('html').animate({scrollTop: 0});
  });

  // Typing Animation
  var typed = new Typed(".typing", {
    strings: ["Android Developer", "Fullstack Developer", "Spring Boot Developer", "Software Developer",
    "Software Engineer",  "Front End Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing2", {
    strings: ["Android Developer", "Fullstack Developer", "Spring Boot Developer", "Software Developer",
    "Software Engineer",  "Front End Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  // Toggle Menu Button
  $('.menu-btn').click(function() {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });
});
