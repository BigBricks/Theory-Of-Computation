const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const fileEE = fs.readFileSync(filename, "utf8");

// Set up regex
const linkRegex = /(http|https)?:\/\/[^\\'">\s]+/ig;
// const all = new RegExp(linkRegex);
// Find matches
// const read = all.exec(file);
const matches = fileEE.match(linkRegex);
// Print all matches
console.log(matches);

