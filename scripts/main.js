var menu = document.querySelector('#menu-icons');
var navbar = document.querySelector('.navbar');

menu.onclick =()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = ()=>{ 
    menu.classList.remove('fa-times');
    navbar.classList.remove('active'); 
}
document.querySelector('#search-icons').onclick = ()=>{
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick= ()=>{
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop:true,
  });


  var swiper = new Swiper(".swiper-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
   loop:true,
   breakpoints: {
    0: {
      slidesPerView: 1,
    },
     640: {
     slidesPerView: 2,
   },
   768: {
     slidesPerView: 2,
   },
   1024: {
     slidePerView: 3,
   },
  },
  });