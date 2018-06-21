<?php
$name = $_POST['name'];
$otp = $_POST['otp'];
$msg = $_POST['msg'];
$number = $_POST['number'];

//checking parameters
if(isset($otp) && isset($msg) && isset($number) && isset($name)){
    
    require('Twilio/autoload.php');
    $sid = "your_sid"; // Your Account SID from www.twilio.com/console
    $token = "your_token"; // Your Auth Token from www.twilio.com/console

    $sms = "Hi, your OTP is: ".$otp.". ".$msg;
    $client = new Twilio\Rest\Client($sid, $token);
    $message = $client->messages->create(
        $number, // Text this number
        array(
            'from' => 'your_twilio_number', // From a valid Twilio number
            'body' => $sms
        )
    );
    echo "Message Sent.";
    $time = date("Y-m-d h:i:sa", time());
    
    //db connect
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "student"; //your db name

    $conn = new mysqli($servername, $username, $password, $dbname);
    //check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    $sql = "INSERT INTO `otp_sender`(`otp`, `name`, `time`) VALUES ($otp,'$name','$time')";

    if ($conn->query($sql) === TRUE) {
        echo "\nRecorded in Database.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();
}
else{
    echo "Error, parameters not found.";
    exit();
}
?>