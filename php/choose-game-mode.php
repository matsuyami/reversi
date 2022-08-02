<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title></title>
	<link rel="stylesheet" type="text/css" href="../css/game.css">
	<script src="https://code.jquery.com/jquery-3.4.1.min.js"
  			integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  			crossorigin="anonymous">
  	</script>
	<script type="text/javascript" src="../js/create-board.js?v=1.1"></script>
	<link rel="stylesheet" type="text/css" href="../css/choose-color.css">
</head>
<body>
	<div id="holder">Choose Your Game Mode</div>
	<div class="btn-group">		
		<div class="create-boardBtn"><button class="mode-buttons" id="done" style="display: block" onclick="setGameMode(this)">AI</button></div>
	</div>

	<div class="btn-group">
		<div class="create-boardBtn"><button class="mode-buttons" id="done" style="display: block" onclick="setGameMode(this)">Local PvP</button></div>
	</div>

	<script>
		
	</script>
</body>
</html>