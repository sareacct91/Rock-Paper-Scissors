// get user input (R, P, or S)
// get computer input (random)
// compare the input
// output the result

const startBtn = document.querySelector("#startBtn");

const selectionArr = ['r', 'p', 's'];
let score = {
  win: 0,
  lose: 0,
  tie: 0
};

// Check for valid userInput
function checkUserInput(inputPar) {
  
};

// Function to get selection for user and pc
function getSelection(parm) {
  let tempSelection = checkUserInput(parm === 'user' ? prompt("Enter R, P, or S for Rock, Paper, Scissors")
  : selectionArr[Math.floor(Math.random() * selectionArr.length)]);

  return tempSelection;
}

// Run the code when the start button is pressed
function startGame() {
  // Get user input and pc input
  const userInput = getSelection('user');
  const pcInput = getSelection('pc');

  // Compare the selection and get result
  let resultStr = '';

  if (userInput.toLowerCase() === 'r') {
    resultStr = pcInput === 's' ? (score.win++, `You win: Rock vs Scissors`)
      : pcInput === 'p' ? (score.lose++, `You lose: Rock vs Paper`)
      : (score.tie++, `Tie: Rock vs Rock`);

  } else if (userInput.toLowerCase() === 'p') {
    resultStr = pcInput === 'r' ? (score.win++, `You win: Paper vs Rock`)
      : pcInput === 's' ? (score.lose++, `You lose: Paper vs Scissors`)
      : (score.tie++, `Tie: Paper vs Paper`);

  } else if (userInput.toLowerCase() === 's') {
    resultStr = pcInput === 'p' ? (score.win++, `You win: Scissors vs Paper`)
      : pcInput === 'r' ? (score.lose++, `You lose: Scissors vs Rock`)
      : (score.tie++, `Tie: Scissors vs Scissors`);
  }

  console.log(score);

  // output the result
  if (confirm(`${resultStr} \n Win: ${score.win} \n Lose: ${score.lose} \n Tie: ${score.tie}`)) {
    startGame();
  }
};

startBtn.addEventListener("click", startGame);