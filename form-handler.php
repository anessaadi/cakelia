<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = 'subject';
$message = $_POST['message'];

$email_from = 'info@yourwebsite.com';
$email_subject = 'New Form Submission';
$email_body = "User name: $name.\n".
                "User email: $visitor_email.\n".
                "User subject: $subject.\n".
                "User message: $message.\n".

$to = 'mohammedanessaadi@gmail.com';

$header = "From: $email_from \r\n";

$header .= "Reply-To: $email_from \r\n";
         

mail($to, $email_subject, $email_body, $header);

header("Location: contact.html")
?>