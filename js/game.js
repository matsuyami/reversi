var testing = 0;
var col = 0;
var row = 0;
var tempcell;
var blackflag = false;
var whiteflag = false;
var white =true;///////////////////if true then white turn else black turn
var mynumstring = '12345678';
var mychar = 'abcdefgh';
var countwhite = 2;        //once game ends use countwhite to keep track of score
var countblack = 2;        //once game ends use countblack to keep track of score
var checkcell = false;
var checkcount = 0;
var hinton = false;
var drawflag = false;
var startime;///////////////////////time
var endtime;
var myseconds;///////int
var myminutes;///////int
var myhours;///////int
var totaltime;//////////////////////////this is string form  xx:xx:xx
var uniquetime = true;

var uniqueDraw = false;
var playercolor = false;
var playerone = "white";
var playertwo = "black";
var theboard = "green";
var ending = ";} ";
var iscomputer = false; // if playing with computer then run makeComputer() else run makePlayer()   this is button choice
var thecomputer = false;
var theid = "";
var uniqueyour = true;
var uniqueyour1 = true;
var didgameend = false;
var boardStr;
var username;
var dbSent = false;

//getElementsByClassName
function setUserName(str){
  username = str;
}

function postGame(user , board, scr, dur, dStr){
  $.ajax({ url: 'php/insert_game.php',
          data: {uname: user, board_type: board, score: scr, duration: dur, dateStr: dStr},
          type: 'post',
          success: function(output) {
                        
         }
  });
}

function makeComputer(){
  iscomputer = true;
}
function makePlayer(){
  iscomputer = false;
}
function turnComputer(){
  var turns = document.getElementsByClassName('span-circle hint');
  thecomputer = false;
  
  var possibleturns = turns.length;
  var index = Math.round(Math.random() * possibleturns);
  console.log(possibleturns);
  console.log(index);
  if(index >= possibleturns){
    index = possibleturns - 1;
  }
  console.log(turns[index].id);
  theid = turns[index].id;
  hintClear();
  isIllegalMove(theid);

}

function changeTdColor(colorboard){
  var thestyleelement;
  theboard = colorboard;
  thestyleelement = document.getElementById('thisstyle');
  thestyleelement.innerHTML = ((".white{ background-color: ".concat(playerone.concat(ending))).concat(".black{ background-color: ".concat(playertwo.concat(ending)))).concat(".cell{ background-color: ".concat(theboard.concat(ending)));
}

function changeColorOne(thecolor){//color for player 1 and player 2
  var thestyleelement;
  playerone = thecolor;
  thestyleelement = document.getElementById('thisstyle');
  thestyleelement.innerHTML = ((".white{ background-color: ".concat(playerone.concat(ending))).concat(".black{ background-color: ".concat(playertwo.concat(ending)))).concat(".cell{ background-color: ".concat(theboard.concat(ending)));
}

function changeColorTwo(thecolor){//color for player 1 and player 2
  var thestyleelement;
  playertwo = thecolor;
  thestyleelement = document.getElementById('thisstyle');
  thestyleelement.innerHTML = ((".white{ background-color: ".concat(playerone.concat(ending))).concat(".black{ background-color: ".concat(playertwo.concat(ending)))).concat(".cell{ background-color: ".concat(theboard.concat(ending)));
}

function nextPlayer(){
  playercolor = !playercolor;
  if(playercolor){
    makeButtons();
  }
}

function makeButtons(board_size){
  document.getElementById("holder").innerHTML = username +', Choose Your Move';
  document.getElementById("p1").innerHTML = "";
  document.getElementById("p2").innerHTML = "";
  document.getElementById("board").innerHTML = "";
  createBoard(board_size);
  boardStr = board_size.toString() + 'x' + board_size.toString();
}

