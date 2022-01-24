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

	$mail->Subject = 'Wniosek online ze strony www.silverfinanse.pl';

	$body = '<h1>Wniosek online ze strony www.silverfinanse.pl</h1>';

	$body.= '<h2>Przedmiot kontaktu</h2>';

	if(trim(!empty($_POST['product']))){
		$body.='<p><strong>Typ produktu:</strong> '.$_POST['product'].'</p>';
	}
	if(trim(!empty($_POST['product5']))){
		$body.='<p><strong>Wnioskowana kwota:</strong> '.$_POST['product5'].'</p>';
	}
	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Imię:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['surname']))){
		$body.='<p><strong>Nazwisko:</strong> '.$_POST['surname'].'</p>';
	}
	if(trim(!empty($_POST['age']))){
		$body.='<p><strong>Wiek:</strong> '.$_POST['age'].'</p>';
	}
	if(trim(!empty($_POST['city']))){
		$body.='<p><strong>Miejscowość:</strong> '.$_POST['city'].'</p>';
	}
	if(trim(!empty($_POST['married']))){
		$body.='<p><strong>Stan cywilny:</strong> '.$_POST['married'].'</p>';
	}
	if(trim(!empty($_POST['consent']))){
		$body.='<p><strong>Zgoda małżonka:</strong> '.$_POST['consent'].'</p>';
	}

	$body.= '<h2>Dane kontaktowe</h2>';

	if(trim(!empty($_POST['phone']))){
		$body.='<p><strong>Telefon:</strong> '.$_POST['phone'].'</p>';
	}
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
	}
	if(trim(!empty($_POST['preferred']))){
		$body.='<p><strong>Preferowana godzina kontaktu:</strong> '.$_POST['preferred'].'</p>';
	}

	$body.= '<h2>Dochód</h2>';

	if(trim(!empty($_POST['source']))){
		$body.='<p><strong>Źródło dochodu:</strong> '.$_POST['source'].'</p>';
	}
	if(trim(!empty($_POST['date']))){
		$body.='<p><strong>Data zatrudnienia (DD-MM-RRRR):</strong> '.$_POST['date'].'</p>';
	}
	if(trim(!empty($_POST['period']))){
		$body.='<p><strong>Umowa na czas nieokreślony / określony (DD-MM-RRRR):</strong> '.$_POST['period'].'</p>';
	}
	if(trim(!empty($_POST['account']))){
		$body.='<p><strong>Wynagrodzenie wpływa na konto bankowe:</strong> '.$_POST['account'].'</p>';
	}
	if(trim(!empty($_POST['salary']))){
		$body.='<p><strong>Wysokość miesięcznego dochodu (netto):</strong> '.$_POST['salary'].'</p>';
	}
	if(trim(!empty($_POST['bailiff']))){
		$body.='<p><strong>Zajęcie komornicze /	pożyczka zakładowa:</strong> '.$_POST['bailiff'].'</p>';
	}
	if(trim(!empty($_POST['arrear1']))){
		$body.='<p><strong>Zaległości w Urzędzie Skarbowym (dotyczy JDG):</strong> '.$_POST['arrear1'].'</p>';
	}
	if(trim(!empty($_POST['arrear2']))){
		$body.='<p><strong>Zaległości w ZUS-ie (dotyczy JDG):</strong> '.$_POST['arrear2'].'</p>';
	}

	$body.= '<h2>Historia kredytowa</h2>';
	
	if(trim(!empty($_POST['sum1']))){
		$body.='<p><strong>Suma miesięcznych rat kredytów w bankach i SKOK-ach:</strong> '.$_POST['sum1'].'</p>';
	}
	if(trim(!empty($_POST['sum2']))){
		$body.='<p><strong>Suma miesięcznych rat pozabankowych:</strong> '.$_POST['sum2'].'</p>';
	}
	if(trim(!empty($_POST['contract']))){
		$body.='<p><strong>Wypowiedziane umowy kredytowe:</strong> '.$_POST['contract'].'</p>';
	}
	if(trim(!empty($_POST['delay1']))){
		$body.='<p><strong>Bieżące opóźnienie w spłacie:</strong> '.$_POST['delay1'].'</p>';
	}
	if(trim(!empty($_POST['delay2']))){
		$body.='<p><strong>Historyczne opóźnienie w spłacie:</strong> '.$_POST['delay2'].'</p>';
	}

	$body.= '<h2>Składane wnioski w ciągu ostatnich 3 miesięcy</h2>';

	if(trim(!empty($_POST['bank1']))){
		$body.='<p><strong>Bank:</strong> '.$_POST['bank1'].'</p>';
	}
	if(trim(!empty($_POST['bank2']))){
		$body.='<p><strong>Bank:</strong> '.$_POST['bank2'].'</p>';
	}
	if(trim(!empty($_POST['bank3']))){
		$body.='<p><strong>Bank:</strong> '.$_POST['bank3'].'</p>';
	}
	if(trim(!empty($_POST['bank4']))){
		$body.='<p><strong>Bank:</strong> '.$_POST['bank4'].'</p>';
	}
	if(trim(!empty($_POST['bank5']))){
		$body.='<p><strong>Bank:</strong> '.$_POST['bank5'].'</p>';
	}
	if(trim(!empty($_POST['bank6']))){
		$body.='<p><strong>Bank:</strong> '.$_POST['bank6'].'</p>';
	}
	if(trim(!empty($_POST['bank7']))){
		$body.='<p><strong>Bank:</strong> '.$_POST['bank7'].'</p>';
	}
	if(trim(!empty($_POST['bank8']))){
		$body.='<p><strong>Bank:</strong> '.$_POST['bank8'].'</p>';
	}
	if(trim(!empty($_POST['bank9']))){
		$body.='<p><strong>Bank:</strong> '.$_POST['bank9'].'</p>';
	}
	if(trim(!empty($_POST['bank10']))){
		$body.='<p><strong>Bank:</strong> '.$_POST['bank10'].'</p>';
	}
	if(trim(!empty($_POST['bank11']))){
		$body.='<p><strong>Bank:</strong> '.$_POST['bank11'].'</p>';
	}
	if(trim(!empty($_POST['bank12']))){
		$body.='<p><strong>Bank:</strong> '.$_POST['bank12'].'</p>';
	}
	if(trim(!empty($_POST['bank13']))){
		$body.='<p><strong>Bank:</strong> '.$_POST['bank13'].'</p>';
	}
	if(trim(!empty($_POST['bank14']))){
		$body.='<p><strong>Bank:</strong> '.$_POST['bank14'].'</p>';
	}
	if(trim(!empty($_POST['bank15']))){
		$body.='<p><strong>Bank:</strong> '.$_POST['bank15'].'</p>';
	}
	if(trim(!empty($_POST['bank16']))){
		$body.='<p><strong>Bank:</strong> '.$_POST['bank16'].'</p>';
	}
	if(trim(!empty($_POST['bank17']))){
		$body.='<p><strong>Bank:</strong> '.$_POST['bank17'].'</p>';
	}
	if(trim(!empty($_POST['bank18']))){
		$body.='<p><strong>Bank:</strong> '.$_POST['bank18'].'</p>';
	}
	if(trim(!empty($_POST['bank19']))){
		$body.='<p><strong>Bank:</strong> '.$_POST['bank19'].'</p>';
	}
	if(trim(!empty($_POST['bank20']))){
		$body.='<p><strong>Bank:</strong> '.$_POST['bank20'].'</p>';
	}
	if(trim(!empty($_POST['app__message']))){
		$body.='<p><strong>Uwagi/komentarz:</strong> '.$_POST['app__message'].'</p>';
	}

	$body.= '<h2>Zgody</h2>';
	
	if(trim(!empty($_POST['agreement1']))){
		$body.='<p><strong>Zgoda:</strong> '.$_POST['agreement1'].'</p>';
	}
	if(trim(!empty($_POST['agreement2']))){
		$body.='<p><strong>Zgoda:</strong> '.$_POST['agreement1'].'</p>';
	}

	
	$mail->Body = $body;

	if (!$mail->send()) {
		$message = 'Wystąpił jakiś błąd! Odśwież stronę i spróbuj jeszcze raz...';
	} else {
		$message = 'Twój wniosek został wysłany! Spodziewaj się telefonu o podanej godzinie.';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>