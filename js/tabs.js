window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.how-we-are-working__link').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.how-we-are-working__desc').forEach(function(tabContent) {
        tabContent.classList.remove('how-we-are-working__desc_active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('how-we-are-working__desc_active');

      document.querySelectorAll('.how-we-are-working__link').forEach(function(tabLinkContent) {
        tabLinkContent.classList.remove('how-we-are-working__link_active')
      });
      document.querySelector(`[data-path="${path}"]`).classList.add('how-we-are-working__link_active');  
    })
  });
})