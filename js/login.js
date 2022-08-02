window.onload=function(){
	////////// Modal ///////////
	var modal = document.getElementById("modal-log");
	var submitBtn = document.getElementById("submit");
	var loginBtn = document.getElementsByClassName("login-btn")[0];
	var modalContents = document.getElementsByClassName("modal-contents")[0];
	var signupLink = document.getElementById("signup-link");
	var saveModalContents = modalContents.innerHTML;
	var viewSignup = false;

	function openModal(){
		modal.style.display = "block";
		submitBtn.style.visibility = "visible";
	}



	// open modal on click
	loginBtn.onclick = function(){
		modal.style.display = "block";
		submitBtn.style.visibility = "visible";
	}
	// check params
	document.getElementById("login-form").onsubmit = function(){
		var error = "<?php echo global $login_err; ?>";
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
						var err = document.getElementById("pw-err");		// need to make the new signup button visible.
						err.textContent = "Wrong Username or Password";
						readdListeners();
					}
					if(xhr.status == 404){		// not found
						console.log('File or resource not found');					// TODO: probably redirect to 404 page later
					}
				}
			};
			// asynchronous
			xhr.open('GET','./php/login-modal.php', false);
			xhr.send();
		}
		// otherwise login successful, and just redirect in login.php
	}
	
	// change to signup modal 
	signupLink.onclick = function(){
		viewSignup = true;
		const xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				if(xhr.status == 200){											// request made successful
					//console.log(xhr.responseText);
					modalContents.innerHTML = xhr.responseText; 				// change current page to signup modal
					var submitSignup = document.getElementById("submit");		// need to make the new signup button visible.
					submitSignup.style.visibility = "visible";
				}
				if(xhr.status == 404){		// not found
					console.log('File or resource not found');					// TODO: probably redirect to 404 page later
				}
			}
		};
		// asynchronous
		xhr.open('GET','./php/signup.php', true);
		xhr.send();
	}
	

	// TODO: when user clicks an X close modal...
	function readdListeners(){
		console.log("adding events...");
		let newSubmitBtn = document.getElementById("submit");					// re-add all event listeners
		let newLoginBtn = document.getElementsByClassName("login-btn")[0];
		let newSignupLink = document.getElementById("signup-link");		
		newSubmitBtn.style.visibility = "visible";
		newLoginBtn.addEventListener("click",loginBtn.onclick, false);
		newSignupLink.addEventListener("click",signupLink.onclick, false);
		window.addEventListener("click",window.onclick, false)
	}

/*
	document.getElementById("x-button").onclick = window.onclick?
*/

	// click elsewhere on page
	window.onclick = function(event){
		var modal = document.getElementById("modal-log");
		if(event.target == modal){
			modal.style.display = "none";
			modalContents.innerHTML = saveModalContents;						// back to login page contents
			readdListeners();
			viewSignUp = false;
		}
	}

	//////// Image Selection ///////////
	if(viewSignup){
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
}