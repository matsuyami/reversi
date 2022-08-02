<link rel="stylesheet" type="text/css" href="css/login.css"/>
<script type="text/javascript" src="js/login.js"></script>
<div id="modal-container">
	<div id="modal-log" class="modal">
		<div class="modal-contents">
			<div class="form-shadow">
			<form action="" method="post" role="form" id="login-form">
				<div>
					<img src="img/blank-user.png" id="preview"/>
				</div>
				<div>
					<input type="text" class="textbox" id="uname" name="uname" placeholder="Username" required/>
				</div>
				<div>
					<input type="password" class="textbox" id="upass"
					name="upass" placeholder="Password" required/>	
				</div>
					<div id="pw-err">
						
					</div>
				<div id ="submitDiv"> 
					<button type="submit" name="submit" id="submit">Submit</button>
				</div>
				<div id="signup">Don't have an account? <span id="signup-link">Sign up now</span></div>
			</form>
		</div>
		</div>
	</div>
</div>
<?php $login_err = (!empty($_SESSION['login-err'])) ? $_SESSION['login-err'] : ''; 
	  $_SESSION['login-err'] = "";
?>
<?php include 'login.php'; ?>



<!-- if user clicks this link  -->
<!-- Open the new modal instead of this. -->