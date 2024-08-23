console.log('I\'m ready!');

// Iteration 1: Names and Input

// 1.1 Create a variable hacker1 with the driver's name
// 1.2 Print "The driver's name is XXXX"
// 1.3 Create a variable hacker2 with the navigator's name
// 1.4 Print "The navigator's name is "YYYY"
let hacker1 = "Kirti";
console.log("The driver's name is " + hacker1);
let hacker2 = "Lisa";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
// 2.1 Compare the lengths of the names and print the appropriate message
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
  } else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
  } else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
  }

// Iteration 3: Loops
