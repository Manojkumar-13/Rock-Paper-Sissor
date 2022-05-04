'use strict';

// get element by ID, class for css and id for js
// querySelectorAll
// function
const scoreComputerEl = document.getElementById('computer-score');
const scoreUserEl = document.getElementById('user-score');
const userOptionEl = document.getElementById('user-option');
const computerOptionEl = document.getElementById('computer-option')
const resultContainer = document.querySelector('.result');
let scoreComputer = 0;
let scoreUser = 0;
let i = 0;
// function
const showResult = function(userWeapon,computerWeapon){
  resultContainer.classList.add('show');
  userOptionEl.textContent = userWeapon;
  computerOptionEl.textContent = computerWeapon;
}
const resultEl = document.getElementById('result');
const getComputerChoice = function(){
  let weapons = ['rock', 'paper', 'scissor'];
  return weapons[Math.trunc(Math.random() * 3)];
}
const gameLogic = function(userWeapon){
  let computerWeapon = getComputerChoice();

if (computerWeapon === userWeapon.toLowerCase()){
  showResult(userWeapon,computerWeapon);
  scoreComputer = scoreComputer + 1;
  scoreUser = scoreUser + 1;
  scoreComputerEl.textContent = scoreComputer;
  scoreUserEl.textContent = scoreUser;
  resultEl.textContent = 'Draw';
}else if((computerWeapon === 'rock' && userWeapon.toLowerCase() === 'scissor') || (computerWeapon === 'scissor' && userWeapon.toLowerCase() === 'paper') || (computerWeapon === 'paper' && userWeapon.toLowerCase() === 'rock')){
  showResult(userWeapon,computerWeapon);
  resultEl.textContent = 'You Lost';
  scoreComputer = scoreComputer + 2;
  scoreComputerEl.textContent = scoreComputer;
}else if((computerWeapon === 'rock' && userWeapon.toLowerCase() === 'paper') || (computerWeapon === 'scissor' && userWeapon.toLowerCase() === 'rock') || (computerWeapon === 'paper' && userWeapon.toLowerCase() === 'scissor')){
  showResult(userWeapon,computerWeapon);
  resultEl.textContent = 'You Won';
  scoreUser = scoreUser + 2;
  scoreUserEl.textContent = scoreUser;
}
}
// const game = function(){
//   while(i < 10){
//   if ((scoreComputer < 5) && (scoreUser < 5)){
//     gameLogic();
//     i = i+1;
//   }else{
//     if(scoreComputer > scoreUser){
//       console.log(`Computer wins with the score of ${scoreComputer}`)
//     }else{
//       console.log(`User wins with the score of ${scoreUser}`)
//     }
//     return;
//   }
  
// }
// }
// onclick events in html