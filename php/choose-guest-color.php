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
	<div id="holder">Guest, Choose Your Piece Color</div>
	<div id="board">

	</div>
	<div id="color-picker">
		<div class='color-square white' onclick="changeGuestColor(this)"></div>
		<div class='color-square purple' onclick="changeGuestColor(this)"></div>
		<div class='color-square weird-pink' onclick="changeGuestColor(this)"></div>
		<div class='color-square light-green' onclick="changeGuestColor(this)"></div>
	</div>
	<div class="btn-group">		
		<div class="create-boardBtn"><button id="done" onclick="setGuestColor()">DONE</button></div>
	</div>

	<script>
		var size = parseInt("<?php echo $_SESSION['board-size'] ?>");
		createBoard(size);
		var boardColor = "<?php echo $_SESSION['board-color'] ?>";
		//alert(boardColor);
		var playerColor = "<?php echo $_SESSION['player-color'] ?>";
		showPlayerColor(playerColor)
		changeTdColor(boardColor);
	</script>
</body>
</html>