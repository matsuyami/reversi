<?php 
	session_start();
	// handle image processing 
	if(!empty($_FILES['uimg'])){
		//echo "Image Uploaded <br>";
		$uploadLocation = '../img/' . basename($_FILES['uimg']['name']);
		
		do{
			echo "File Already Exists...>";
			// this is the easy solution, till we approach the max.
			$uploadLocation = '../img/' . strval(rand(0,100000000)) . '.jpg';
			echo $uploadLocation . '<br>';
		} while (file_exists($uploadLocation));

		if(move_uploaded_file($_FILES['uimg']['tmp_name'], $uploadLocation)){
			echo "Valid File :D";
			$_SESSION['playerImg'] = $uploadLocation;
		}
	}
		//print_r($_FILES);
?>