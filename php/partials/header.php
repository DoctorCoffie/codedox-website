<?php
if (!isset($pageTitle)) {
    $pageTitle = 'CODEDOX.RS';
}
if (!isset($currentPath)) {
    $currentPath = '';
}
$navLinks = [
    ['name' => 'Početna', 'path' => '/php/index.php'],
    ['name' => 'Usluge', 'path' => '/php/services.php'],
    ['name' => 'Galerija', 'path' => '/php/gallery.php'],
    ['name' => 'Kontakt', 'path' => '/php/contact.php']
];
?>
<!DOCTYPE html>
<html lang="sr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title><?php echo htmlspecialchars($pageTitle, ENT_QUOTES, 'UTF-8'); ?></title>
  <link rel="stylesheet" href="/php/assets/css/theme.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
</head>
<body>
  <nav class="site-nav">
    <div class="nav-inner">
      <a href="/php/index.php" class="brand">
        <span class="brand-badge">CD</span>
        <span class="brand-text">CODEDOX<span>.RS</span></span>
      </a>

      <div class="nav-links" id="desktopNav">
        <?php foreach ($navLinks as $link): ?>
          <?php $active = $currentPath === $link['path']; ?>
          <a href="<?php echo $link['path']; ?>" class="nav-link <?php echo $active ? 'active' : ''; ?>">
            <?php echo $link['name']; ?>
          </a>
        <?php endforeach; ?>
      </div>

      <button class="mobile-toggle" id="mobileToggle" aria-label="Otvori meni">
        <i data-lucide="menu"></i>
      </button>
    </div>

    <div class="mobile-menu" id="mobileMenu">
      <?php foreach ($navLinks as $link): ?>
        <?php $active = $currentPath === $link['path']; ?>
        <a href="<?php echo $link['path']; ?>" class="mobile-link <?php echo $active ? 'active' : ''; ?>">
          <?php echo $link['name']; ?>
        </a>
      <?php endforeach; ?>
    </div>
  </nav>
