<?php
$pageTitle = 'CODEDOX.RS - Kontakt';
$currentPath = '/php/contact.php';
require_once __DIR__ . '/data.php';
$config = require __DIR__ . '/config.php';
require_once __DIR__ . '/partials/header.php';

$status = isset($_GET['status']) ? $_GET['status'] : '';
?>
<main class="page">
  <section class="section section-alt hero-simple">
    <div class="section-inner center">
      <h1 class="display-md">Kontaktirajte <span>Nas</span></h1>
      <p class="body-lg">
        Imate pitanja ili želite da zakažete termin? Popunite formu ili nas pozovite direktno.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="section-inner">
      <div class="contact-grid">
        <div>
          <h2 class="h1">Pošaljite Upit</h2>

          <?php if ($status === 'success'): ?>
            <div class="success-card">
              <div class="success-icon"><i data-lucide="send"></i></div>
              <h3 class="h2">Poruka poslata!</h3>
              <p class="body-md">Kontaktiraćemo vas uskoro.</p>
            </div>
          <?php elseif ($status === 'error'): ?>
            <div class="error-card">
              <h3 class="h3">Greška pri slanju</h3>
              <p class="body-md">Došlo je do greške pri slanju. Pokušajte ponovo.</p>
            </div>
          <?php endif; ?>

          <form class="contact-form" method="post" action="/php/contact-handler.php">
            <div>
              <label for="name">Ime i Prezime *</label>
              <input id="name" name="name" type="text" class="input-field" placeholder="Vaše ime" required />
            </div>

            <div class="form-row">
              <div>
                <label for="email">Email *</label>
                <input id="email" name="email" type="email" class="input-field" placeholder="vas@email.com" required />
              </div>
              <div>
                <label for="phone">Telefon *</label>
                <input id="phone" name="phone" type="tel" class="input-field" placeholder="069/123-4567" required />
              </div>
            </div>

            <div>
              <label for="car">Marka i Model Vozila</label>
              <input id="car" name="car" type="text" class="input-field" placeholder="npr. BMW 520d 2019" />
            </div>

            <div>
              <label for="service">Tip Usluge</label>
              <select id="service" name="service" class="input-field">
                <option value="">Izaberite uslugu</option>
                <option value="maps">Ažuriranje Mapa</option>
                <option value="unlock">Otključavanje Opcija</option>
                <option value="chiptuning">Chiptuning</option>
                <option value="egr-dpf">EGR / DPF / AdBlue OFF</option>
                <option value="diagnostics">Dijagnostika</option>
                <option value="other">Ostalo</option>
              </select>
            </div>

            <div>
              <label for="message">Poruka</label>
              <textarea id="message" name="message" class="input-field" placeholder="Dodatne informacije..."></textarea>
            </div>

            <div class="recaptcha">
              <div class="g-recaptcha" data-sitekey="<?php echo htmlspecialchars($config['recaptchaSiteKey'], ENT_QUOTES, 'UTF-8'); ?>"></div>
            </div>

            <button type="submit" class="btn-red">
              Pošalji Upit <i data-lucide="send"></i>
            </button>
          </form>
        </div>

        <div>
          <h2 class="h1">Kontakt Informacije</h2>

          <div class="info-list">
            <a href="tel:<?php echo $contactInfo['phone']; ?>" class="contact-card">
              <span class="contact-icon"><i data-lucide="phone"></i></span>
              <div>
                <div class="muted">Pozovite nas</div>
                <div class="strong"><?php echo $contactInfo['phone']; ?></div>
              </div>
            </a>

            <a href="<?php echo $contactInfo['instagramUrl']; ?>" target="_blank" rel="noopener noreferrer" class="contact-card">
              <span class="contact-icon"><i data-lucide="instagram"></i></span>
              <div>
                <div class="muted">Pratite nas</div>
                <div class="strong"><?php echo $contactInfo['instagram']; ?></div>
              </div>
            </a>

            <div class="contact-card">
              <span class="contact-icon"><i data-lucide="clock"></i></span>
              <div>
                <div class="muted">Radno vreme</div>
                <div class="strong"><?php echo $contactInfo['workingHours']; ?></div>
              </div>
            </div>
          </div>

          <h3 class="h2">Instagram Feed</h3>
          <div class="insta-grid">
            <?php foreach ($instagramPosts as $post): ?>
              <a href="<?php echo $contactInfo['instagramUrl']; ?>" target="_blank" rel="noopener noreferrer" class="insta-card">
                <img src="<?php echo $post['image']; ?>" alt="<?php echo $post['caption']; ?>" />
                <div class="insta-overlay"><i data-lucide="instagram"></i></div>
              </a>
            <?php endforeach; ?>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<?php require_once __DIR__ . '/partials/footer.php'; ?>
