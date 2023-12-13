const menuBtn = document.querySelector(".menu");
const sideBar = document.querySelector(".sideBarOne");
const sideBarTwo = document.querySelector(".sideBarTwo");
const carouselContainer = document.querySelector(".carouselContainer");
const wrapperContainer = document.querySelector(".wrapper .carousel");
const prev = document.querySelector("i#prev");
const next = document.querySelector("i#next");
menuBtn.onclick = () => {
  sideBar.classList.toggle("close");
  sideBarTwo.classList.toggle("open");
  wrapperContainer.classList.toggle("AddWidth");
};

// Owl Carousel
$(".carousel").owlCarousel({
  margin: 8,
  nav: true,
  mouseDrag: true,
  touchDrag: true,
  stagePadding: 12,
  checkVisible: true,
  navText: [
    " <i class='entypo-icon-chevron-left button' id='prev'></i>",
    " <i class='entypo-icon-chevron-right button' id='next'></i>",
  ],
  //   autoplay: true,
  //   autoplayTimeout: 2000,
  //   autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 4,
      nav: false,
    },
    300: {
      items: 6,
      nav: false,
    },
    1000: {
      items: 9,
      nav: true,
    },
    1200: {
      items: 15,
      nav: true,
    },
  },
});

var owl = $(".owl-carousel");
owl.owlCarousel({
  loop: true,
  nav: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    960: {
      items: 4,
    },
    1200: {
      items: 6,
    },
  },
});
owl.on("mousewheel", ".owl-stage", function (e) {
  if (e.deltaY > 0) {
    owl.trigger("next.owl");
  } else {
    owl.trigger("prev.owl");
  }
  e.preventDefault();
});
