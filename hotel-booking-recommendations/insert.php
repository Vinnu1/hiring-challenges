<?php
$name = $_POST['name'];
$score = $_POST['score'];
$type = $_POST['type'];
if(isset($name) && isset($score) && isset($type)){
    //db
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "student";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    if($type == "default"){
        $query = "select `visit`, `book`, `draft` from `hotels` where `name`='$name'";
        $result = $conn->query($query);
        $row = $result->fetch_assoc();
        echo "Visits: ".$row['visit']." Drafts: ".$row['draft']." Bookings: ".$row['book'];
    }
    else{
    $query = "select `$type`, `score` from `hotels` where `name`='$name'";
    $result = $conn->query($query);
    $row = $result->fetch_assoc();
    $count = $row[$type] + 1;
    $newscore = $row['score'] + $score;

    $update = "update hotels set `$type` = $count, `score`= $newscore where `name`='$name'";
    if ($conn->query($update) === TRUE) {
        echo "Updated Record in Database.";
    } else {
        echo "Error: " . $update . "<br>" . $conn->error;
    }
    $conn->close();
}
}
else{
    echo "Error, parameters not found.";
    exit();
}
?>