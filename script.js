//Cibler les elements HTML
let newGameBtn = document.getElementById('newGame')
let tour1 =  document.getElementById('tour1')
let tour2 =  document.getElementById('tour2')
let textDisplay =  document.getElementById('textDisplay')
let p1GlobalScore = document.getElementById('p1GlobalScore')
let p2GlobalScore = document.getElementById('p2GlobalScore')
let dice = document.getElementById('dice')
let p1RoundScore = document.getElementById('p1RoundScore')
let p2RoundScore = document.getElementById('p2RoundScore')
let rollDiceBtn = document.getElementById('rollDice')
let holdBtn = document.getElementById('hold')

//Cacher les elements suivants et les faire apparaitre quand le joueur veut commencer ou recommencer à jouer
p1GlobalScore.style.display = 'none'
p2GlobalScore.style.display = 'none'
p1RoundScore.style.display = 'none'
p2RoundScore.style.display = 'none'
tour1.style.display = 'none'
tour2.style.display = 'none'
rollDiceBtn.style.display = 'none'
holdBtn.style.display = 'none'

// Class Player
class Player{
  constructor(name, turn, roundNb, globalNb){
    this.name =  name
    this.turn = turn
    this.roundNb = 0
    this.globalNb = 0
  }

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  rollDice(){
    let oneToSixRandom = this.randomNumber(1, 6)

    // Les 6 faces d'un dé
    switch(oneToSixRandom) {
      case 1:
        dice.innerHTML = `<i id = "diceColor" class="fas fa-dice-one fa-3x"></i>`
        break;  
      case 2:
        dice.innerHTML = `<i id = "diceColor" class="fas fa-dice-two fa-3x"></i>`
        break; 
      case 3:
        dice.innerHTML = `<i id = "diceColor" class="fas fa-dice-three fa-3x"></i>`
        break;   
      case 4:
        dice.innerHTML = `<i id = "diceColor" class="fas fa-dice-four fa-3x"></i>`
        break;
      case 5:
        dice.innerHTML = `<i id = "diceColor" class="fas fa-dice-five fa-3x"></i>`
        break;  
      case 6:
        dice.innerHTML = `<i id = "diceColor" class="fas fa-dice-six fa-3x"></i>`
    }

    while(oneToSixRandom === 1){
      if(game.turn === 'p1'){
        game.turn = 'p2'
        tour2.style.display  = 'inline-block'
        tour1.style.display = 'none'
        player1.roundNb = 0
        return player1.roundNb
      } else if (game.turn = 'p2'){
        game.turn = 'p1'
        tour1.style.display  = 'inline-block'
        tour2.style.display = 'none'
        player2.roundNb = 0
        return player1.roundNb
      }
    }

    if(game.turn === 'p1'){
      player1.roundNb += oneToSixRandom
      return player1.roundNb
    } else {
      player2.roundNb += oneToSixRandom
      return player2.roundNb
    }
  }

  hold(){
    if (game.turn === 'p1') {
      player1.globalNb += player1.roundNb
      return player1.globalNb 
    } else {
      player2.globalNb += player2.roundNb
      return player2.globalNb 
    }
  }
}

//Creation d'instance de joueur
let player1 =  new Player('player1', 'p1', 0, 0)
let player2 =  new Player('player2', 'p2', 0, 0)

// Class Game 
class Game {
  constructor(players, turn){
    this.players = players
    this.turn = turn
  }
}

// Initialiser la partie avec les 2 joueurs et attribuer le tour du joueur qui va commencer
let game = new Game(['player1, player2'], 'p1')
const winPoint = 100
let roundNb = 0
let globalNb = 0

//Nouvelle partie
newGameBtn.addEventListener('click',()=>{
  player1.roundNb = 0
  player2.roundNb = 0
  player1.globalNb = 0
  player2.globalNb = 0
  p1GlobalScore.style.display = 'block'
  p2GlobalScore.style.display = 'block'
  p1RoundScore.style.display = 'block'
  p2RoundScore.style.display = 'block'
  rollDiceBtn.style.display = 'block'
  holdBtn.style.display = 'block'
  tour1.style.display = 'inline-block'
  tour2.style.display = 'none'
  p1GlobalScore.textContent = 0
  p1RoundScore.innerHTML = `<p>0</p>`
  p2GlobalScore.textContent = 0
  p2RoundScore.innerHTML = `<p>0</p>`
  textDisplay.innerText = ''  
})


// Lancer le dé
rollDiceBtn.addEventListener('click', ()=>{
  if(game.turn === 'p1'){
    p1RoundScore.innerHTML = (`<p>${player1.rollDice()}</p>`)
  } else if(game.turn === 'p2'){
    p2RoundScore.innerHTML = (`<p>${player2.rollDice()}</p>`)
  }
})

// Rapatrier le score 'round' dans le score 'global'
holdBtn.addEventListener('click', ()=>{
  if (game.turn === 'p1'){
    p1GlobalScore.innerText =(`${player1.hold()}`)
    if (player1.globalNb < winPoint){
      player1.roundNb = 0
      p1RoundScore.innerHTML = `<p>0</p>`
      game.turn = 'p2'
      tour1.style.display = 'none'
      tour2.style.display = 'inline-block'
    }
    winnerPlayer()
  } else if (game.turn === 'p2'){
    p2GlobalScore.innerText =(`${player2.hold()}`)
    if (player2.globalNb < winPoint){
      player2.roundNb = 0
      p2RoundScore.innerHTML = `<p>0</p>`
      game.turn = 'p1'
      tour2.style.display = 'none'
      tour1.style.display = 'inline-block'
    }
    winnerPlayer()
  }
})

// Le joueur gagnant
function winnerPlayer(){
  if (player1.globalNb >= winPoint){
    textDisplay.textContent = (`PLAYER 1 a gagné avec un score de: ${player1.globalNb}`)
    rollDiceBtn.style.display = 'none'
    holdBtn.style.display = 'none'
    return 
  } else if (player2.globalNb >= winPoint){
    textDisplay.textContent = (`PLAYER 2 a gagné avec un score de: ${player2.globalNb}`)
    rollDiceBtn.style.display = 'none'
    holdBtn.style.display = 'none'
    return 
  }
  }