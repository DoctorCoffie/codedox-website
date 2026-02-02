document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      mobileToggle.innerHTML = mobileMenu.classList.contains('active')
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';
      if (window.lucide) {
        window.lucide.createIcons();
      }
    });
  }

  const galleryCards = document.querySelectorAll('.gallery-card');
  const lightbox = document.getElementById('lightbox');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxSubtitle = document.getElementById('lightboxSubtitle');

  if (galleryCards.length && lightbox) {
    galleryCards.forEach((card) => {
      card.addEventListener('click', () => {
        const image = card.getAttribute('data-image');
        const title = card.getAttribute('data-title');
        const subtitle = card.getAttribute('data-subtitle');
        if (lightboxImage) lightboxImage.src = image || '';
        if (lightboxTitle) lightboxTitle.textContent = title || '';
        if (lightboxSubtitle) lightboxSubtitle.textContent = subtitle || '';
        lightbox.classList.add('active');
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
    };

    if (lightboxClose) {
      lightboxClose.addEventListener('click', (event) => {
        event.stopPropagation();
        closeLightbox();
      });
    }

    lightbox.addEventListener('click', closeLightbox);
  }
});
