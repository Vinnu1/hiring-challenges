<?php
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
    $query = "select `name` from `hotels` order by `score` desc limit 3";
    $result = $conn->query($query);
    while ($row = $result->fetch_assoc()){
        echo $row['name']."<br>";
    }    
?>