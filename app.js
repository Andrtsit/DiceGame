(() => {
//DOM SELECTION 
const main = document.getElementById('main')
const resetBtn = document.getElementById("reset");
const collectBtn = document.getElementById("collect");
const diceBtn = document.getElementById("dice");
const player1 = document.querySelector(".player-one");
const player2 = document.querySelector(".player-two");
const scorePlayer1 = document.querySelector(".score-player-one");
const scorePlayer2 = document.querySelector(".score-player-two");
const currScorePlayer1 = document.querySelector(".current-score-player-one");
const currScorePlayer2 = document.querySelector(".current-score-player-two");
 
//creating image & inserting it in dom
const diceImg = document.createElement('img');
diceImg.alt = 'dice-image'
main.appendChild(diceImg)

let player = true; // true is player1 ,false is player2
let score = 0;


// function for dice

const diceRoll = function() {
 const randomNumber = Math.floor(Math.random() * 6) + 1;
 diceImg.src = `img/dice-${randomNumber}.png`;
 diceImg.style.display = 'block';
 return randomNumber;   
}

// function for checking who is active 

const updateActivePlayer = function(){
  if(player){
    player1.classList.add('active');
    player2.classList.remove("active");
  }
  else{
    player2.classList.add('active');
    player1.classList.remove("active");
  }
} 
updateActivePlayer()


const reset = function(){
  score = 0;
  scorePlayer1.textContent = "0";
  scorePlayer2.textContent = "0";
  currScorePlayer1.textContent = "0";
  currScorePlayer2.textContent = "0";
  diceImg.style.display = "none";
  player = true;
  updateActivePlayer();
}
const checkWinner = function(){
  if(Number(scorePlayer1.textContent) >= 100)
  {  alert('winner is player1');
    reset();}
    else if(Number(scorePlayer2.textContent) >= 100 ){
      alert('winner is player2');
      reset();
    }
}
const collectFunction = function(){
  if(player){
    const total = Number(scorePlayer1.textContent) + score;
     scorePlayer1.textContent = total;
      currScorePlayer1.textContent = "0"
      diceImg.style.display = "none";
      score = 0;
      player = !player;
      updateActivePlayer();
      checkWinner();
    } else {
      const total = Number(scorePlayer2.textContent) + score;
     scorePlayer2.textContent = total;
    
      currScorePlayer2.textContent = "0"
      diceImg.style.display = "none";
      score = 0;
      player = !player;
      updateActivePlayer();
      checkWinner();  
    }

}
const diceFunction = function(){
  const points =  diceRoll();
 if(points === 1){
   currScorePlayer1.textContent = "0";
   currScorePlayer2.textContent = "0";
   score = 0;
   player = !player;
  updateActivePlayer()
  diceBtn.disabled = true;
   setTimeout(() => {
    diceImg.style.display =   "none";
    diceBtn.disabled = false;
   }, 1500);
  }
  else {

    if(player){
      score += points;
      currScorePlayer1.textContent = score;
    }else {
      score += points;
      currScorePlayer2.textContent = score;
    }
  }
}
diceBtn.addEventListener("click",function(){
  diceFunction()
 
})

document.addEventListener("keypress",function(e){
  if(e.key === 'a'){
    diceFunction()
  }
  if(e.key === 'c'){
    collectFunction()
  }
}

)
collectBtn.addEventListener("click",function(){
  collectFunction()
})

resetBtn.addEventListener("click",function(){
  reset()
})

})()