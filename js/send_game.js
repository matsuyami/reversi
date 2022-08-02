function postGame(user , board, scr, dur, dStr){
	$.ajax({ url: 'php/insert_game.php',
         	data: {uname: user, board_type: board, score: scr, duration: dur, dateStr: dStr},
         	type: 'post',
         	success: function(output) {
                      	console.log(output);
         }
	});
}