function createBoard(num) {
  //deletes everything inside div to create game board
  document.getElementById("board").innerHTML = "";

  //creates div node to edit, table body node and table node
    let myTable = document.getElementById("board"); 
    let table = document.createElement('TABLE');
    let tableBody = document.createElement('TBODY');
    let thebutton = document.createElement('BUTTON');
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

    let hintBtnDiv = document.createElement('DIV');
    let btnGroup = document.createElement('DIV')
    btnGroup.setAttribute('class', 'btn-group');
    hintBtnDiv.setAttribute('class', 'create-boardBtn');
    thebutton.setAttribute('class','touch');
    thebutton.setAttribute('onclick','giveHint()');
    thebutton.innerHTML = 'Hint';
    hintBtnDiv.appendChild(thebutton);
    btnGroup.appendChild(hintBtnDiv)
    myTable.appendChild(table);
    myTable.appendChild(btnGroup);
    starttime = new Date();
    checkTurn();
}


/*
    if (document.getElementById('myList').getAttribute('class') === 'Show') {
        document.getElementById('myList').setAttribute('class', 'Hide');
        document.getElementById('idMyLabel').textContent = document.getElementById('myList').getAttribute('class');
        document.getElementById('idMyLabel').setAttribute('class', 'smallBlue');
      
    } else {
        document.getElementById('myList').setAttribute('class', 'Show');
        document.getElementById('idMyLabel').textContent = document.getElementById('myList').getAttribute('class');
        document.getElementById('idMyLabel').setAttribute('class', 'bigRed');
  };
 */
