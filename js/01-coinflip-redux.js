var coinFlip;
let run = parseInt(prompt ("How many times should the coin be flipped?"));

for ( let i = 0; i < run; i++ ) {
    var coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        console.log ("Heads");
    } else if (coinFlip === 1) {
        console.log ("Tails");
    }
}

if (isNaN(run) || run <= 0) {
    alert("Invalid answer. Please enter a positive number.");
  }



