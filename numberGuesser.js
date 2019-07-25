//i: no input
//o: prompts user for guesses

const numberGuessser = () => {
  let rand = Math.floor((Math.random() * 100));
  let tries = 0;

  const clPrompt = () => {
    let prompt = require("prompt-sync")();
    
    let answer = prompt("Guess a number: ");
    
    if (!isNaN(Number(answer))) {
      answer = Number(answer);
    }

    //let tries = 0;
    if (answer === 'q') {
      return;
    }

    if (answer === rand) {
      tries += 1;
      console.log(`Correct! You took ${tries} tries.`);

    } else if (answer !== rand) {
      
      if (isNaN(answer)) {
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
  //key to quit
  console.log('Enter \'q\' to quit');

  //inits guess
  clPrompt();
};

numberGuessser();
