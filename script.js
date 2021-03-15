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