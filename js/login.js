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

	// TODO: when user submits close modal....
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