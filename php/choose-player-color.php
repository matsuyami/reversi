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
	<div id="holder"><?php echo $_SESSION['uname']?>, Choose Your Piece Color</div>
	<div id="board">

	</div>
	<div id="color-picker">
		<div class='color-square white' onclick="changePlayerColor(this)"></div>
		<div class='color-square purple' onclick="changePlayerColor(this)"></div>
		<div class='color-square weird-pink' onclick="changePlayerColor(this)"></div>
		<div class='color-square light-green' onclick="changePlayerColor(this)"></div>
	</div>
	<div class="btn-group">		
		<div class="create-boardBtn"><button id="done" onclick="setPlayerColor()">DONE</button></div>
	</div>

	<script>
		var size = parseInt("<?php echo $_SESSION['board-size'] ?>");
		createBoard(size);
		var boardColor = "<?php echo $_SESSION['board-color'] ?>";
		//alert(boardColor);
		changeTdColor(boardColor);
	</script>
</body>
</html>