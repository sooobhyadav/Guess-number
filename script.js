let random = parseInt (Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
  submit.addEventListener('click',function(event){
    event.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('pls give valid number')
  }else if (guess < 1){
    alert('pls give number more than one ')
  }else if(guess > 100){
    alert('pls give number less than 100')
  }else{
    prevGuess.push(guess)
    if (numGuess == 11){
      displayGuess(guess)
      displayMessage('Game over random number was :'+ (random))
      endgame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess == random){
    displayMessage('You Guessed Right')
    endgame()
  }else if (guess < random){
    displayMessage('Number is too low')
  }else if (guess > random){
    displayMessage('Number is too high')
  }
}

function displayGuess(guess){
  userInput.value = ""
  guessSlot.innerHTML += `${guess}: `
  numGuess++
  remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endgame(){
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame"> Start New Game </h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(event){
    random = parseInt (Math.random() * 100 + 1)
    prevGuess = []
    numGuess = 1 
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11- numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}
