var coinFlip;

do {
    var coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        console.log ("Heads");
    } else {
        console.log ("Tails");
    }
} while (coinFlip === 0);