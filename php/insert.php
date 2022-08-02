<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){	
	include '../config.php';
	if( !empty($_POST['uname']) &&
		!empty($_POST['fname']) &&
		!empty($_POST['lname']) &&
		!empty($_POST['upass']) &&
		!empty($_POST['age'])   &&				// checks if post is empty
		!empty($_POST['gender'])){

		if($conn->connect_error){
			die("Connection failed" . $conn->connect_error);		// if a failure occurs
		}

		$username = $_POST['uname'];								// variables for post
		$fname 	  = $_POST['fname'];
		$lname    = $_POST['lname'];
		$upass    = $_POST['upass'];
		$age      = $_POST['age'];
		$gender   = ($_POST['gender'] == "Male") ? 1 : 0;			// 1 if male, 0 if female
        $img = (!empty($_SESSION['playerImg'])) ? $_SESSION['playerImg'] : '../img/blank-user.png';    // grab session variable if its set, otherwise default.

        // Prepare an insert statement
        $sql = $insert = "INSERT INTO Players".
		"(image,username,fname,lname,age,password,gender)"."VALUES".
		"(?,?,?,?,?,?,?)";
         
        if($stmt = mysqli_prepare($conn, $sql)){
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "ssssisi", $param_img, $param_username, $param_fn, $param_ln, $param_age, $param_pw, $param_gender);
            
            // Set parameters
            $param_username = $username;
            $param_pw = password_hash($upass,PASSWORD_BCRYPT); // Creates a password hash
            $param_fn = $fname;
            $param_ln = $lname;
            $param_age = $age;
            $param_gender = $gender;
            $param_img = $img;
            
            // Attempt to execute the prepared statement
            if(mysqli_stmt_execute($stmt)){
                // Redirect to login page
                //session_start();
                $_SESSION['playerImg'] = $img;
                $_SESSION['uname'] = $username;
                header("location: ../title.php");
            } else{
                echo "Something went wrong. Please try again later.";
            }
             mysqli_stmt_close($stmt);
        }
		mysqli_close($conn);		
		exit();
	}
}
?>