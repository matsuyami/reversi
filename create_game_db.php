<!-- Setups up database -->
<?php
	session_start();
	include 'config.php';

	$conn = mysqli_connect($host, $user, $pass, $dbname);
	if(!$conn){
		die("Connection failed: " . mysqli_connect_error());
	}
	else{
		echo "connection complete!"; 
	}

	$sql = "CREATE TABLE Games( ".
		"username VARCHAR(50) NOT NULL, ".
		"board_type VARCHAR(3) NOT NULL, " . 
		"score INT NOT NULL, ". 
		"duration VARCHAR(150) NOT NULL, ".
		"dateStr VARCHAR(150) NOT NULL);";	

	if($conn->query($sql) == TRUE){
		echo "Table Games created successfully";
	}
	else{
		echo "error creating table: " . $conn->error;
	}
?>