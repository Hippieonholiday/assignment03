let start = parseInt(prompt ("Start countdown from what number?"));

for ( let i = 0; i < start; start-- ) {
    if (start >= 0) {
        console.log (start);
    }
}

if (isNaN(start) || start < 0) {
    alert("Invalid answer. Please enter a number larger than 0.");
  }