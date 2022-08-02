<?php session_start() ?> 
<!DOCTYPE html>
<html>
<head>
	<title>Reversi Tutorial</title>
	<link rel="stylesheet" type="text/css" href="css/DevTut.css"/>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/lettering.js/0.7.0/jquery.lettering.min.js"></script>
	<script type="text/javascript" src="js/anim.js"></script>

</head>
<body>
	<?php include "php/header.php"; ?>
	<div id = "home" onclick="window.open('title.php', '_self')">&larr;Title Page</div>
	<h1 class = "heading">The Developers</h1>
	<div class = "container">
		<div class = "devBG">
			<h3 class = "devName">Isaac Caro</h3>
			<p class = "devPar">Isaac is a senior studying Computer Science at Fresno State. He has worked on projects such as a Maze Game where he used shortest path algorithms to design an enemy AI for his CSCI 115 project. He has also worked on a Big Data Analysis project where he analyzed Twitter data and reported how users felt about particular companies. His favorite language is JavaScript and hopes to pursue web or mobile development as a Software Engineer. For this project he contructed the UI using Javascript and CSS as well as the leaderboard page using Javascript, PHP and MySQL.</p>
		</div>
		<div class = "devBG">
			<h3 class = "devName">Naji Rhodes</h3>
			<p class = "devPar">Naji is a senior studying Computer Science at Fresno State. He has worked on projects including: 3D Model Loader for the wavefront file format using OpenGL, Bomber Plane Simulations, Electricity usage predictions using Linear Regression and MATLAB, as well as using the A* Algorithm to help
			pawns capture the kings. His favorite languages include C++ and Python and hopes to become a Graphics Programmer or Web Developer in the near future. For this
			project he designed the login page, as well as the transitions between board creation, and the player database.<br>
			Technologies Used: JQuery, Javascript, PHP, and MySQL.</p>
		</div>
		<div class = "devBG">
			<h3 class = "devName">Luis Lopez</h3>
			<p class = "devPar">Luis is a senior studying Computer Science at Fresno State. He has worked on projects which includes 
			Shortest path algorithm for a maze game, Using C++ and Python for creating Basic chatting application using sockets, Using 
			openGL and SOIL for player creatation and interaction with game world to develop a game for game dev called RogueLike
			</p>
		</div>
	</div>
</body>
</html>