function isIllegalMove(mycell){
  if(!didgameend){
    var mynumstring = '12345678';
    var mychar = 'abcdefgh';  
    var aindex = 0;
    var numindex = 0;
    var tempcell;
    var legal = false;
    var truelegal = false;
    uniqueyour = true;

    if(thecomputer){
      hintClear();
    }
    thestring = document.getElementById(mycell).getAttribute('class');
    while(mychar.charAt(aindex) != mycell.charAt(0)){
      aindex++;
    }
    while(mynumstring.charAt(numindex) != mycell.charAt(1)){
      numindex++;
    }

    if(thestring == "span-circle white"){
      
      console.log('on white circle');
    }else if(thestring == "span-circle black"){
      console.log('on back circle');
      
    }else{// if not on circle run this
        legal = north(aindex, numindex);
        if(legal){
          truelegal = true;
        }
        legal = south(aindex,numindex);
        if(legal){
          truelegal = true;
        }
        legal = west(aindex, numindex);
        if(legal){
          truelegal = true;
        }

        legal = east(aindex, numindex);
        if(legal){
          truelegal = true;
        }

        legal = upRight(aindex,numindex);
        if(legal){
          truelegal = true;
        }
        legal = upLeft(aindex,numindex);
        if(legal){
          truelegal = true;
        }
        legal = downRight(aindex,numindex);
        if(legal){
          truelegal = true;
        }
        legal = downLeft(aindex,numindex);
        if(legal){
          truelegal = true;
        }
      if(truelegal){
        if(checkcell){

        }else{
          if(white){
            document.getElementById(mycell).setAttribute('class', 'span-circle white');
            white = !white;
            countwhite++;
            if(!hinton){
              hinton = !hinton;
              checkTurn();
              hinton = !hinton;
              hintClear();
            }else {
              checkTurn();
            }
            console.log('white '.concat(countwhite));
            console.log('black '.concat(countblack));
            if(iscomputer){
              if(!hinton){
                hinton = !hinton;
                thecomputer = true;
                checkTurn();
                hinton = !hinton;
                hintClear();
              }else {
                thecomputer = true;
                checkTurn();
              }
              
            }
            
          }else{

            document.getElementById(mycell).setAttribute('class', 'span-circle black');
            white = !white;
            countblack++;
            if(!hinton){
              hinton = !hinton;
              checkTurn();
              hinton = !hinton;
              hintClear();
            }else {
              checkTurn();
            }
            console.log('white '.concat(countwhite));
            console.log('black '.concat(countblack));
          }
        }
        
      }else{
        console.log('illegal');
      }
    }
    if(countblack == 0 || countwhite == 0 || countwhite+countblack == col*col){
      gameEnd();
    }
  }

}
function gameEnd(){
  if(uniquetime){
    uniquetime = false;
    endtime = new Date();
    if((endtime.getSeconds() - starttime.getSeconds()) < 0){
      myseconds = 60 + endtime.getSeconds() - starttime.getSeconds();
    }else{
      myseconds = endtime.getSeconds() - starttime.getSeconds();
    }
    if((endtime.getMinutes() - starttime.getMinutes()) < 0){
      myminutes = 60 + endtime.getMinutes() - starttime.getMinutes();
    }else{
      myminutes = endtime.getMinutes() - starttime.getMinutes();
    }
    myhours = endtime.getHours() - starttime.getHours();
    totaltime = myhours+':'+myminutes+':'+myseconds;
  }

  console.log(totaltime);
  let winner;
  let winScore;
  winner = (countblack < countwhite)?(playerone+' wins with '.concat(countwhite)).concat(' pieces!'):(countblack==countwhite)?'Draw':(playertwo+' wins with '.concat(countblack)).concat(' pieces!');
  if (countblack<countwhite){
    winScore = countwhite;
  }
  else if(countwhite<countblack){
    winScore = countblack;
  } 
  if(uniqueyour){
    uniqueyour=false;
    // true draw false
    let winnerText = (countblack < countwhite) ? 1 : (countblack==countwhite) ? -1 : 0
    if(winnerText == 1)
      document.getElementById("holder").innerHTML = username +', WINS!';
    if(winnerText == -1)
      document.getElementById("holder").innerHTML = 'DRAW';
    if(iscomputer){
      if(winnerText == 0)
        document.getElementById("holder").innerHTML = 'AI WINS';
    }
    if(!iscomputer){
      if(winnerText == 0)
        document.getElementById("holder").innerHTML = 'GUEST WINS!';
    }
    //alert("game ended! ".concat(winner));

  }
  console.log(totaltime);
  console.log(winner);
  if (!dbSent){
    if (winner!='Draw' && winScore == countwhite) postGame(username,boardStr,winScore,totaltime,endtime.toLocaleDateString('en-US'));
    else if (winner!='Draw' && winScore == countblack) postGame('Guest',boardStr,winScore,totaltime,endtime.toLocaleDateString('en-US'));
    dbSent = true;
  }
  didgameend = true;

}
function north(aindex,nindex){
  var numindex = nindex;
  var achar = aindex;
  blackflag = false;
  whiteflag = false;


  while(true){
    if(numindex == 0){
      return false;
    }
    numindex--;
    tempcell = document.getElementById((mychar.charAt(achar)).concat(mynumstring.charAt(numindex))).getAttribute('class');
    if(tempcell == 'span-circle white'){
      if(white){
        if(blackflag){
          if(!checkcell){
            replaceCell(nindex,aindex,true,false,false,false,false,false,false,false);
          }
          
          return true;
        }else{
          return false;
        }
      }else{
        whiteflag = true;
      }
    }else if(tempcell == 'span-circle black'){
      if(white){
        blackflag = true;
      }else{
        if(whiteflag){
          if(!checkcell){
            replaceCell(nindex,aindex,true,false,false,false,false,false,false,false);
          }
          return true;
        }
        return false;
      }
      
    }else{
      return false;
    }
  }
  
}
function south(aindex,nindex){
  var numindex = nindex;
  var achar = aindex;
  blackflag = false;
  whiteflag = false; 


  while(true){
    if(numindex == col-1){
      return false;
    }
    numindex++;
    tempcell = document.getElementById((mychar.charAt(achar)).concat(mynumstring.charAt(numindex))).getAttribute('class');
    if(tempcell == 'span-circle white'){
      if(white){
        if(blackflag){
          if(!checkcell){
            replaceCell(nindex,aindex,false,true,false,false,false,false,false,false);
          }
          return true;
        }else{
          return false;
        }
      }else{
        whiteflag = true;
      }
    }else if(tempcell == 'span-circle black'){
      if(white){
        blackflag = true;
      }else{
        if(whiteflag){
          if(!checkcell){
            replaceCell(nindex,aindex,false,true,false,false,false,false,false,false);
          }
          return true;
        }
        return false;
      }
      
    }else{
      return false;
    }
  }

}
function west(aindex,nindex){
  var numindex = nindex;
  var achar = aindex;
  blackflag = false;
  whiteflag = false;


  while(true){
    if(achar == 0){
      return false;
    }
    achar--;
    tempcell = document.getElementById((mychar.charAt(achar)).concat(mynumstring.charAt(numindex))).getAttribute('class');
    if(tempcell == 'span-circle white'){
      if(white){
        if(blackflag){
          if(!checkcell){
            replaceCell(nindex,aindex,false,false,true,false,false,false,false,false);
          }
          
          return true;
        }else{
          return false;
        }
      }else{
        whiteflag = true;
      }
    }else if(tempcell == 'span-circle black'){
      if(white){
        blackflag = true;
      }else{
        if(whiteflag){
          if(!checkcell){
            replaceCell(nindex,aindex,false,false,true,false,false,false,false,false);
          }
          return true;
        }
        return false;
      }
      
    }else{
      return false;
    }
  }
}
function east(aindex,nindex){
  var numindex = nindex;
  var achar = aindex;
  blackflag = false;
  whiteflag = false;


  while(true){
    if(achar == col-1){
      return false;
    }
    achar++;
    tempcell = document.getElementById((mychar.charAt(achar)).concat(mynumstring.charAt(numindex))).getAttribute('class');
    if(tempcell == 'span-circle white'){
      if(white){
        if(blackflag){
          if(!checkcell){
            replaceCell(nindex,aindex,false,false,false,true,false,false,false,false);
          }
          
          return true;
        }else{
          return false;
        }
      }else{
        whiteflag = true;
      }
    }else if(tempcell == 'span-circle black'){
      if(white){
        blackflag = true;
      }else{
        if(whiteflag){
          if(!checkcell){
            replaceCell(nindex,aindex,false,false,false,true,false,false,false,false);
          }
          return true;
        }
        return false;
      }
      
    }else{
      return false;
    }
  }
}
function upRight(aindex,nindex){
  var numindex = nindex;
  var achar = aindex;
  blackflag = false;
  whiteflag = false;
  while(true){
    if(achar == col-1){
      return false;
    }
    if(numindex == 0){
      return false;
    }
    achar++;
    numindex--;
    tempcell = document.getElementById((mychar.charAt(achar)).concat(mynumstring.charAt(numindex))).getAttribute('class');
    if(tempcell == 'span-circle white'){
      if(white){
        if(blackflag){
          if(!checkcell){
            replaceCell(nindex,aindex,false,false,false,false,true,false,false,false);
          }
          
          return true;
        }else{
          return false;
        }
      }else{
        whiteflag = true;
      }
    }else if(tempcell == 'span-circle black'){
      if(white){
        blackflag = true;
      }else{
        if(whiteflag){
          if(!checkcell){
            replaceCell(nindex,aindex,false,false,false,false,true,false,false,false);
          }
          return true;
        }
        return false;
      }
      
    }else{
      return false;
    }
  }
}

