const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
    spaceBetween: 30,
  },
  
  
  // Navigation arrows
  /*navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },*/
  
  scrollbar: {
    hide: 'true',
  },  
});
