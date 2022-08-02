function checkUsernameAvailability{
	$.ajax({
		url: "validation.php",
		data: "uname=soujen",
		type: "POST",
		success: function(data){
			$("#user-taken").text(data);
		}
	});
}

function valid(){
	return false;
}