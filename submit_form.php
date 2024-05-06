<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // E-posta alıcı adresi
    $to = "alici@example.com";
    
    // Formdan gelen e-posta adresini al
    $email = $_POST['email'];

    // E-posta başlık ve içeriği
    $subject = "Yeni Abonelik";
    $message = "Yeni bir abonelik talebi:\n\nE-posta: " . $email;

    // E-posta başlığı
    $headers = "From: webmaster@example.com" . "\r\n" .
               "Reply-To: webmaster@example.com" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // E-postayı gönder
    if (mail($to, $subject, $message, $headers)) {
        echo "Teşekkürler, aboneliğiniz alındı.";
    } else {
        echo "E-posta gönderme başarısız oldu.";
    }
}
?>
