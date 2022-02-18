let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");
let audio = new Audio("./bgm/music.wav");
let audio2 = new Audio("./bgm/music2.wav");
let audio3 = new Audio("./bgm/music3.wav");

const init = () => {
  computerGuess = Math.floor(Math.random() * 100);
  ////console.log(computerGuess);
  document.getElementById("newGameButton").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
};

const startGame = () => {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
};

// relaod the page

const newGameBegin = () => {
  audio.play();
  window.location.reload();
};

// start new game

const startNewGame = () => {
  document.getElementById("newGameButton").style.display = "inline";
  userNumberUpdate.setAttribute("disabled", true);
}; 
// main logic of our app
const compareGuess = () => {
  const userNumber = Number(document.getElementById("inputBox").value);
  userGuess = [...userGuess, userNumber];
  document.getElementById("guesses").innerHTML = userGuess;

  // check the value low or high

  if (userGuess.length < maxGuess) {
    if (userNumber > computerGuess) {
      audio.play();
      userGuessUpdate.innerHTML = "Try again its High 😲";
      userNumberUpdate.value = "";
    } else if (userNumber < computerGuess) {
      audio.play();
      userGuessUpdate.innerHTML = "Try again its Low 😌";
      userNumberUpdate.value = "";
    } else {
      audio2.play();
      userGuessUpdate.innerHTML = "It's Correct 😀 go on!!!";
      userNumberUpdate.value = "";
      startNewGame();
    }
  } else {
    if (userNumber > computerGuess) {
      audio3.play();
      userGuessUpdate.innerHTML = `You Loose buddy!! 😔 correct number was ${computerGuess}. You should try again to show the world who you are 😠.`;
      userNumberUpdate.value = "";
      startNewGame();
    } else if (userNumber < computerGuess) {
      audio3.play();
      userGuessUpdate.innerHTML = `You Loose buddy!! 😔 correct number was ${computerGuess}. You should try again to show the world who you are 😠.`;
      userNumberUpdate.value = "";
      startNewGame();
    } else {
      audio2.play();
      userGuessUpdate.innerHTML = "It's Correct 😀 go on!!!";
      userNumberUpdate.value = "";
      startNewGame();
    }
  }

  document.getElementById("attempts").innerHTML = userGuess.length;
};

const easyMode = () => {
  audio.play();
  maxGuess = 10;
  startGame();
};

const mediumMode = () => {
  audio.play();
  maxGuess = 7;
  startGame();
}; 

const hardMode = () => {
  audio.play();
  maxGuess = 5;
  startGame();
};

const proMode = () => {
  audio.play();
  maxGuess = 3;
  startGame();
}; 

const ultraMode = () => {
  audio.play();
  maxGuess = 1;
  startGame();
}; 