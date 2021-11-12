window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#burger-menu').classList.toggle('header__burger-menu_active');
  });
});