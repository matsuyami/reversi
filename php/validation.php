<?php

if($_SERVER["REQUEST_METHOD"] == "POST"){
	include '../config.php';
	// form will not submit unless all conditions are satisfied.

	if(!empty($_POST['age'])){
		$age = trim($_POST['age']);
		// check if all digits in age
		if(ctype_digit($age)){
			$_SESSION['ageValid'] = TRUE;
			echo "<span id='age-err'></span>";								// need to reset since we are replacing original
			if(!empty($_SESSION['passValid']) && !empty($_SESSION['usernameValid']) &&
			    $_SESSION['passValid'] && $_SESSION['usernameValid'])				// if one of these values aren't good, don't renable submit
				echo "<script>$('.submit-btn').prop('disabled',false);</script>";
		}
		else{
			$_SESSION['ageValid'] = FALSE;
			echo "<span id='age-err'>Age must be a number</span>";
            echo "<script>$('.submit-btn').prop('disabled',true);</script>";
		}
	}

	if(!empty($_POST['upass'])){
		$password = trim($_POST['upass']);
		if(strlen($password) > 6){
			$_SESSION['passValid'] = TRUE;
			echo "<span id='password-err'></span>";								// need to reset since we are replacing original
			if(!empty($_SESSION['usernameValid']) && !empty($_SESSION['ageValid']) &&
				$_SESSION['usernameValid'] && $_SESSION['ageValid'])
				echo "<script>$('.submit-btn').prop('disabled',false);</script>";
		}
		else{
			$_SESSION['passValid'] = FALSE;
			echo "<span id='password-err'>Password must be longer than 6 characters</span>";
            echo "<script>$('.submit-btn').prop('disabled',true);</script>";
		}
	}

	if(!empty($_POST['uname'])){
		$username = $_POST['uname'];
		if(empty(trim($_POST["uname"]))){
        $username_err = "Please enter a username.";
        echo $username_err;
	    } else{
	        // Prepare a select statement
	        $sql = "SELECT * FROM `Players` WHERE `username`=?";
	        if($stmt = mysqli_prepare($conn, $sql)){
	            // Bind variables to the prepared statement as parameters
	            mysqli_stmt_bind_param($stmt, "s", $param_username);       
	            // Set parameters
	            $param_username = trim($_POST["uname"]);          
	            // Attempt to execute the prepared statement
	            if(mysqli_stmt_execute($stmt)){
	                /* store result */
	                mysqli_stmt_store_result($stmt);   
	                if(mysqli_stmt_num_rows($stmt) > 0){
	                	$_SESSION['usernameValid'] = FALSE;
	                    $username_err = "<span id='user-taken'>This username is already taken.</span>";
	                    echo $username_err;
	                    echo "<script>$('.submit-btn').prop('disabled',true);</script>";
	                    $_SESSION['username-err'] = $username_err;
	                } else{
	                	$_SESSION['usernameValid'] = TRUE;
	                	echo "<span id='user-taken'></span>";
	                	if(!empty($_SESSION['ageValid']) && !empty($_SESSION['passValid']) 
	                		&& $_SESSION['ageValid'] && $_SESSION['passValid'])
	                		echo "<script>$('.submit-btn').prop('disabled',false);</script>";
	                    $username = trim($_POST["uname"]);
	                }
	            }
	        }
	        // Close statement
	        mysqli_stmt_close($stmt);
	    }
	}
}
?>