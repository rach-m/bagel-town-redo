<?php

// echo 'this is index.php'; exit;

if(isset($_POST['email'])) {



    // EDIT THE 2 LINES BELOW AS REQUIRED

    $email_to = "rachieb19@gmail.com";

    $email_subject = "Message from Website";





    function died($error) {

        // your error code can go here

        echo "We are very sorry, but there were error(s) found with the form you submitted. ";

        echo "These errors appear below.<br /><br />";

        echo $error."<br /><br />";

        echo "Please go back and fix these errors.<br /><br />";

        die();

    }



    // validation expected data exists

    if(!isset($_POST['fullname']) ||

        !isset($_POST['email']) ||

        !isset($_POST['subject']) ||

        !isset($_POST['message'])) {

        died('We are sorry, but there appears to be a problem with the form you submitted.');

    }



    $full_name = $_POST['fullname']; // required

    $email_from = $_POST['email']; // required

    $subject = $_POST['subject']; // not required

    $message = $_POST['message']; // required



    $error_message = "";

    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

  if(!preg_match($email_exp,$email_from)) {

    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';

  }

    $string_exp = "/^[A-Za-z .'-]+$/";

  if(!preg_match($string_exp,$full_name)) {

    $error_message .= 'The Name you entered does not appear to be valid.<br />';

  }


  if(strlen($message) < 2) {

    $error_message .= 'The message you entered do not appear to be valid.<br />';

  }

  if(strlen($error_message) > 0) {

    died($error_message);

  }

    $email_message = "Form details below.\n\n";



    function clean_string($string) {

      $bad = array("content-type","bcc:","to:","cc:","href");

      return str_replace($bad,"",$string);

    }



    $email_message .= "Name: ".clean_string($full_name)."\n";

    $email_message .= "Email: ".clean_string($email_from)."\n";

    $email_message .= "Subject: ".clean_string($subject)."\n";

    $email_message .= "Message: ".clean_string($message)."\n";





// create email headers

$headers = 'From: '.$email_from."\r\n".

'Reply-To: '.$email_from."\r\n" .

'X-Mailer: PHP/' . phpversion();

$mail = mail($email_to, $email_subject, $email_message, $headers);


if (!$mail){
  echo ("error");
  exit;
}
else {

echo $mail;
?>



<!-- include your own success html here -->


<center>
<br><br>
Thank you for getting in touch! We will respond as quickly as possible to all inquiries.
<br><br>
<a href="http://localhost:3000/">Go back to our website</a>
</center>

<?php

}
}

?>