//these variables help with the app logic
let xTurn = true;
let movesMade = {
  cell00: {boolean: false, value: null},
  cell01: {boolean: false, value: null},
  cell02: {boolean: false, value: null},
  cell03: {boolean: false, value: null},
  cell04: {boolean: false, value: null},
  cell05: {boolean: false, value: null},
  cell06: {boolean: false, value: null},
  cell07: {boolean: false, value: null},
  cell08: {boolean: false, value: null}
};


//declar variables for each cell in the board 
let cell0 = document.getElementById("0");
let cell1 = document.getElementById("1");
let cell2 = document.getElementById("2");
let cell3 = document.getElementById("3");
let cell4 = document.getElementById("4");
let cell5 = document.getElementById("5");
let cell6 = document.getElementById("6");
let cell7 = document.getElementById("7");
let cell8 = document.getElementById("8");

//declare variable for the button
let button = document.getElementById("button");


//The following functions add X or O to the cells when they are clicked, and will also check to see if there is a winner
cell0.addEventListener("click", function(){
    makeMove(cell0, movesMade.cell00.boolean, 'cell00');
    anyRowWins();
    anyColumnWins();
    anyDiagWins();
    anyTies();
});

cell1.addEventListener("click", function(){
    makeMove(cell1, movesMade.cell01.boolean, 'cell01');
    anyRowWins();
    anyColumnWins();
    anyDiagWins();
    anyTies();
});

cell2.addEventListener("click", function(){
    makeMove(cell2, movesMade.cell02.boolean, 'cell02');
    anyRowWins();
    anyColumnWins();
    anyDiagWins();
    anyTies();
});

cell3.addEventListener("click", function(){
    makeMove(cell3, movesMade.cell03.boolean, 'cell03');
    anyRowWins();
    anyColumnWins();
    anyDiagWins();
    anyTies();
  });
  
cell4.addEventListener("click", function(){
    makeMove(cell4, movesMade.cell04.boolean, 'cell04');
    anyRowWins();
    anyColumnWins();
    anyDiagWins();
    anyTies();
});
  
cell5.addEventListener("click", function(){
    makeMove(cell5, movesMade.cell05.boolean, 'cell05');
    anyRowWins();
    anyColumnWins();
    anyDiagWins();
    anyTies();
});

cell6.addEventListener("click", function(){
    makeMove(cell6, movesMade.cell06.boolean, 'cell06');
    anyRowWins();
    anyColumnWins();
    anyDiagWins();
    anyTies();
});
  
cell7.addEventListener("click", function(){
    makeMove(cell7, movesMade.cell07.boolean, 'cell07');
    anyRowWins();
    anyColumnWins();
    anyDiagWins();
    anyTies();
});
  
cell8.addEventListener("click", function(){
    makeMove(cell8, movesMade.cell08.boolean, 'cell08');
    anyRowWins();
    anyColumnWins();
    anyDiagWins();
    anyTies();
});

//Event Listener for the RESET BUTTON
button.addEventListener("click", function(){
    resetGame();
});



//Helper that enters X or O
const makeMove = (cell, moveObj, theCell) => {
  if(moveObj === false) {
    if(xTurn === true) {
      cell.innerHTML = "X";
      movesMade[theCell].value = "X";
      movesMade[theCell].boolean = true;
    }
    if(xTurn === false) {
      cell.innerHTML = "O";
      movesMade[theCell].boolean = true;
    } 
    xTurn = !xTurn; 
  }
};



//Helper that looks for wins
const anyRowWins = () => {
  if((movesMade.cell00.value !== null && movesMade.cell00.value === movesMade.cell01.value) && (movesMade.cell01.value !== null && movesMade.cell01.value === movesMade.cell02.value)) {
    alert(movesMade.cell01.value + ' wins!')
    resetGame();
  }
  if((movesMade.cell03.value !== null && movesMade.cell03.value === movesMade.cell04.value) && (movesMade.cell04.value !== null && movesMade.cell04.value === movesMade.cell05.value)) {
    alert(movesMade.cell03.value + ' wins!')
    resetGame();

  }
  if((movesMade.cell06.value !== null && movesMade.cell06.value === movesMade.cell07.value) && (movesMade.cell07.value !== null && movesMade.cell07.value === movesMade.cell08.value)) {
    alert(movesMade.cell06.value + ' wins!')
    resetGame();

  }
};

const anyDiagWins = () => {
    if((movesMade.cell00.value !== null && movesMade.cell00.value === movesMade.cell04.value) && (movesMade.cell04.value !== null && movesMade.cell04.value === movesMade.cell08.value)) {
      alert(movesMade.cell00.value + ' wins!')
      resetGame();
    }
    if((movesMade.cell06.value !== null && movesMade.cell06.value === movesMade.cell04.value) && (movesMade.cell04.value !== null && movesMade.cell04.value === movesMade.cell02.value)) {
      alert(movesMade.cell06.value + ' wins!')
      resetGame();
  
    }
  };

  const anyTies = () => {
    let allFill = true;
    for(var key in movesMade) {
      if(movesMade[key].value === null) {
          allFill = false
      }
    }
    if(allFill = false) {
        alert('Tie game!');
        resetGame();
    } 
  };



//Helper that looks for wins
const anyColumnWins = () => {
    if((movesMade.cell00.value !== null && movesMade.cell00.value === movesMade.cell03.value) && (movesMade.cell03.value !== null && movesMade.cell03.value === movesMade.cell06.value)) {
      alert(movesMade.cell00.value + ' wins!')
      resetGame();
    }
    if((movesMade.cell01.value !== null && movesMade.cell01.value === movesMade.cell04.value) && (movesMade.cell04.value !== null && movesMade.cell04.value === movesMade.cell07.value)) {
      alert(movesMade.cell01.value + ' wins!')
      resetGame();
  
    }
    if((movesMade.cell02.value !== null && movesMade.cell02.value === movesMade.cell05.value) && (movesMade.cell05.value !== null && movesMade.cell05.value === movesMade.cell08.value)) {
      alert(movesMade.cell06.value + ' wins!')
      resetGame();
  
    }
  };



//Reset buttons
const resetGame = () => {
  movesMade = {
  cell00: {boolean: false, value: null},
  cell01: {boolean: false, value: null},
  cell02: {boolean: false, value: null},
  cell03: {boolean: false, value: null},
  cell04: {boolean: false, value: null},
  cell05: {boolean: false, value: null},
  cell06: {boolean: false, value: null},
  cell07: {boolean: false, value: null},
  cell08: {boolean: false, value: null}
  };

  cell0.innerHTML = "";
  cell1.innerHTML = "";
  cell2.innerHTML = "";
  cell3.innerHTML = "";
  cell4.innerHTML = "";
  cell5.innerHTML = "";
  cell6.innerHTML = "";
  cell7.innerHTML = "";
  cell8.innerHTML = "";

  xTurn = true;

  console.log('is it x turn?', xTurn);
};
  