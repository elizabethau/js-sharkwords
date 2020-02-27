const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const WORDS = [
  'strawberry', 'orange', 'apple', 'banana', 'pineapple', 'kiwi',
  'peach', 'pecan', 'eggplant', 'durian', 'peanut', 'chocolate'
];


let numWrong = 0;


/** Loop over the chars in `word` and create divs. */
const createDivsForChars = (word) => {
  for (let i = 0; i <word.length ; i ++){
    /*console.log(i);
    console.log(word[i]);*/
    const letter = word[i];
    $('#word-container').append(`<div class="letter-box ${letter}"></div>`);
  }
};


/** Loop over each letter in `ALPHABET` and generate buttons. */
const generateLetterButtons = () => {
  // Replace this with your code
  for(let i = 0; i < ALPHABET.length; i++){
    $("#letter-buttons").append(`<button>${ALPHABET[i]}</button>`);
  }
};


/** Set the `disabled` property of `buttonEl` to `true.
 *
 * `buttonEl` is an `HTMLElement` object.
 */
const disableLetterButton = (buttonEl) => {
  // Replace this with your code
  const button = $(buttonEl);
  button.attr('disabled', true);

};


/** Return `true` if `letter` is in the word. */
const isLetterInWord = (letter) => {
  // Replace this with your code
//   if ($(`div.${letter}` === undefined)){
//     return false;
//     console.log(letter);
//   }
//   else {
//     return true;
//   }
// }

return $(`<div class=${letter}>`) !== undefined;

}
/** Called when `letter` is in word. Update contents of divs with `letter`. */
const handleCorrectGuess = (letter) => {
  // Replace this with your code
};


/** Called when `letter` is not in word.
 *
 * If the shark gets the person, disable all buttons and show the "play again"
 * message. Otherwise, increment `numWrong` and update the shark image.
 */
const handleWrongGuess = () => {
  // Replace this with your code
};


/** Reset game state. Called before restarting the game. */
const resetGame = () => {
  // Replace this with your code
};



/** This is like if __name__ == '__main__' in Python */

(function startGame() {
  // For now, we'll hardcode the word that the user has to guess.
  const word = 'hello';

  createDivsForChars(word);
  generateLetterButtons();

  $('button').on('click', (evt) => {
    const clickedBtn = $(evt.target);
    disableLetterButton(clickedBtn);

    const letter = clickedBtn.html();

    if (isLetterInWord(letter)) {
      handleCorrectGuess(letter);
    } else {
      handleWrongGuess(letter);
    }
  });

  $('#play-again').on('click', () => {
    resetGame();
    startGame();
  });
})();
