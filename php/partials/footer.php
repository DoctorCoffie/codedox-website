<?php require_once __DIR__ . '/../data.php'; ?>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">
            <span class="brand-badge">CD</span>
            <span class="brand-text">CODEDOX<span>.rs</span></span>
          </div>
          <p class="footer-text">
            Specijalizovani servis za softverske usluge i tuning automobila. Vaš partner za sve elektronske izmene vozila.
          </p>
          <div class="social-row">
            <a href="<?php echo $contactInfo['instagramUrl']; ?>" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Instagram">
              <i data-lucide="instagram"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 class="footer-title">Brzi Linkovi</h3>
          <div class="footer-links">
            <a href="/php/index.php">Početna</a>
            <a href="/php/services.php">Usluge</a>
            <a href="/php/gallery.php">Galerija</a>
            <a href="/php/contact.php">Kontakt</a>
          </div>
        </div>

        <div>
          <h3 class="footer-title">Kontakt</h3>
          <div class="footer-contact">
            <div class="contact-item">
              <i data-lucide="phone"></i>
              <a href="tel:<?php echo $contactInfo['phone']; ?>"><?php echo $contactInfo['phone']; ?></a>
            </div>
            <div class="contact-item">
              <i data-lucide="instagram"></i>
              <a href="<?php echo $contactInfo['instagramUrl']; ?>" target="_blank" rel="noopener noreferrer"><?php echo $contactInfo['instagram']; ?></a>
            </div>
            <div class="contact-item">
              <i data-lucide="map-pin"></i>
              <span><?php echo $contactInfo['address']; ?></span>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        © 2025 CODEDOX.RS - Sva prava zadržana
      </div>
    </div>
  </footer>

  <script src="https://unpkg.com/lucide@latest"></script>
  <script src="/php/assets/js/main.js"></script>
</body>
</html>
