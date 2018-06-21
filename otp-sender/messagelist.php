<!DOCTYPE html>
<html class="no-js" lang="en">

<head>
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="css/bootstrap.css">
  <link rel="stylesheet" href="css/style.css">
  <title>SMS OTP Sender</title>
</head>

<body id="">
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "student";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM otp_sender order by time desc";
$result = $conn->query($sql);

echo "<h1 class='text-center'>Records</h1><br>
<div class='container'>
<a class='btn btn-primary' href='index.html'>Contact List</a><br><br>";

echo "<table class='table'>
        <tr><th>Name</th><th>OTP</th><th>TimeStamp</th></tr>
    ";

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["name"]. "</td><td>" . $row["otp"]. "</td><td>" . $row["time"]. "</td></tr>";
    }
    echo "</table></div>";
} else {
    echo "0 results";
}
$conn->close();
?>
  <script src="js/jquery.min.js"></script>
  <script src="js/popper.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
</body>
</html>

