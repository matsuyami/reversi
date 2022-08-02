<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){	
	include '../config.php';
	if( !empty($_POST['uname']) &&
		!empty($_POST['board_type']) &&
		!empty($_POST['score']) &&
		!empty($_POST['duration']) &&
		!empty($_POST['dateStr'])){

		if($conn->connect_error){
			die("Connection failed" . $conn->connect_error);		// if a failure occurs
		}

		$username = $_POST['uname'];						// variables for post
		$b_type   = $_POST['board_type'];
		$score    = $_POST['score'];
		$duration = $_POST['duration'];
		$dateStr   = $_POST['dateStr'];
        // Prepare an insert statement
        $sql = $insert = "INSERT INTO Games".
		"(username,board_type,score,duration,dateStr)"."VALUES".
		"(?,?,?,?,?)";
         
        if($stmt = mysqli_prepare($conn, $sql)){
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "ssiss", $param_username, $param_bType, $param_score, $param_dur, $param_dateStr);
            
            // Set parameters
            $param_username = $username;
            $param_bType = $b_type;
            $param_score = $score;
            $param_dur = $duration;
            $param_dateStr = $dateStr;
            
            // Attempt to execute the prepared statement
            if(mysqli_stmt_execute($stmt)){
                echo 'Your score has been added to the leaderboard!';
            } else{
                echo "Something went wrong recording your score. Please try again later.";
            }
             mysqli_stmt_close($stmt);
        }
		mysqli_close($conn);		
		exit();
	}
}
?>