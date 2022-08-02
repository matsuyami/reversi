<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title></title>
	<link rel="stylesheet" type="text/css" href="css/game.css">
	<script type="text/javascript" src="js/game.js?v=1.1"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js">
</script>
	<!-- <script type="createBoard" src="js/create-board.js"></script> -->
	<style type="text/css" id="thisstyle">
		.white{

		}
		.black{

		}
	</style>
</head>
<body>
	<div id="holder"></div>
	<div id="p1"></div>
	<div id="p2"></div>

	<div id="board">
		<script>
				var mode = "<?php echo $_SESSION['game-mode'] ?>";
				//alert(mode);
				if(mode == "Local PvP"){
					var guestColor = "<?php echo $_SESSION['guest-color'] ?>";
					changeColorTwo(guestColor);
					makePlayer();
				}
				else{
					makeComputer();
				}
				var size = parseInt("<?php echo $_SESSION['board-size'] ?>");
				var playerColor = "<?php echo $_SESSION['player-color'] ?>";
				var boardColor = "<?php echo $_SESSION['board-color'] ?>";
				setUserName("<?php echo $_SESSION['uname'] ?>");
				changeColorOne(playerColor);
				changeTdColor(boardColor);
				makeButtons(size);

		</script>
	</div>
</body>
</html>

