class Hangman {
  constructor(words) {
    this.words = words    
    this.secretWord = this.pickWord()
    this.letters = []
    this.guessedLetters = ""
    this.errorsLeft = 10
  }

  pickWord() {
   // OBTENER NÚMERO ALEATORIO PARA SABER LA POSICIÓN
  const randomNumber = Math.random() * this.words.length
  
  // QUITAR DECIMALES
  const positionArr = Math.floor(randomNumber)
  
  // RETORNAR PALABRA ALEATORIA
  return this.words[positionArr]
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if(keyCode >= 65 && keyCode <= 90) {
      return true
    } 
       
    return false   
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    // SI LA LETRA YA SE PRESIONÓ, ENTONCES, DEVUELVE UN FALSE
    if(this.letters.includes(letter)){
      return false
       }
  
  // SI NO SE HA PRESIONADO, ENTONCES, DEVUELVE UN TRUE
      return true
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    return this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft -= 1
    if(!this.letters.includes(letter)) {
      this.letters.push(letter)
    }
    return
  }

  checkGameOver() {
    // ... your code goes here
    if(this.errorsLeft > 0){
      return false
    }
    return true
  }

  checkWinner() {
    // ... your code goes here
  for(let i=0; i<this.secretWord.length; i++){
    if(this.guessedLetters.indexOf(this.secretWord[i])===-1){
      return false
    }
  }
  return true
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});