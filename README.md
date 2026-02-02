# CODEDOX.RS - PHP Website

This project is now a PHP + CSS implementation with the same pages and functionality as the original React version.

## Pages

- [index.php](index.php)
- [services.php](services.php)
- [gallery.php](gallery.php)
- [contact.php](contact.php)

## Structure

- [partials/header.php](partials/header.php)
- [partials/footer.php](partials/footer.php)
- [data.php](data.php)
- [config.php](config.php)
- [assets/css/theme.css](assets/css/theme.css)
- [assets/js/main.js](assets/js/main.js)

## Running locally

1) Make sure PHP is installed.
2) Start the built-in PHP server from the project root.
3) Open http://localhost:8000 in your browser.

## Contact form setup

Update reCAPTCHA keys and recipient email in [config.php](config.php). The contact form uses PHP `mail()`, so your server must have mail configured.
