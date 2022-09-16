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

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))


// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))




// a) Your answer:
// b) Verify and explain:

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
//console.log(multipliedByTwo)

// a) Your answer: It should multiply the numbers in the array by 2
// b) Verify and explain:

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
//console.log(onlyOdds)

// a) Your answer: It should result in: [11, 13, 15]. It's filtering the odd numbers to be the result by using .filter, and then using number % 2 !== 0 to determine if the numbers are odd.
// b) Verify and explain:

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
//console.log(myCodingSkills.languages[0])

// a) Your answer: This will log JavaScript, as it's asking for the string inside of languages, and it's asking for the index[0] of languages which would be the first string: JavaScript
// b) Verify and explain:

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

// a) Your answer: George, Foxtrot 2022
// b) Verify and explain:
