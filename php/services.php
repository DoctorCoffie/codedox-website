<?php
$pageTitle = 'CODEDOX.RS - Usluge';
$currentPath = '/php/services.php';
require_once __DIR__ . '/data.php';
require_once __DIR__ . '/partials/header.php';
?>
<main class="page">
  <section class="section section-alt hero-simple">
    <div class="hero-soft"></div>
    <div class="section-inner center">
      <h1 class="display-md">Naše <span>Usluge</span></h1>
      <p class="body-lg">
        Specijalizovani softverski servis za sve marke automobila.
        Profesionalna oprema i dugogodišnje iskustvo garantuju kvalitet.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="section-inner">
      <div class="card-grid large">
        <?php foreach ($services as $service): ?>
          <div class="card service-card">
            <div class="icon-box">
              <i data-lucide="<?php echo $service['icon']; ?>"></i>
            </div>
            <h3 class="h2"><?php echo $service['title']; ?></h3>
            <p class="body-md grow"><?php echo $service['description']; ?></p>
            <div class="feature-list">
              <?php foreach ($service['features'] as $feature): ?>
                <div class="feature-item">
                  <span class="feature-dot"><i data-lucide="check"></i></span>
                  <span><?php echo $feature; ?></span>
                </div>
              <?php endforeach; ?>
            </div>
            <div class="price-pill">
              <span>Kontaktirajte nas</span>
            </div>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="section-inner">
      <h2 class="display-md center">Zašto Odabrati <span>CODEDOX.rs</span>?</h2>
      <div class="card-grid medium">
        <?php
          $reasons = [
            ['title' => 'Profesionalna Oprema', 'description' => 'Koristimo najnoviju dijagnostičku i tuning opremu za sve marke vozila.'],
            ['title' => 'Iskusni Tim', 'description' => 'Naš tim ima više od 5 godina iskustva u softverskim uslugama automobila.'],
            ['title' => 'Garancija Kvaliteta', 'description' => 'Pružamo garanciju na sve izvršene usluge i stojimo iza našeg rada.'],
            ['title' => 'Brza Usluga', 'description' => 'Većina usluga se obavlja u roku od 1-2 sata.']
          ];
        ?>
        <?php foreach ($reasons as $reason): ?>
          <div class="card">
            <h3 class="h3"><?php echo $reason['title']; ?></h3>
            <p class="body-md"><?php echo $reason['description']; ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>
</main>
<?php require_once __DIR__ . '/partials/footer.php'; ?>
