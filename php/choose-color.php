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
	<link rel="stylesheet" type="text/css" href="../css/choose-color.css">
</head>
<body>
	<div id="holder">Choose Your Board Color</div>
	<div id="board">

	</div>
	<div id="color-picker">
		<div class='color-square green' onclick="pickColor(this)"></div>
		<div class='color-square light-salmon' onclick="pickColor(this)"></div>
		<div class='color-square light-seagreen' onclick="pickColor(this)"></div>
		<div class='color-square light-skyblue' onclick="pickColor(this)"></div>
	</div>
	<div class="btn-group">		
		<div class="create-boardBtn"><button id="done" onclick="setTableColor()">DONE</button></div>
	</div>

	<script>
		var size = parseInt("<?php echo $_SESSION['board-size'] ?>");
		createBoard(size);
	</script>
</body>
</html>