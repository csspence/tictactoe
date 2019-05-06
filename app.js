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


//I recognize that this is UGLY.  I just needed to get a listener on each one, and I was running out of time with my other attempts. 
let cell0 = document.getElementById("0");
let cell1 = document.getElementById("1");
let cell2 = document.getElementById("2");
let cell3 = document.getElementById("3");
let cell4 = document.getElementById("4");
let cell5 = document.getElementById("5");
let cell6 = document.getElementById("6");
let cell7 = document.getElementById("7");
let cell8 = document.getElementById("8");


cell0.addEventListener("click", function(){
    makeMove(cell0, movesMade.cell00.boolean, movesMade.cell00.value);
});

cell1.addEventListener("click", function(){
    makeMove(cell1, movesMade.cell01.boolean, movesMade.cell01.value);
});

cell2.addEventListener("click", function(){
    makeMove(cell2, movesMade.cell02.boolean, movesMade.cell02.value);
});

cell3.addEventListener("click", function(){
    makeMove(cell3, movesMade.cell03.boolean, movesMade.cell03.value);
  });
  
cell4.addEventListener("click", function(){
    makeMove(cell4, movesMade.cell04.boolean, movesMade.cell04.value);
});
  
cell5.addEventListener("click", function(){
    makeMove(cell5, movesMade.cell05.boolean, movesMade.cell05.value);
});

cell6.addEventListener("click", function(){
    makeMove(cell6, movesMade.cell06.boolean, movesMade.cell06.value);
});
  
cell7.addEventListener("click", function(){
    makeMove(cell7, movesMade.cell07.boolean, movesMade.cell07.value);
});
  
cell8.addEventListener("click", function(){
    makeMove(cell8, movesMade.cell08.boolean, movesMade.cell08.value);
});



//Helper that enters X or O
const makeMove = (cell, moveObj, value) => {
  console.log('here is cell!   ', JSON.stringify(cell));
  console.log('object value', value);
  console.log('x turn', xTurn);
  if(moveObj === false) {
    if(xTurn === true) {
      cell.innerHTML = "X";
      value = "X";
    }
    if(xTurn === false) {
      cell.innerHTML = "O";
      value = "O";
    } 
    xTurn = !xTurn; 
  }
  console.log('object value', value);
  console.log('x turn', xTurn);
};



//Helper that looks for wins
const anyWins = () => {
    
};



//Reset buttons
const resetGame = () => {
    
};
  