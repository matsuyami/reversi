<?php session_start(); ?>
<script>
	
	function checkAvailability(formElem){
		var name = formElem.attr('name');
		var val = formElem.val();
		var dataSent = name+'='+val;
		$.ajax({
          url:'validation.php',
          data:dataSent,
          dataType:'html',
          type: "POST",
          success:function(data){
          	if(name == 'uname'){
	          	$('#user-taken').replaceWith(data);
	            $('#user-taken').css('color', 'red');
	            $('#user-taken').css('font-family', 'Open Sans,sans-serif');
            }
            if(name == 'age'){
            	$('#age-err').replaceWith(data);
	            $('#age-err').css('color', 'red');
	            $('#age-err').css('font-family', 'Open Sans,sans-serif');
            }
            if(name == 'upass'){
                $('#password-err').replaceWith(data);
	            $('#password-err').css('color', 'red');
	            $('#password-err').css('font-family', 'Open Sans,sans-serif');
            }
          }
        });
	}

	function saveImage(img){
		var form = new FormData();
		var imgFile = img.files[0]
		if(imgFile){
			form.append('uimg', imgFile);
			console.log(form);
			console.log(imgFile);
		}

		$.ajax({
			url: 'upload-image.php',
			data: form,
			processData: false,
			contentType: false,
			type: "POST",
			success: function(data){
				console.log(data);
			}
		});
		//var name = formElem.attr('name');
		//var val = formElem.val();
		//console.log(val);
	}

	// change preview image
    function changeImg(inputImg){
        var reader;
        var userImg = document.getElementById("preview");
        if(inputImg.files && inputImg.files[0]){
            reader = new FileReader();
            reader.onload = function(e){
                userImg.setAttribute("src", e.target.result);
                //console.log(userImg.getAttribute('src'));
            }
            reader.readAsDataURL(inputImg.files[0]);
        }
        saveImage(inputImg);
    }

</script>
<form enctype="multipart/form-data" action="insert.php" method="post" class="signup-pane">
	<div class="form-group img-content">
		<img src="../img/blank-user.png" id="preview"/><br>
		<input type="file" id="select-img " name="uimg" onchange="changeImg(this)"/>
	</div>
	<hr class="line-separator">
	<div class="form-group">
		<input type="text" class="text-input" id='signup-fname' name="fname" placeholder="First Name" required>
		<input type="text" class="text-input" id='signup-lname' name="lname" placeholder="Last Name" required>
	</div>
	<div class="form-group">
		<input type="text" class="text-input" id='signup-uname' name="uname" placeholder="Username" onblur="checkAvailability($(this))" required>
		<input type="password" class="text-input" id='signup-upass' name="upass" placeholder="Password" onblur="checkAvailability($(this))" required>
		<span id='user-taken'></span>
		<span id='password-err'></span>
	</div>
	<div class="form-group">
		<input type="text" class="text-input" id='signup-age' name="age" placeholder="Age" onblur="checkAvailability($(this))" required>
		<select class="textbox-input" id='signup-gender' name="gender">
			<option>Male</option>
			<option>Female</option>
		</select>
		<span id='age-err'></span>
	</div>
	<div class="submit-btn-wrapper signup-pane-btn">
		<button type="submit" class="submit-btn">Sign Up</button>
	</div>
</form>