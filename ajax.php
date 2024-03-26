<?php
if(isset($_POST) && !empty($_POST)){
    $full_name = (isset($_POST['full_name'])) ? $_POST['full_name'] : '';
    $first_name = (isset($_POST['first_name'])) ? $_POST['first_name'] : '';
    $last_name = (isset($_POST['last_name'])) ? $_POST['last_name'] : '';
    $email = (isset($_POST['email'])) ? $_POST['email'] : '';
    $subject = (isset($_POST['subject'])) ? $_POST['subject'] : '';
    $message = (isset($_POST['message'])) ? $_POST['message'] : '';
    
    if($full_name == ''){
        $full_name =  $first_name.' '.$last_name;
    }
    
    $sendMessage = $mailSubject = '';
    if($_POST['form_type'] == 'contact'){
        $mailSubject = $subject;
        $sendMessage = "<p>Hello,</p><p>".$full_name." has sent a message with " .$subject. " as the <strong>subject</strong> from <strong>email</strong>: ".$email.", and a <strong>message</strong> that reads: </p>" . "<p>".$message."</p>";
        
        // Send response to the sender
        $responseSubject = 'Thank you for your message';
        $responseMessage = "Dear $first_name,<br><br>Thank you for reaching out to me. I have received your message regarding \"$subject\" and I will get back to you as soon as possible.<br><br>Best regards,<br><a href='https://portfolio.ibaifernandez.com' target='_blank'>~Ibai Fernández</a>";

        $responseHeaders = "MIME-Version: 1.0" . "\r\n";
        $responseHeaders .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $responseHeaders .= "From: <info@ibaifernandez.com>" . "\r\n";

        mail($email, $responseSubject, $responseMessage, $responseHeaders);
    }
    
    if($sendMessage != ''){
        $fromEmail = 'info@ibaifernandez.com';
        $toEmail = 'info@ibaifernandez.com';
        
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: <$fromEmail>" . "\r\n";
        $headers .= "Reply-To: $email" . "\r\n";

        if(mail($toEmail , $mailSubject , $sendMessage , $headers )){
            echo 1;
        } else {
            echo 0;
        }
    } else {
        echo 0;
    }
} else {
    echo 0;
}
?>
