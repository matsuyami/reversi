function getByBoardType(btype, ord){
	$.ajax({ url: 'php/get_lb.php',
         	data: {board_t: btype, ord: ord},
         	type: 'post',
         	success: function(output) {
                      	var table = document.getElementById('content');
                      	table.innerHTML= output;
         }
	});
}

function cycleBoard(flags, ordFlag){
	if (flags.eight){
		getByBoardType('4x4', 'ASC');
		flags.four = true;
		flags.eight = false;
		ordFlag.order = 'ASC';
	}
	else if (flags.four){
		getByBoardType('6x6', 'ASC');
		flags.four = false;
		flags.six = true;
		ordFlag.order = 'ASC';
	}
	else{
		getByBoardType('8x8', 'ASC');
		flags.six = false;
		flags.eight = true;
		ordFlag.order = 'ASC';
	}
}

function cycleScore(flags, ordFlag){
	if(flags.four && ordFlag.order == 'ASC'){
		getByBoardType('4x4', 'DESC');
		ordFlag.order = 'DESC';
	}
	else if(flags.six && ordFlag.order == 'ASC'){
		getByBoardType('6x6', 'DESC');
		ordFlag.order = 'DESC';
	}
	else if (flags.eight && ordFlag.order == 'ASC'){
		getByBoardType('8x8', 'DESC');
		ordFlag.order = 'DESC';
	}
	else if(flags.four && ordFlag.order == 'DESC'){
		getByBoardType('4x4', 'ASC');
		ordFlag.order = 'ASC';
	}
	else if(flags.six && ordFlag.order == 'DESC'){
		getByBoardType('6x6', 'ASC');
		ordFlag.order = 'ASC';
	}
	else if (flags.eight && ordFlag.order == 'DESC'){
		getByBoardType('8x8', 'ASC');
		ordFlag.order = 'ASC';
	}
}