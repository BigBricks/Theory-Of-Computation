var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {

    // !!!! IMPLEMENT ME
    // http://www.ntu.edu.sg/home/ehchua/programming/howto/regexe.html
    // Good Website for the whole of regex but doesnt explain your current code like the below
    // https://regexr.com/
    // Thats the best website for understanding regex
    // Come up with the phone regex
    //Basically the first d / s block is checking for a digit set of 3
    //It also checks if it is enclosed by a set of parenthesis
    // Set 2 is the same but instead of parethensis it checks for hyphens
    //Set 3 is just the final four digits
    const phoneRegex = /\(?(\d{3})\)?[\-|\s]?(\d{3})[\-|\s]?(\d{4})/; 

    // Find matches
    const matches = line.match(phoneRegex);

    // If match found, print number with no spaces, parens, or dashes
    if(matches){
      console.log(matches);
    }
    else {
      console.log("Hah what number")
    }
    // Else print that no number was found
});
