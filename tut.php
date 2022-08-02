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
	<h1 class = "heading">Tutorial</h1>
	<div class = "container">
		<div class = "tutBG">
			<p class = "tutPar">Each reversi piece has a black side and a white side. On your turn, you place one piece on the board with your color facing up. You must place the piece so that an opponent's piece, or a row of opponent's pieces, is flanked by your pieces. All of the opponent's pieces between your pieces are then turned over to become your color. The objective of the game is to own more pieces than your opponent when the game is over. The game is over when neither player has a move. Usually, this means the board is full. You can capture vertical, horizontal, and diagonal rows of pieces. Also, you can capture more than one row at once. The game ends when one player makes their color dominant on the board.</p>
		</div>
	</div>
</body>
</html>