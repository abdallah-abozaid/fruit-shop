const swiper1 = new Swiper('.first-element .swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    clickable: true,
    grabCursor: true,
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  
  });
const swiper2 = new Swiper('.four-item .swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    clickable: true,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  });
const swiper3 = new Swiper('.eight-item .swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    clickable: true,
    grabCursor: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  });

  // navigation
  var thebutton=document.querySelector(".second-header .outer-icon button");
  var search=document.querySelector(".navigation .search");
  var first_input=document.querySelector(".navigation .first-input");
  var navigation=document.querySelector(".navigation");
  var closebtton=document.querySelector(".navigation .close");
  thebutton.onclick=function(){
    navigation.classList.add("show-navigation");
  }
  closebtton.onclick=function(){
    navigation.classList.remove("show-navigation");
  }
  search.onclick=function(){
    first_input.classList.toggle("show-input")
  }


  // preloader
  var preloader=document.querySelector(".preloader")
  window.onload=function(){
     preloader.classList.add("hidepreloud")
  }