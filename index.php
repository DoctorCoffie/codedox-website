<?php
$pageTitle = 'CODEDOX.RS - Početna';
$currentPath = '/index.php';
require_once __DIR__ . '/data.php';
require_once __DIR__ . '/partials/header.php';
?>
<main class="page">
  <section class="hero">
    <div class="hero-bg hero-bg-top"></div>
    <div class="hero-bg hero-bg-bottom"></div>

    <div class="hero-inner">
      <div class="pill animate-fade-in">Profesionalni Softverski Servis</div>
      <h1 class="display-lg hero-title">
        Otključajte pravi<br />
        <span>potencijal vašeg vozila</span>
      </h1>
      <p class="body-lg hero-subtitle">
        Specijalizovani servis za chiptuning, kodiranje i softverske usluge automobila.
        Povećajte performanse, aktivirajte skrivene funkcije i optimizujte vozilo.
      </p>

      <div class="hero-actions">
        <a href="/services.php" class="btn-red">Pogledaj Usluge <i data-lucide="arrow-right"></i></a>
        <a href="/contact.php" class="btn-outline">Zakaži Termin</a>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <i data-lucide="zap"></i>
          <div class="stat-value">1-2h</div>
          <div class="stat-label">Brza Usluga</div>
        </div>
        <div class="stat-card">
          <i data-lucide="shield"></i>
          <div class="stat-value">100%</div>
          <div class="stat-label">Garancija</div>
        </div>
        <div class="stat-card">
          <i data-lucide="award"></i>
          <div class="stat-value">5+ god</div>
          <div class="stat-label">Iskustvo</div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="section-inner">
      <div class="section-heading">
        <h2 class="display-md">Naše <span>Usluge</span></h2>
        <p class="body-lg">Profesionalne softverske usluge za sve marke vozila</p>
      </div>

      <div class="card-grid">
        <?php foreach (array_slice($services, 0, 3) as $service): ?>
          <div class="card">
            <div class="icon-box">
              <i data-lucide="trending-up"></i>
            </div>
            <h3 class="h3"><?php echo $service['title']; ?></h3>
            <p class="body-md"><?php echo $service['description']; ?></p>
            <a href="/services.php" class="link-red">
              Saznaj više <i data-lucide="arrow-right"></i>
            </a>
          </div>
        <?php endforeach; ?>
      </div>

      <div class="center">
        <a href="/services.php" class="btn-red">Sve Usluge <i data-lucide="arrow-right"></i></a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="cta-bg"></div>
    <div class="section-inner center">
      <h2 class="display-md">Spremni za Upgrade?</h2>
      <p class="body-lg">
        Kontaktirajte nas danas i zakažite termin za analizu vašeg vozila.
        Naš stručni tim je tu da vam pomogne.
      </p>
      <a href="/contact.php" class="btn-red glow-effect">Zakažite Termin <i data-lucide="arrow-right"></i></a>
    </div>
  </section>
</main>
<?php require_once __DIR__ . '/partials/footer.php'; ?>
