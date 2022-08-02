<?php session_start() ?>
<link rel="stylesheet" type="text/css" href="css/signup.css"/>
<script type="text/javascript" src="js/signup.js"></script>


			<form action="" method="post" role="form" id="signup-form">
				<div>
					<img src="img/blank-user.png" id="preview"/>
					<input type="file" id="select-img" name="uimg"/>
				</div>
				<div>
					<input type="text" class="textbox" id="uname" name="uname" placeholder="Username" required/>
				</div>
					<div id="user-taken"></div>
				<div>
					<input type="text" class="textbox" id="fname" name="fname" placeholder="First Name" required/>
				</div>
				<div>
					<input type="text" class="textbox" id="lname" name="lname" placeholder="Last Name" required/>
				</div>
				<div>
					<input type="password" class="textbox" id="upass"
					name="upass" placeholder="Password" required/>	
				</div>
				<div>
					<input type="text" class="textbox" id="age"
					name="age" placeholder="Age" required/>	
				</div>
				<div>
					<select class="textbox" id="gender"
					name="gender">
						<option>Male</option>
						<option>Female</option>
					</select>
				</div>
				<div id ="submitDiv"> 
					<button type="submit" name="submit" id="submit">Submit</button>
				</div>
			</form>

<?php $user_taken = (!empty($_SESSION['taken'])) ? $_SESSION['taken'] : ''; 
	  $_SESSION['taken'] = "";
?>
<?php include 'insert.php'; ?>

	<!-- end of modal -->