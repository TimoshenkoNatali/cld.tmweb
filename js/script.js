document.querySelector('.swiper').style.height = (document.querySelector('.hero__content').getBoundingClientRect().height) + 203 +'px';

window.addEventListener('resize', function() {
  document.querySelector('.swiper').style.height = (document.querySelector('.hero__content').getBoundingClientRect().height) + 203 +'px';
})
