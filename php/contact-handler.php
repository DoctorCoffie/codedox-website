<?php
$config = require __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /php/contact.php');
    exit;
}

function clean_value($value) {
    return trim(str_replace(["\r", "\n"], ' ', $value));
}

$name = isset($_POST['name']) ? clean_value($_POST['name']) : '';
$email = isset($_POST['email']) ? clean_value($_POST['email']) : '';
$phone = isset($_POST['phone']) ? clean_value($_POST['phone']) : '';
$car = isset($_POST['car']) ? clean_value($_POST['car']) : '';
$service = isset($_POST['service']) ? clean_value($_POST['service']) : '';
$message = isset($_POST['message']) ? clean_value($_POST['message']) : '';
$captchaToken = isset($_POST['g-recaptcha-response']) ? $_POST['g-recaptcha-response'] : '';

if ($name === '' || $email === '' || $phone === '') {
    header('Location: /php/contact.php?status=error');
    exit;
}

if ($config['recaptchaSecret'] === 'YOUR_RECAPTCHA_SECRET' || $config['recaptchaSiteKey'] === 'YOUR_RECAPTCHA_SITE_KEY') {
    header('Location: /php/contact.php?status=error');
    exit;
}

$verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';
$verifyResponse = file_get_contents($verifyUrl . '?secret=' . urlencode($config['recaptchaSecret']) . '&response=' . urlencode($captchaToken));
$captchaResult = $verifyResponse ? json_decode($verifyResponse, true) : null;

if (!$captchaResult || empty($captchaResult['success'])) {
    header('Location: /php/contact.php?status=error');
    exit;
}

$recipient = $config['contactRecipient'];
$subject = 'Novi upit sa sajta CODEDOX.RS';
$body = "Ime i Prezime: {$name}\n" .
        "Email: {$email}\n" .
        "Telefon: {$phone}\n" .
        "Vozilo: {$car}\n" .
        "Usluga: {$service}\n\n" .
        "Poruka:\n{$message}\n";

$headers = [
    'From: ' . $config['fromName'] . ' <' . $config['fromEmail'] . '>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8'
];

$sent = mail($recipient, $subject, $body, implode("\r\n", $headers));

if ($sent) {
    header('Location: /php/contact.php?status=success');
    exit;
}

header('Location: /php/contact.php?status=error');
exit;
