$(function() {
  // Smoth Scroll
  $(".smooth").click(function(event) {
    event.preventDefault();

    if (this.hash !== "") {
      $("html, body")
        .stop(true)
        .animate(
          {
            scrollTop: $(this.hash).offset().top
          },
          400
        );
    }
  });
});
$(".contact-btn").click(function(event) {
  event.preventDefault();

  if (this.hash !== "") {
    $("html, body")
      .stop(true)
      .animate(
        {
          scrollTop: $(this.hash).offset().top
        },
        400
      );
  }
});

$(window).on("load", function() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: false,
    items: 3,
    dotsContainer: ".landing__dots",
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      }
    }
  });

  var owl = $(".owl-carousel");
  owl.owlCarousel();

  $(".next").click(function() {
    owl.trigger("next.owl.carousel");
  });

  $(".prev").click(function() {
    owl.trigger("prev.owl.carousel");
  });
});
