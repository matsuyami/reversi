window.onload=function(){
	////////// Modal ///////////
	var modal = document.getElementById("modal-log");
	var submitBtn = document.getElementById("submit");
	var loginBtn = document.getElementsByClassName("login-btn")[0];
	//var span = document.getElementsByClassName("close")[0];
	
	// open modal on click
	loginBtn.onclick = function(){
		modal.style.display = "block";
		submitBtn.style.visibility = "visible";
	}

	// check params
	document.getElementById("signup-form").onsubmit = function(){
		//alert('test');
		var error = "<?php echo global $user_taken; ?>";
		if(error != ""){
			const xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4){
					if(xhr.status == 200){											// request made successful
					    var error = "<?php echo global $login_err; ?>";
					    var modalContainer = document.getElementById("modal-container");
					    modalContainer.innerHTML = xhr.responseText;
					    var modal = document.getElementById("modal-log");
						modal.style.display = "block";
						var err = document.getElementById("user-taken");		// need to make the new signup button visible.
						err.textContent = "Username taken";
						readdListeners();
					}
					if(xhr.status == 404){		// not found
						console.log('File or resource not found');					// TODO: probably redirect to 404 page later
					}
				}
			};
			// synchronous
			xhr.open('GET','./php/signup.php', false);
			xhr.send();
		}
		// otherwise login successful, and just redirect in login.php
	}

	// TODO: when user clicks an X close modal...

	// click elsewhere on page
	window.onclick = function(event){
		if(event.target == modal){
			modal.style.display = "none";
			submitBtn.style.visibility = "hidden";
		}
	}

	//////// Image Selection ///////////
	var selectImg = document.getElementById("select-img");
	var userImg = document.getElementById("preview");

	// user selects an image
	selectImg.addEventListener("change",function(){
		changeImg(this);
	});

	// change preview image
	function changeImg(inputImg){
		var reader;
		if(inputImg.files && inputImg.files[0]){
			reader = new FileReader();
			reader.onload = function(e){
				userImg.setAttribute("src", e.target.result);
			}
			reader.readAsDataURL(inputImg.files[0]);
		}
	}
}