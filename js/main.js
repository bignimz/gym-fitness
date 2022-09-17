$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },

      768: {
        items: 2,
      },

      1100: {
        items: 3,
      },

      1400: {
        items: 4,
        loop: false,
      },
    },
  });

  $("#search-icon").click(function () {
    $(".search-bar").slideToggle();
    $(".search").slideToggle();
  });

  $("#overlay").click(function () {
    $(".search-bar").slideToggle();
    $(".search").slideToggle();
  });
});

// Testimonials
let testimonies = document.getElementsByClassName("testimonial-body");
let userPics = document.getElementsByClassName("user-pic");

function showReview() {
  for (pic of userPics) {
    pic.classList.remove("active-pic");
  }
  for (test of testimonies) {
    test.classList.remove("testimony-active");
  }
  let i = Array.from(userPics).indexOf(event.target);

  userPics[i].classList.add("active-pic");
  testimonies[i].classList.add("testimony-active");
}
