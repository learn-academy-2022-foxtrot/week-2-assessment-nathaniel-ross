// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Foxtrot 2022"
//console.log(cohort.split(""))

// a) Your answer: Using .split should split the string "Foxtrot 2022" into an array, seperating every character like ["F", "o", "x", "t" etc..]
// b) Verify and explain: It did split into a seperated array like I assumed, however I got the syntax wrong, it should be single apostrophes instead of quotes around each character, like so: ['F', 'o', 'x', 't' etc..]

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: The console log should return the string "Hello, LEARN Student
// b) Verify and explain: It instead returned 'undefined'. It took me a good while to realize what was missing in this code, until I realized it was in the answer that I gave, it returned undefined because there was no 'return' in the function. All we need is a return right before the string interpolation of `Hello, ${name}!`. Once that is added we'll get our desired console.log of "Hello, LEARN student"

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: It should make a new array with the previous numbers inside multiplied by 2.
// b) Verify and explain: It did return [ 8, 10, 12, 14, 16] each number multiplied by 2 in a new array using the .map function and then using number * 2 to multiply by 2.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: It should just bring in the odd numbers 11,13,15.
// b) Verify and explain: It did create a new array of [11,13,15]. It's filtering the odd numbers in the new array to be the result by using .filter, and then using number % 2 !== 0 to see if they are NOT divisible by 2 using !== 0 which would result in only the three odd numbers.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: This should just log JavaScript
// b) Verify and explain: This logged JavaScript, as it's asking for the string inside of languages array, and it's asking for the index[0] of languages which would be the first string: JavaScript

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: This should log George, Foxtrot 2022
// b) Verify and explain: It logged: Learn { student: 'George', cohort: 'Foxtrot', year: 2022 } While it did pull George, Foxtrot, and 2022 like I thought, it returned it as class object having the this.variableNames (student, cohort, and year) show up as that's what the constructor was meant to display.
