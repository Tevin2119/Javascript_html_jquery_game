$(document).ready(function(){
  // console.dir(document);
  // console.log("hello");
  alert('HOW TO PLAY Fusion 4 plays alot like connect4 however the winning sequences have been extended making the dificulty harder. Click the coinDrop buttons to drop your coin (player1 = red & player2 =blue) and match a concequetive array of either coin 4 times to win')

  // player_1.style.color="red"
  var player_1 = 1;
  // $(player_1)
  var player_2 = 2;
  // var active_player=0;
  // function player_color(){
  //   if (player_1=1) {
  //     gridval.innerText.style.backgroundColor = "red";
  //   }else {
  //     gridval.innerText.style.backgroundColor = "blue";
  //   }
  // };
  var colum_1 = [64,56,48,40,32,24,16,8];
  var colum_2 = [65,57,49,41,33,25,17,9];
  var colum_3 = [66,58,50,42,34,26,18,10];
  var colum_4 = [67,59,51,43,35,27,19,11];
  var colum_5 = [68,60,52,44,36,28,20,12];
  var colum_6 = [69,61,53,45,37,29,21,13];
  var colum_7 = [70,62,54,46,38,30,22,14];
  var colum_8 = [71,63,55,47,39,31,23,15];
  // console.log(colum_1[0]);
  var row_1 = [8,9,10,11,12,13,14,15];
  var row_2 = [16,17,18,19,20,21,22,23];
  var row_3 = [24,25,26,27,28,29,30,31];
  var row_4 = [32,33,34,35,36,37,38,39];
  var row_5 = [40,41,42,43,44,45,46,47];
  var row_6 = [48,49,50,51,52,53,54,55];
  var row_7 = [56,57,58,59,60,61,62,63];
  var row_8 = [64,65,66,67,68,69,70,71];
  var gridval = $(".col-md-1").each(function(index){//return array of bootsrap grid
    // console.log(index+":"+$(this).text());
  });
  //check grid array is outputting
  // console.log(gridval)
  var getColumnArray = function(col) {
    switch(col) {
      case 1:
      return colum_1;
      break;
      case 2:
      return colum_2;
      break;
      case 3:
      return colum_3;
      break;
      case 4:
      return colum_4;
      break;
      case 5:
      return colum_5;
      break;
      case 6:
      return colum_6;
      break;
      case 7:
      return colum_7;
      break;
      case 8:
      return colum_8;
      break;
    }
  };
  var getRowArray = function(row) {
    switch(row) {
      case 0:
      return row_1;
      break;
      case 1:
      return row_2;
      break;
      case 2:
      return row_3;
      break;
      case 3:
      return row_4;
      break;
      case 4:
      return row_5;
      break;
      case 5:
      return row_6;
      break;
      case 6:
      return row_7;
      break;
      case 7:
      return row_8;
      break;
    }
  };
  //   var validStartingRowsWin = function() { //valid starting row postions for a left to right win
  //     return [8,16,24,32,40,48,56,64];
  // };
  var validStartingSquaresDRWin = function(){ //valid squares to start on for a diagonal right win.
    return [32,33,34,35,36,40,41,42,43,44,48,49,50,51,52,56,57,58,59,60,64,65,66,67,68];
  };
  var validStartingSquaresDlWin = function(){ //valid squaress to start on the far right for diagnol left win
    return [35,36,37,38,39,43,44,45,46,47,51,52,53,54,55,59,60,61,62,63,67,68,69,70,71];
  };

  $(".coin1").click(function(){
    for (var i = colum_1[0]; i >=colum_1.length; i-=8) { //go through anwser array
      // valueOf(gridval[8]);
      if (gridval[i].innerText == "a" || gridval[i].innerText == "b"){
        //checking the innertext of the grid
        // console.log(gridval[i].innerText);
        if (player_1 == 1) {
          // gridval[i].css = player_1;
          // gridval[i].innerText= $("#col1").css("background-color","red");
          gridval[i].innerText= player_1;
          // player_1.style.color = "red";
          player_1 = 2;
          gridval[i].style.backgroundColor = "red";
          break;
        }else{
          gridval[i].innerText= player_2;
          player_1 = 1;
          gridval[i].style.backgroundColor = "blue";
          break;
        }
      }
    }
    // player_color(gridval[i]);
    calculateWinner();
  });

  $(".coin2").click(function(){
    for (var i=colum_2[0] ; i>colum_2.length; i-=8){
      if (gridval[i].innerText == "a" || gridval[i].innerText == "b"){
        if (player_1 == 1) {
          // gridval[i].css = player_1;
          // gridval[i].innerText= $("#col1").css("background-color","red");
          gridval[i].innerText= player_1;
          player_1 = 0;
          gridval[i].style.backgroundColor = "red";
          break;
        }else{
          gridval[i].innerText= player_2;
          player_1 = 1;
          gridval[i].style.backgroundColor = "blue";
          break;
        }
        //
      }
    }
    calculateWinner();
  });

  $(".coin3").click(function(){
    for (var i=colum_3[0] ; i>colum_3.length; i-=8){
      if (gridval[i].innerText == "a" || gridval[i].innerText == "b"){
        if (player_1 == 1) {
          // gridval[i].css = player_1;
          // gridval[i].innerText= $("#col1").css("background-color","red");
          gridval[i].innerText= player_1;
          player_1 = 0;
          gridval[i].style.backgroundColor = "red";
          break;
        }else{
          gridval[i].innerText= player_2;
          player_1 = 1;
          gridval[i].style.backgroundColor = "blue";
          break;
        }
        //
      }
    }
    calculateWinner();
  });

  $(".coin4").click(function(){
    for (var i=colum_4[0] ; i>colum_4.length; i-=8){
      if (gridval[i].innerText == "a" || gridval[i].innerText == "b"){
        if (player_1 == 1) {
          // gridval[i].css = player_1;
          // gridval[i].innerText= $("#col1").css("background-color","red");
          gridval[i].innerText= player_1;
          player_1 = 0;
          gridval[i].style.backgroundColor = "red";
          break;
        }else{
          gridval[i].innerText= player_2;
          player_1 = 1;
          gridval[i].style.backgroundColor = "blue";
          break;
        }
        //
      }
    }
    calculateWinner();
  });

  $(".coin5").click(function(){
    for (var i=colum_5[0] ; i>colum_5.length; i-=8){
      if (gridval[i].innerText == "a" || gridval[i].innerText == "b"){
        if (player_1 == 1) {
          // gridval[i].css = player_1;
          // gridval[i].innerText= $("#col1").css("background-color","red");
          gridval[i].innerText= player_1;
          player_1 = 0;
          gridval[i].style.backgroundColor = "red";
          break;
        }else{
          gridval[i].innerText= player_2;
          player_1 = 1;
          gridval[i].style.backgroundColor = "blue";
          break;
        }
        //
      }
    }
    calculateWinner();
  });

  $(".coin6").click(function(){
    for (var i=colum_6[0] ; i>colum_6.length; i-=8){
      if (gridval[i].innerText == "a" || gridval[i].innerText == "b"){
        if (player_1 == 1) {
          // gridval[i].css = player_1;
          // gridval[i].innerText= $("#col1").css("background-color","red");
          gridval[i].innerText= player_1;
          player_1 = 0;
          gridval[i].style.backgroundColor = "red";
          break;
        }else{
          gridval[i].innerText= player_2;
          player_1 = 1;
          gridval[i].style.backgroundColor = "blue";
          break;
        }
        //
      }
    }
    calculateWinner();
  });

  $(".coin7").click(function(){
    for (var i=colum_7[0] ; i>colum_7.length; i-=8){
      if (gridval[i].innerText == "a" || gridval[i].innerText == "b"){
        if (player_1 == 1) {
          // gridval[i].css = player_1;
          // gridval[i].innerText= $("#col1").css("background-color","red");
          gridval[i].innerText= player_1;
          player_1 = 0;
          gridval[i].style.backgroundColor = "red";
          break;
        }else{
          gridval[i].innerText= player_2;
          player_1 = 1;
          gridval[i].style.backgroundColor = "blue";
          break;
        }
        //
      }
    }
    calculateWinner();
  });

  $(".coin8").click(function(){
    for (var i=colum_8[0] ; i>colum_8.length; i-=8){
      if (gridval[i].innerText == "a" || gridval[i].innerText == "b"){
        if (player_1 == 1) {
          // gridval[i].css = player_1;
          // gridval[i].innerText= $("#col1").css("background-color","red");
          gridval[i].innerText= player_1;
          player_1 = 0;
          gridval[i].style.backgroundColor = "red";
          break;
        }else{
          gridval[i].innerText= player_2;
          player_1 = 1;
          gridval[i].style.backgroundColor = "blue";
          break;
        }
        //
      }
    }
    calculateWinner(); //somehow stop the game here for all buttons... if(calculateWinner) { then do shit }
  });

  var calculateWinner = function() {
    // console.log('calcWInner Called');
    /*testing winning parametres
    // winnerInDiagonalRight();
    // winnerInDiagonalLeft();
    // winnerInColumn()
    // winnerInRow();*/
    // NOTE: test winnerInDiagonalLeft() and winnerInRow(). then complete
    if(winnerInColumn() || winnerInRow() || winnerInDiagonalRight() || winnerInDiagonalLeft()) {
      if (player_1 == 1) {
        alert('WINNER FOUND P2');
        document.location.href="gameOverp2.html"
      }else{
        alert('WINNER FOUND P1');
        document.location.href="gameOverp1.html"
      }
    }
  }

  var winnerInColumn = function() { //check for winners in columns
    // console.log('verticalWinnerChecks called');
    for (var i = 1; i < 9; i++) {
      // console.log('@ i = ' + i);
      var colArray = getColumnArray(i);
      console.log(colArray);
      for (var j = 0; j < colArray.length -3; j++ ) {
        if(gridval[colArray[j]].innerText == gridval[colArray[j+1]].innerText) {
          if(gridval[colArray[j+1]].innerText == gridval[colArray[j+2]].innerText && gridval[colArray[j+2]].innerText == gridval[colArray[j+3]].innerText) {
            // console.log('FOUND WINNER!: at i  = ' + i + ' and j = ' + j);
            // alert("found winner in winnerIncolumn")
            return true;
          }
        }
      }
    }
    return false;
  };

  var winnerInRow = function() {
    // console.log('invoking winnerInRow');
    for (var r = 0; r < 8; r++){
      var rowArray = getRowArray(r);
      //checking that rows are returned not columns
      // console.log(rowArray);
      for (var rw = 0; rw < rowArray.length -3; rw++){
        if(gridval[rowArray[rw]].innerText == gridval[rowArray[rw+1]].innerText){
          if(gridval[rowArray[rw+1]].innerText == gridval[rowArray[rw+2]].innerText && gridval[rowArray[rw+2]].innerText == gridval[rowArray[rw+3]].innerText){
            // console.log('Winner found in winnerInRow');
            // alert("found winner in winnerInRow")
            return true;
          }
        }
      }
    }
    return false;
  }
  var winnerInDiagonalRight = function() {
    // console.log('invoking winnerInDiagonalRight...');
    for (var i = 0; i < validStartingSquaresDRWin().length; i++) {
      var currentReferenceSquare = validStartingSquaresDRWin()[i];
      if(gridval[currentReferenceSquare].innerText == gridval[currentReferenceSquare - 7].innerText
        && gridval[currentReferenceSquare - 7].innerText == gridval[currentReferenceSquare - 14].innerText
        && gridval[currentReferenceSquare - 14].innerText == gridval[currentReferenceSquare - 21].innerText ) {
          // console.log('Winner found diagonal right at currentReferenceSquare = ' + currentReferenceSquare );
          // alert("found winnerInDiagonalRight")
          return true;
        }
      }
      return false;
    };

    var winnerInDiagonalLeft = function() {
      //reference diagonal right
      // console.log('invoking winnerInDiagonalLeft...');
      for (var i= 0; i < validStartingSquaresDlWin().length; i++){
        var dLcurrentRefSquare = validStartingSquaresDlWin()[i];
        if (gridval[dLcurrentRefSquare].innerText == gridval[dLcurrentRefSquare -9].innerText
          && gridval[dLcurrentRefSquare -9].innerText == gridval[dLcurrentRefSquare -18].innerText && gridval[dLcurrentRefSquare -18].innerText == gridval[dLcurrentRefSquare -27].innerText) {
            // console.log('winner found diagnol left at dlcurrentRefSquare = ' + dLcurrentRefSquare);
            // alert("found winner in winnerInDiagonalRight")
            return true;
          }
        }
        return false;
      };
    })