function upLeft(aindex,nindex){
  var numindex = nindex;
  var achar = aindex;
  blackflag = false;
  whiteflag = false;

  while(true){
    if(achar == 0){
      return false;
    }
    if(numindex == 0){
      return false;
    }
    achar--;
    numindex--;
    tempcell = document.getElementById((mychar.charAt(achar)).concat(mynumstring.charAt(numindex))).getAttribute('class');
    if(tempcell == 'span-circle white'){
      if(white){
        if(blackflag){
          if(!checkcell){
            replaceCell(nindex,aindex,false,false,false,false,false,true,false,false);
          }
          
          return true;
        }else{
          return false;
        }
      }else{
        whiteflag = true;
      }
    }else if(tempcell == 'span-circle black'){
      if(white){
        blackflag = true;
      }else{
        if(whiteflag){
          if(!checkcell){
            replaceCell(nindex,aindex,false,false,false,false,false,true,false,false);
          }
          return true;
        }
        return false;
      }
      
    }else{
      return false;
    }
  }
}
function downRight(aindex,nindex){
  var numindex = nindex;
  var achar = aindex;
  blackflag = false;
  whiteflag = false;

  while(true){
    if(achar == col-1){
      return false;
    }
    if(numindex == col-1){
      return false;
    }
    achar++;
    numindex++;
    tempcell = document.getElementById((mychar.charAt(achar)).concat(mynumstring.charAt(numindex))).getAttribute('class');
    if(tempcell == 'span-circle white'){
      if(white){
        if(blackflag){
          if(!checkcell){
            replaceCell(nindex,aindex,false,false,false,false,false,false,true,false);
          }
          
          return true;
        }else{
          return false;
        }
      }else{
        whiteflag = true;
      }
    }else if(tempcell == 'span-circle black'){
      if(white){
        blackflag = true;
      }else{
        if(whiteflag){
          if(!checkcell){
            replaceCell(nindex,aindex,false,false,false,false,false,false,true,false);
          }
          return true;
        }
        return false;
      }
      
    }else{
      return false;
    }
  }
}
function downLeft(aindex,nindex){
  var numindex = nindex;
  var achar = aindex;
  blackflag = false;
  whiteflag = false;

  while(true){
    if(achar == 0){
      return false;
    }
    if(numindex == col-1){
      return false;
    }
    achar--;
    numindex++;
    tempcell = document.getElementById((mychar.charAt(achar)).concat(mynumstring.charAt(numindex))).getAttribute('class');
    if(tempcell == 'span-circle white'){
      if(white){
        if(blackflag){
          if(!checkcell){
            replaceCell(nindex,aindex,false,false,false,false,false,false,false,true);
          }
          
          return true;
        }else{
          return false;
        }
      }else{
        whiteflag = true;
      }
    }else if(tempcell == 'span-circle black'){
      if(white){
        blackflag = true;
      }else{
        if(whiteflag){
          if(!checkcell){
            replaceCell(nindex,aindex,false,false,false,false,false,false,false,true);
          }
          return true;
        }
        return false;
      }
      
    }else{
      return false;
    }
  }
}
function replaceCell(nindex,letterIndex,up,down,left,right,upright,upleft,downright,downleft){
  var ni = nindex;
  var ai = letterIndex;
  var illegal = false;
  var tempcell;
  var mycell = (mychar.charAt(letterIndex)).concat(mynumstring.charAt(nindex));

  if(up){

    while(!illegal){
      ni--;
      tempcell = document.getElementById((mychar.charAt(ai)).concat(mynumstring.charAt(ni)));
      if( white && tempcell.getAttribute('class') != 'span-circle' &&  tempcell.getAttribute('class') != 'span-circle hint'){
        if(tempcell.getAttribute('class') == 'span-circle white'){
          illegal = true;
          countwhite--;
          countblack++;
        }
        document.getElementById((mychar.charAt(ai)).concat(mynumstring.charAt(ni))).setAttribute('class', 'span-circle white');
        countwhite++;
        countblack--;
      }else if (!white && tempcell.getAttribute('class') != 'span-circle' &&  tempcell.getAttribute('class') != 'span-circle hint'){
        if(tempcell.getAttribute('class') == 'span-circle black'){
          illegal = true;
          countblack--;
          countwhite++;
        }
        document.getElementById((mychar.charAt(ai)).concat(mynumstring.charAt(ni))).setAttribute('class', 'span-circle black');
        countblack++;
        countwhite--;
      }else{
        illegal = true;
      }
    }
    
  }
  if (down) {
    illegal = false;
    while(!illegal){
      ni++;
      tempcell = document.getElementById((mychar.charAt(ai)).concat(mynumstring.charAt(ni)));
      if( white && tempcell.getAttribute('class') != 'span-circle' &&  tempcell.getAttribute('class') != 'span-circle hint'){
        if(tempcell.getAttribute('class') == 'span-circle white'){
          illegal = true;
          countwhite--;
          countblack++;
        }
        document.getElementById((mychar.charAt(ai)).concat(mynumstring.charAt(ni))).setAttribute('class', 'span-circle white');
        countwhite++;
        countblack--;
      }else if (!white && tempcell.getAttribute('class') != 'span-circle' &&  tempcell.getAttribute('class') != 'span-circle hint'){
        if(tempcell.getAttribute('class') == 'span-circle black'){
          illegal = true;
          countblack--;
          countwhite++;
        }
        document.getElementById((mychar.charAt(ai)).concat(mynumstring.charAt(ni))).setAttribute('class', 'span-circle black');
        countblack++;
        countwhite--;
      }else{
        illegal = true;
      }
    }
    
  }
  if(left){
    illegal = false;
    while(!illegal){
      ai--;
      tempcell = document.getElementById((mychar.charAt(ai)).concat(mynumstring.charAt(ni)));
      if( white && tempcell.getAttribute('class') != 'span-circle' &&  tempcell.getAttribute('class') != 'span-circle hint'){
        if(tempcell.getAttribute('class') == 'span-circle white'){
          illegal = true;
          countwhite--;
          countblack++;
        }
        document.getElementById((mychar.charAt(ai)).concat(mynumstring.charAt(ni))).setAttribute('class', 'span-circle white');
        countwhite++;
        countblack--;
      }else if (!white && tempcell.getAttribute('class') != 'span-circle' &&  tempcell.getAttribute('class') != 'span-circle hint'){
        if(tempcell.getAttribute('class') == 'span-circle black'){
          illegal = true;
          countblack--;
          countwhite++;
        }
        document.getElementById((mychar.charAt(ai)).concat(mynumstring.charAt(ni))).setAttribute('class', 'span-circle black');
        countblack++;
        countwhite--;
      }else{
        illegal = true;
      }
    }
    
  }
  if(right){
    illegal = false;
    while(!illegal){
      ai++;
      tempcell = document.getElementById((mychar.charAt(ai)).concat(mynumstring.charAt(ni)));
      if( white && tempcell.getAttribute('class') != 'span-circle' &&  tempcell.getAttribute('class') != 'span-circle hint'){
        if(tempcell.getAttribute('class') == 'span-circle white'){
          illegal = true;
          countwhite--;
          countblack++;
        }
        document.getElementById((mychar.charAt(ai)).concat(mynumstring.charAt(ni))).setAttribute('class', 'span-circle white');
        countwhite++;
        countblack--;
      }else if (!white && tempcell.getAttribute('class') != 'span-circle' &&  tempcell.getAttribute('class') != 'span-circle hint'){
        if(tempcell.getAttribute('class') == 'span-circle black'){
          illegal = true;
          countblack--;
          countwhite++;
        }
        document.getElementById((mychar.charAt(ai)).concat(mynumstring.charAt(ni))).setAttribute('class', 'span-circle black');
        countblack++;
        countwhite--;
      }else{
        illegal = true;
      }
    }
    
  }
  if(upright){
    illegal = false;
    while(!illegal){
      ai++;
      ni--;
      tempcell = document.getElementById((mychar.charAt(ai)).concat(mynumstring.charAt(ni)));
      if( white && tempcell.getAttribute('class') != 'span-circle' &&  tempcell.getAttribute('class') != 'span-circle hint'){
        if(tempcell.getAttribute('class') == 'span-circle white'){
          illegal = true;
          countwhite--;
          countblack++;
        }
        document.getElementById((mychar.charAt(ai)).concat(mynumstring.charAt(ni))).setAttribute('class', 'span-circle white');
        countwhite++;
        countblack--;
      }else if (!white && tempcell.getAttribute('class') != 'span-circle' &&  tempcell.getAttribute('class') != 'span-circle hint'){
        if(tempcell.getAttribute('class') == 'span-circle black'){
          illegal = true;
          countblack--;
          countwhite++;
        }
        document.getElementById((mychar.charAt(ai)).concat(mynumstring.charAt(ni))).setAttribute('class', 'span-circle black');
        countblack++;
        countwhite--;
      }else{
        illegal = true;
      }
    }
    
  }
  if(upleft){
    illegal = false;
    while(!illegal){
      ai--;
      ni--;
      tempcell = document.getElementById((mychar.charAt(ai)).concat(mynumstring.charAt(ni)));
      if( white && tempcell.getAttribute('class') != 'span-circle' &&  tempcell.getAttribute('class') != 'span-circle hint'){
        if(tempcell.getAttribute('class') == 'span-circle white'){
          illegal = true;
          countwhite--;
          countblack++;
        }
        document.getElementById((mychar.charAt(ai)).concat(mynumstring.charAt(ni))).setAttribute('class', 'span-circle white');
        countwhite++;
        countblack--;
      }else if (!white && tempcell.getAttribute('class') != 'span-circle' &&  tempcell.getAttribute('class') != 'span-circle hint'){
        if(tempcell.getAttribute('class') == 'span-circle black'){
          illegal = true;
          countblack--;
          countwhite++;
        }
        document.getElementById((mychar.charAt(ai)).concat(mynumstring.charAt(ni))).setAttribute('class', 'span-circle black');
        countblack++;
        countwhite--;
      }else{
        illegal = true;
      }
    }
    
  }
  if(downright){
    illegal = false;
    while(!illegal){
      ai++;
      ni++;
      tempcell = document.getElementById((mychar.charAt(ai)).concat(mynumstring.charAt(ni)));
      if( white && tempcell.getAttribute('class') != 'span-circle' &&  tempcell.getAttribute('class') != 'span-circle hint'){
        if(tempcell.getAttribute('class') == 'span-circle white'){
          illegal = true;
          countwhite--;
          countblack++;
        }
        document.getElementById((mychar.charAt(ai)).concat(mynumstring.charAt(ni))).setAttribute('class', 'span-circle white');
        countwhite++;
        countblack--;
      }else if (!white && tempcell.getAttribute('class') != 'span-circle' &&  tempcell.getAttribute('class') != 'span-circle hint'){
        if(tempcell.getAttribute('class') == 'span-circle black'){
          illegal = true;
          countblack--;
          countwhite++;
        }
        document.getElementById((mychar.charAt(ai)).concat(mynumstring.charAt(ni))).setAttribute('class', 'span-circle black');
        countblack++;
        countwhite--;
      }else{
        illegal = true;
      }
    }
    
  }
  if(downleft){
    illegal = false;
    while(!illegal){
      ai--;
      ni++;
      tempcell = document.getElementById((mychar.charAt(ai)).concat(mynumstring.charAt(ni)));
      if( white && tempcell.getAttribute('class') != 'span-circle' &&  tempcell.getAttribute('class') != 'span-circle hint'){
        if(tempcell.getAttribute('class') == 'span-circle white'){
          illegal = true;
          countwhite--;
          countblack++;
        }
        document.getElementById((mychar.charAt(ai)).concat(mynumstring.charAt(ni))).setAttribute('class', 'span-circle white');
        countwhite++;
        countblack--;
      }else if (!white && tempcell.getAttribute('class') != 'span-circle' &&  tempcell.getAttribute('class') != 'span-circle hint'){
        if(tempcell.getAttribute('class') == 'span-circle black'){
          illegal = true;
          countblack--;
          countwhite++;
        }
        document.getElementById((mychar.charAt(ai)).concat(mynumstring.charAt(ni))).setAttribute('class', 'span-circle black');
        countblack++;
        countwhite--;
      }else{
        illegal = true;
      }
    }
    
  }
}
function checkTurn(){
  hintClear();
  let currentID;
  let currentcell;
  let currentclass;
  if(hinton){
    if(!checkcell){
      checkcell = true;
      for(let checkchar = 0; checkchar < col; checkchar++){
        for(let checknum = 0; checknum <col; checknum++){

          currentID = (mychar.charAt(checkchar)).concat(mynumstring.charAt(checknum));
          currentcell = document.getElementById(currentID);
          currentclass = currentcell.getAttribute('class');
          if(north(checkchar,checknum)&&currentclass == 'span-circle'){
            checkcount++;
            if(currentclass == 'span-circle'){
              currentcell.setAttribute('class','span-circle hint');
            }
          }else if(south(checkchar,checknum)&&currentclass == 'span-circle'){
            checkcount++;
            if(currentclass == 'span-circle'){
              currentcell.setAttribute('class','span-circle hint');
            }
          }else if(west(checkchar,checknum)&&currentclass == 'span-circle'){
            checkcount++;
            if(currentclass == 'span-circle'){
              currentcell.setAttribute('class','span-circle hint');
            }
          }else if(east(checkchar,checknum)&&currentclass == 'span-circle'){
            checkcount++;
            if(currentclass == 'span-circle'){
              currentcell.setAttribute('class','span-circle hint');
            }
          }else if(upRight(checkchar,checknum)&&currentclass == 'span-circle'){
            checkcount++;
            if(currentclass == 'span-circle'){
              currentcell.setAttribute('class','span-circle hint');
            }
          }else if(upLeft(checkchar,checknum)&&currentclass == 'span-circle'){
            checkcount++;
            if(currentclass == 'span-circle'){
              currentcell.setAttribute('class','span-circle hint');
            }
          }else if(downRight(checkchar,checknum)&&currentclass == 'span-circle'){
            checkcount++;
            if(currentclass == 'span-circle'){
              currentcell.setAttribute('class','span-circle hint');
            }
          }else if(downLeft(checkchar,checknum)&&currentclass == 'span-circle'){
            checkcount++;
            if(currentclass == 'span-circle'){
              currentcell.setAttribute('class','span-circle hint');
            }
          }
          if(checknum == col-1 && checkchar == col-1){
          checkcell = false;
          }
        }
      }
      if(checkcount == 0){
        white = !white;
        console.log('checkcount '.concat(checkcount));
        if(!drawflag){
          drawflag = true;
          if(thecomputer){
            thecomputer = false;
          }
          
          checkTurn();
        }else{
          if(uniqueyour1){
            uniqueyour1 = false;
            
            gameEnd();
          }
          
          
        }
        checkcount = 0;
      }else{
        if(iscomputer && thecomputer && !white){
          thecomputer = false;
          turnComputer();
        }
        console.log('checkcount '.concat(checkcount));
        drawflag = false;
        if(uniqueyour && white){
          uniqueyour = false;
          
          if(white){
            document.getElementById("holder").innerHTML = username +', Choose Your Move';
          }
          else{
            if(iscomputer){
              document.getElementById("holder").innerHTML = 'AI, Choose Your Move';
            }
            else{
              document.getElementById("holder").innerHTML = 'Guest, Choose Your Move';
            }
          }
        }else if(!uniqueyour && white){
          uniqueyour = true;
        }else{
          if(iscomputer){
            uniqueyour = true;
          }else{
            uniqueyour = true;
            if(white)
              document.getElementById("holder").innerHTML = username +', Choose Your Move';
            else
              document.getElementById("holder").innerHTML = 'Guest, Choose Your Move';
          }
          
        }
        checkcount = 0;
        
      }
    }
  }
}
function hintClear(){
  let currentID;
  let currentcell;
  let currentclass;


    for(let checkchar = 0; checkchar < col; checkchar++){
      for(let checknum = 0; checknum <col; checknum++){

        currentID = (mychar.charAt(checkchar)).concat(mynumstring.charAt(checknum));
        currentcell = document.getElementById(currentID);
        currentclass = currentcell.getAttribute('class');

        if(currentclass == 'span-circle hint'){
          currentcell.setAttribute('class','span-circle');
        }
      }
    }
}
function giveHint(){
  hinton = !hinton;
  checkTurn();
}
/*  <button onclick = 'isIllegalMove(document.getElementById())'    */