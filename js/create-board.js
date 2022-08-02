function createBoard(num) {  
	//deletes everything inside div to create game board
	document.getElementById("board").innerHTML = "";

	//creates div node to edit, table body node and table node
  	let myTable = document.getElementById("board"); 
  	let table = document.createElement('TABLE');
  	let tableBody = document.createElement('TBODY');
    //let thebutton = document.createElement('BUTTON');
  	table.appendChild(tableBody);

	row=num+1;
	col=num;

    for (let i=0; i<row; i++){// creates a tr first this part handles whether or not to make letter row or number col
       let tr = document.createElement('TR');
       var myString = 'abcdefgh';//adding +1 to get next letter
       
       if (i == 0){//if first tr then add letter row in a for loop
              for(let g = 0; g < row; g++){
              	let th = document.createElement('TH');
              	if(g != 0){//if not first cell then make that letter row after first cell
              		tr.appendChild(th);
              		tr.lastChild.innerHTML = myString.charAt(g-1);
              	}else{//keep first cell blank for that letter row
              		tr.appendChild(th);
              	}
              }
          }else {//otherwise add the number of current row next to col
           	let th = document.createElement('TH');
           	th.innerHTML = i;
           	tr.appendChild(th);
          }

       tableBody.appendChild(tr);
      
       if(i != 0){
	       for (let j=0; j<col; j++){ //for loop adding td and span to every tr
	            var mynumstring1 = '012345678';
              var mychar = 'abcdefgh';      
	            let td = document.createElement('TD');
	            let span = document.createElement('SPAN');

              let num = mynumstring1.charAt(i);
              let a = mychar.charAt(j);

              let astring = "'";
              let thestring = '"isIllegalMove('.concat(astring);
              let tempstring = astring.concat(')">');
              
              span.setAttribute('id',a.concat(num));//mynumstring.charAt(col)+mychar.charAt(row)

              span.innerHTML = '<button onclick ='.concat(thestring.concat(a.concat(num.concat(tempstring))));
              
	            
	            //checks where the mid spots are for white and adds class white to span aka white circle
	            if(((j == col/2 -1) && (i == (row-1)/2)) ||((j == col/2) && (i == (row-1)/2 + 1))){
	                span.setAttribute('class','span-circle white');
	                td.appendChild(span);

	            //checks where the mid spots are for black and adds class white to span
	            }else if(( (j == col/2) && (i == (row - 1)/2)) || ((j == col/2 - 1) && (i == (row-1)/2 +1))){
	                span.setAttribute('class','span-circle black');
	                td.appendChild(span);
	            }else{
	                span.setAttribute('class','span-circle');
	                td.appendChild(span);
	            }
	            td.setAttribute('class', 'cell');//all cells obtain class cell here
	            tr.appendChild(td);
	        }
        }
    }
    myTable.appendChild(table);
    var bd = document.getElementById("board");
    if(bd.innerHTML != ""){
      var doneBtn = document.getElementById('done').style.display = "block";
    }
}

// lets us store the table size as a session variable (its a string btw)
function getTableSize(){
  var name = "board-size";
  var val = (document.getElementsByTagName('tbody')[0].rows.length - 1);
  var dataSent = name+'='+val;
  $.ajax({
    url: 'update-board-size.php',
    data: dataSent,
    type: "POST",
    success:function(data){
      if(data != ""){
        //alert(data);
        location.assign("choose-game-mode.php");
      }
    }
  });
}

// pick a color square
function pickColor(palette){
  var paletteColor = getComputedStyle(palette, null).getPropertyValue("background-color");
  var tableCells = document.getElementsByTagName('td');
  for(i=0;i<tableCells.length;i++) {
     tableCells[i].style.backgroundColor = paletteColor;
   }
}

function changeTdColor(color){
  var tableCells = document.getElementsByTagName('td');
  for(var i=0;i<tableCells.length;i++) {
       tableCells[i].style.backgroundColor = color;
  }
}

function changePlayerColor(playerSpan){
  var playerColor = getComputedStyle(playerSpan, null).getPropertyValue("background-color");  // gets correct color
  var playerCells = document.getElementsByClassName('span-circle white');
  for(var i = 0; i < playerCells.length; i++){    
    playerCells[i].style.backgroundColor = playerColor; 
  }
}

// show the guest what the other player's color is
function showPlayerColor(color){
  var playerCells = document.getElementsByClassName('span-circle white');
  for(var i = 0; i < playerCells.length; i++){    
    playerCells[i].style.backgroundColor = playerColor; 
  }
}

function setPlayerColor(palette){
  var name = "player-color";
  var paletteColor = document.getElementsByClassName('white')[0].style.backgroundColor;
  //alert(paletteColor);
  var dataSent = name+'='+paletteColor;
  $.ajax({
    url: 'update-player-color.php',
    data: dataSent,
    type: "POST",
    success:function(data){
      if(data != ""){
        // data returned is the game mode
        //alert(data);
        if(data == "Local PvP")
          location.assign("choose-guest-color.php");
        if(data == "AI"){
          location.assign("../game.php")
        }
      }
    }
  });
}

function changeGuestColor(guestSpan){
  var guestColor = getComputedStyle(guestSpan, null).getPropertyValue("background-color");  // gets correct color
  var guestCells = document.getElementsByClassName('span-circle black');
  for(var i = 0; i < guestCells.length; i++){    
    guestCells[i].style.backgroundColor = guestColor; 
  }
}

function setGuestColor(){
  var name = "guest-color";
  var paletteColor = document.getElementsByClassName('black')[0].style.backgroundColor;
  var dataSent = name+'='+paletteColor;
  $.ajax({
    url: 'update-guest-color.php',
    data: dataSent,
    type: "POST",
    success:function(data){
      if(data != ""){
        //alert(data);
        location.assign("../game.php");
      }
    }
  });
}

function setGameMode(btn){
  var name = "game-mode";
  var dataSent = name+'='+btn.textContent;
  $.ajax({
    url: 'update-game-mode.php',
    data: dataSent,
    type: "POST",
    success:function(data){
      if(data != ""){
        //alert(data);
        location.assign("choose-color.php");
      }
    }
  });
}

// lets us store the table color as a session variable (its a string btw)
function setTableColor(){
  var name = "board-color";
  var val = document.getElementsByTagName('td')[0].style.backgroundColor;
  var dataSent = name+'='+val;
  $.ajax({
    url: 'update-board-color.php',
    data: dataSent,
    type: "POST",
    success:function(data){
      if(data != ""){
        //alert(data);
        location.assign("choose-player-color.php");
      }
    }
  });
}