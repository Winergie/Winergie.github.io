<?php
if(isset($_POST['submit'])){
    $to = "jorrit.willaert@telenet.be"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = "Offerteaanvraag";
    $subject2 = "Kopie van uw offerteaanvraag";
    $message = $name . " stelde de volgende offerte op:" . "\n\n" . $_POST['address'];
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['address'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>
