<?php
$pageTitle = 'CODEDOX.RS - Galerija';
$currentPath = '/gallery.php';
require_once __DIR__ . '/data.php';
require_once __DIR__ . '/partials/header.php';
?>
<main class="page">
  <section class="section section-alt hero-simple">
    <div class="section-inner center">
      <h1 class="display-md">Galerija <span>Radova</span></h1>
      <p class="body-lg">
        Pogledajte primere naših radova na različitim markama i modelima vozila.
        Svaki projekat je izveden sa pažnjom i profesionalizmom.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="section-inner">
      <div class="gallery-grid">
        <?php foreach ($galleryItems as $item): ?>
          <button class="gallery-card" data-image="<?php echo $item['image']; ?>" data-title="<?php echo $item['car']; ?>" data-subtitle="<?php echo $item['service']; ?>">
            <img src="<?php echo $item['image']; ?>" alt="<?php echo $item['car']; ?>" />
            <div class="gallery-overlay">
              <h3><?php echo $item['car']; ?></h3>
              <p><?php echo $item['service']; ?></p>
            </div>
          </button>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <div class="lightbox" id="lightbox">
    <button class="lightbox-close" id="lightboxClose" aria-label="Zatvori">
      <i data-lucide="x"></i>
    </button>
    <div class="lightbox-content">
      <img id="lightboxImage" src="" alt="" />
      <div class="lightbox-meta">
        <h3 id="lightboxTitle"></h3>
        <p id="lightboxSubtitle"></p>
      </div>
    </div>
  </div>
</main>
<?php require_once __DIR__ . '/partials/footer.php'; ?>
