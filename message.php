<?php
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $where = htmlspecialchars($_POST['where']);
  $whom = htmlspecialchars($_POST['whom']);
  $message = htmlspecialchars($_POST['message']);
  if(!empty($email) && !empty($message)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      $vovab1544@gmail.com = "receiver_email_address";
      $subject = "From: $name <$email>";
      $body = "Name: $name\nEmail: $email\nPhone: $where\nWebsite: $whom\n\nMessage:\n$message\n\nRegards,\n$name";
      $sender = "From: $email";
      if(mail($receiver, $subject, $body, $sender)){
         echo "Your message has been sent";
      }else{
         echo "Sorry, failed to send your message!";
      }
    }else{
      echo "Enter a valid email address!";
    }
  }else{
    echo "Email and message field is required!";
  }
?>