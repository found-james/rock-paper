const choices = ['rock', 'paper', 'scissors'];
var playerTally = 0; 
var botTally = 0;

const tieMsg = 'You tied.'; 
const loseMsg = 'You lose.'; 
const winMsg = 'You win!';

const roundResults = document.querySelector('#round-results');
const playerTotal = document.querySelector('#player-score');
const botTotal = document.querySelector('#bot-score');
const endOfGameMsg = document.querySelector('#end-of-game-msg');

const rockButtonPressed = () => pressButton('rock'); 
const paperButtonPressed = () => pressButton('paper');
const scissorsButtonPressed = () => pressButton('scissors');

const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', rockButtonPressed);
const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', paperButtonPressed);
const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', scissorsButtonPressed);


const playerTallys = [playerTally, botTally];
const endOfGameMsgs = [tieMsg, loseMsg, winMsg];
const textThatChanges = [roundResults, playerTotal, botTotal, endOfGameMsg] 
const ButtonPressed = [rockButtonPressed, paperButtonPressed, scissorsButtonPressed];
const Buttons = [rockButton, paperButton, scissorsButton];

function setGoBot() {
  const idx4arr = Math.floor(Math.random() * choices.length);
  const botChoice = choices[idx4arr];
  return botChoice;
}

// function botWillWin(btnPressedStr){
//   let botChoice;
  
//   switch(btnPressedStr){
//     case choices[0]:
//        botChoice = choices[1];
//        break;
//     case choices[1]:
//       botChoice = choices[2];
//       break;
//     case choices[2]:
//       botChoice = choices[0];
//       break;
//   }
//   return botChoice;
// }

function pressButton(rockPaperScissors) {
  //const botChoice = botWillWin(rockPaperScissors);
  const botChoice = setGoBot(rockPaperScissors);
 
  roundResults.textContent = `You have chosen ${rockPaperScissors} and the bot has chosen ${botChoice}`;
  //
  function editText(str){
    endOfGameMsg.innerText = str;  
    switch (str){
      case loseMsg:
        botTally++;
        break;
      case winMsg:
        playerTally++;
        break;
    }
  }
 // 
  switch (rockPaperScissors){
      case 'rock':
          switch (botChoice){
            case 'paper':
              editText(loseMsg);
              break;
            case 'scissors':
              editText(winMsg);
              break;
        case 'rock':
           editText(tieMsg); 
           break;
        }  
      break;
    case 'paper': 
        switch (botChoice){
          case 'scissors':
            editText(loseMsg);
            break;
        case 'rock':
          editText(winMsg);
          break;
        case 'paper':
          editText(tieMsg);
          break;
      }
      break;
    
    case 'scissors':
      switch (botChoice){
        case 'rock':
          editText(loseMsg);
          break;
        case 'paper':
          editText(winMsg)
          break;
       case 'scissors':
          editText(tieMsg);
          break;
      }
      break;
  }
  
  const editScore = (domElem, jsVar) => domElem.textContent = jsVar;
  
  editScore(playerTotal, playerTally);
  editScore(botTotal, botTally);
  
}






