//i: no input
//o: prompts user for guesses

const numberGuessser = () => {
  let rand = Math.floor((Math.random() * 100));
  let tries = 0;
  
  //key to quit
  console.log('Enter \'q\' to quit');
  
  //inits guess
  clPrompt();

  function clPrompt() {
    let prompt = require("prompt-sync")();
    let answer = Number(prompt("Guess a number: "));
    //let tries = 0;
    
    if (answer === 'q') {
      return;
    }

    if (answer === rand) {
      tries += 1;
      console.log(`Correct! You took ${tries} tries.`);
    } else if (answer !== rand) {
      if (typeof answer !== 'number') {
        console.log(`Please enter an appropriate number.`);
        clPrompt();
      } else if (answer > rand) {
        tries += 1;
        console.log(`Too high`);
        clPrompt();
      } else if (answer < rand) {
        tries += 1;
        console.log(`Too low`);
        clPrompt();
      }
    }
  }
};

numberGuessser();
