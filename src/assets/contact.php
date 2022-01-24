<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('pl', 'phpmailer/language/');
	$mail->IsHTML(true);

	$mail->setFrom($_POST['email']);

	$mail->addAddress('kontakt@silverfinanse.pl');

	$mail->Subject = 'Wiadomość ze strony www.silverfinanse.pl';
	
	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Imię i nazwisko:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['phone']))){
		$body.='<p><strong>Telefon:</strong> '.$_POST['phone'].'</p>';
	}
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
	}
	if(trim(!empty($_POST['message']))){
		$body.='<p><strong>Wiadomość:</strong> '.$_POST['message'].'</p>';
	}
	if(trim(!empty($_POST['accept1']))){
		$body.='<p><strong>Zgoda:</strong> '.$_POST['accept1'].'</p>';
	}
	if(trim(!empty($_POST['accept2']))){
		$body.='<p><strong>Zgoda:</strong> '.$_POST['accept2'].'</p>';
	}
	if(trim(!empty($_POST['accept3']))){
		$body.='<p><strong>Zgoda:</strong> '.$_POST['accept3'].'</p>';
	}

	$mail->Body = $body;

	if (!$mail->send()) {
		$message = 'Wystąpił jakiś błąd! Odśwież stronę i spróbuj jeszcze raz...';
	} else {
		$message = 'Twoja wiadomość została wysłana!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>