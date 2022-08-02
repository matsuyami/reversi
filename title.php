<?php 
	session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<title>Welcome to Reversi</title>
	<link rel="stylesheet" type="text/css" href="css/title.css">
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/lettering.js/0.7.0/jquery.lettering.min.js"></script>
	<script type="text/javascript" src="js/title.js"></script>
</head>
<body>
	<!-- <span id="player-name"> -->
		<?php include "php/header.php"; ?>
	<!-- </span> -->
	<!-- game title container -->
	<div id = "container">
		<h1>
			<span class = "title" id = "supertitle">Welcome to...</span><br>
			<span class = "title">Reversi</span>
			<br>
			<br> 
			<br>  
		</h1>
		<div id = "navigation">
			<p>
				<?php
					// if session variable is set, play button else login
					$btnType = !empty($_SESSION['uname']) ? "Play" : "Login";
					$link = ($btnType == "Play") ? 'php/choose-board.php' : 'php/pane-form.php';
					echo "<span class = 'navButton login-btn' onclick=window.open('{$link}','_self') id ='start'>{$btnType}</span>";
			 	?> <br>
				<span class = "navButton" onclick="window.open('tut.php', '_self')">Tutorial</span><br>
				<span class = "navButton" onclick="window.open('devs.php', '_self')">Developers</span>
				<span class = "navButton" onclick="window.open('leaderboard.php', '_self')">Leaderboard</span>
				<?php 
					$logoutL = ($btnType == "Play") ? "Logout" : "";
					echo "<span class = 'navButton login-btn' onclick=window.open('logout.php','_self') id ='start'>{$logoutL}</span>";
				?>
			</p>
		</div>
	</div>
</html>