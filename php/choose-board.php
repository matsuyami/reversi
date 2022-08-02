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
	<script type="text/javascript" src="../js/create-board.js"></script>

</head>
<body>
	<div id="holder">Choose Your Board Size</div>
	<!-- <div id="p1">Player 1</div> -->
	<!-- <div id="p2">Player 2</div> -->
	<div class="btn-group">
		<div class="create-boardBtn"><button onclick="createBoard(8)"> 8 x 8 </button></div>
		<div class="create-boardBtn"><button onclick="createBoard(6)"> 6 x 6 </button></div>
		<div class="create-boardBtn"><button onclick="createBoard(4)"> 4 x 4 </button></div>
	</div>
	<div id="board">

	</div>
	<div class="btn-group">
		<div class="create-boardBtn"><button id="done" onclick="getTableSize()">DONE</button></div>
	</div>
</body>
</html>



