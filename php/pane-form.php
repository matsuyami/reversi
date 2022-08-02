<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="../css/pane-form.css">
	<script src="https://code.jquery.com/jquery-3.4.1.min.js"
  			integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  			crossorigin="anonymous">
  	</script>
  	<script src="../js/pane-form.js"></script>
</head>
<body>
	<div class="tabbed-pane-container">
		<div class="tabbed-pane">
				<div class="tabbed-pane-tabs">
					<button class="button-tab tab-btn-nofocus signup-tab-btn" type="button"> Sign Up </button>
					<button class="button-tab tab-btn-focus signin-tab-btn" type="button"> Sign In </button>
				</div>
				<div class="tabbed-pane-content">
				<div class="form-div">
					<?php include "login-pane.php"; ?>
				</div>
			</div>
		</div>
	</div>
</body>

</html>