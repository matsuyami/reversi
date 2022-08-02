<!-- Setups up database -->
<?php
	session_start();
	$host = 'remotemysql.com:3306';
	$user = 'FQBI4YCcSM';
	$pass = 'SsZouHpFil';
	$dbname = "FQBI4YCcSM";

	$conn = mysqli_connect($host, $user, $pass, $dbname);
	if(!$conn){
		die("Connection failed: " . mysqli_connect_error());
	}

	$sql = "CREATE TABLE Players( ".
		"username VARCHAR(50) NOT NULL, ". 
		"fname VARCHAR(150) NOT NULL,". 
		"lname VARCHAR(150) NOT NULL,". 
		"age TINYINT NOT NULL,". 
		"password VARCHAR(256) NOT NULL,".
		"gender BOOLEAN NOT NULL,".
		"image VARCHAR(128) NOT NULL,".
		"player_id INT NOT NULL AUTO_INCREMENT,". 
		"PRIMARY KEY (player_id)); ";	

	if($conn->query($sql) == TRUE){
		echo "Table Players created successfully";
	}
	else{
		echo "error creating table: " . $conn->error;
	}
?>