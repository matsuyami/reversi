<?php
	// TODO: Encryption/Decryption
if($_SERVER["REQUEST_METHOD"] == "POST"){
	//var_dump($_POST);
	$host = 'remotemysql.com:3306';
	$user = 'FQBI4YCcSM';
	$pass = 'SsZouHpFil';
	$dbname = "FQBI4YCcSM";

	$conn = mysqli_connect($host, $user, $pass, $dbname);

	if( !empty($_POST['uname']) &&
		!empty($_POST['upass'])){
	if(!$conn){
		die("Connection failed: " . mysqli_connect_error());
	}


	$username = trim($_POST["uname"]);
	$password = trim($_POST["upass"]);
	mysqli_select_db($conn, $dbname) or die(mysqli_error($conn));;			// select as default db or return error
	// get this username / password
	$retrieve = "SELECT image, username, password from Players WHERE username=?";
	if($stmt = mysqli_prepare($conn, $retrieve)){
		mysqli_stmt_bind_param($stmt, "s", $username);
		// begin execution of statement
		if(mysqli_stmt_execute($stmt)){
			mysqli_stmt_store_result($stmt);
			if(mysqli_stmt_num_rows($stmt) == 1){
				// bind result to variables
				mysqli_stmt_bind_result($stmt, $img, $username, $hashed_password);
				if(mysqli_stmt_fetch($stmt)){
					// verify password
					if(password_verify($password,$hashed_password)){
						session_start();
						$_SESSION['playerImg'] = $img;
						$_SESSION['uname'] = $username;						
					}
					else{
						echo "false";
					}
				}
			}
			else{
				echo "false";
			}
		}
	}

	mysqli_stmt_close($stmt);
	mysqli_close($conn);
	exit();
	}
}
?>