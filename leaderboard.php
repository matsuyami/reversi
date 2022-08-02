<?php session_start(); ?> 
<!DOCTYPE html>
<html>
<head>
	<title>Reversi Leaderboard</title>
	<link rel="stylesheet" type="text/css" href="css/DevTut.css"/>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/lettering.js/0.7.0/jquery.lettering.min.js"></script>
	<script type="text/javascript" src="js/anim.js"></script>
	<script type="text/javascript" src= pop_lb.js></script>
	<script type="text/javascript" src= pop_lb.js></script>
	<style type="text/css">
		.button:hover{
		color: yellow;
		cursor: pointer;
}</style>
</head>
<body>
	<?php include "php/header.php";
	?>
	<div id = "home" onclick="window.open('title.php', '_self')">&larr;Title Page</div>
	<h1 class = "heading">Leaderboard</h1>
	<div class = "container">
		<div class = "lbBG">
				<div class = "pad">
					<table class = "lbTable" id = "content" >
						<script>
						var flags = {four: true, six: false, eight: false};
						var ordFlag = {order: 'ASC'};
						getByBoardType('4x4','ASC');
						</script>
					</div>
				</table>
			</div>
		</div>
	</div>
</body>
</html>
