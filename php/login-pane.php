<form method="POST" id="login-form">
	<div class="form-group img-content">
		<img src="../img/blank-user.png" id="preview"/><br>
	</div>
	<hr class="line-separator">
	<div class="form-group">
		<input type="text" class="text-input" id="signin-uname" name="uname" placeholder="Username" required>
		<input type="password" class="text-input" id="signin-upass" name="upass" placeholder="Password" required>

	</div>
	<div id='signin-error'></div>
	<div class="submit-btn-wrapper">
		<button type="submit" class="submit-btn">Sign In</button>
	</div>
</form>

<script>
	$('#login-form').submit(function(e){
		e.preventDefault();
		$.ajax({
		  url:'login.php',
		  data:{uname:$('#signin-uname').val(), upass:$('#signin-upass').val()},
		  dataType:'html',
		  type: "POST",
		 }).done(function(data) {
		 	// bad login
		  	if(data == "false"){
		  		$('#signin-error').replaceWith("<div id='signin-error'>Wrong Username or Password</div>");		    
			    $('#signin-error').css('color', 'red');
			    $('#signin-error').css('font-family', 'Open Sans,sans-serif');
			    $('input#signin-uname, input#signin-upass').addClass("apply-shake");
		  	}
		  	else{
		  		$(this).submit();
		  		location.assign("../title.php");
		  	}
		  	});
	});

	$(document).ready(function(){
	    $('body').on('animationend','input#signin-uname, input#signin-upass', function(){
	        $('input#signin-uname, input#signin-upass').removeClass("apply-shake");
	    });

	});
</script>