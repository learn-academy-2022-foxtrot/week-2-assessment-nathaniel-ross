// ASSESSMENT 2: Coding Practical Questions with Jest



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.
// First I'll make my jest test using divisibleByThree as the name of my function. And then using divisibleByThree on each object to see if it will equal the desired output of number is divisible or not divisible by three.

describe("divisibleByThree", () => {
    it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not.", () => {
        expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
        expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
        expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
    })
})
// ReferenceError: divisibleByThree is not defined
// good error!

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// First I will create a function called divisibleByThree with the parameter of (object)
// Then I will create a conditional statement that takes the (object) and if divisble by three using (% 3 === 0) then return using string interpolation that the ${object.number} is divisble by three.
// Then I will create an else if for the opposite, if it's not divisble by three using (% 3 !== 0) then it will return another string interpolation that the ${object.number} is NOT divisible by three.
// Finally a catch all else statement to return an "error" for any other outcome.

const divisibleByThree = (object) => {
  if (object.number % 3 === 0) {
    return `${object.number} is divisible by three`
  } else if (object.number % 3 !== 0) {
    return `${object.number} is not divisible by three`
  } else {
    return "error"
  }
 
} 

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
// First I'll create my jest test using capitalWords as the name of my function. Then using the capitalWords function on randomNouns1 & 2, toEqual the desired capitlized arrays.

describe("capitalWords", () => {
    it("returns an array with all the words capitalized.", () => {
        expect(capitalWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capitalWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})
// ReferenceError: capitalWords is not defined
// Good error

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.
// First I will create a function called capitalWords
// Then I will return a new array using.map
// Then using charAt(0) to target the first index of each string, the first letter that we need to capitalize.
// To then capitalize the index 0 of that string we'd use .toUpperCase()
// Then we'd use slice(1) and .toLowerCase() to ensure that the rest of the strings in the array are not capitalized like the first letters are.


const capitalWords = (array) => {
    return array.map((value) => {
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    })
}

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
// First I'll create my test using indexVowel as the function name, and using indexVowel on each vowelTester, we want them toEqual the number of the index in which the first vowel is in each string.

describe("indexVowel", () => {
    it("returns an array with all the words capitalized.", () => {
        expect(indexVowel(vowelTester1)).toEqual(1)
        expect(indexVowel(vowelTester2)).toEqual(0)
        expect(indexVowel(vowelTester3)).toEqual(2)
    })
})

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// ReferenceError: indexVowel is not defined
// Good error

// b) Create the function that makes the test pass
// First I created a function called indexVowel
// Then we'll create a for loop with the variable i = 0, and define the condition i must be less than the length of the string with <str.length, and finally i++ which will increase a value each time the loop has been executed.
// then a conditional if statement that if the string[i] has the a,e,i,o, or u vowels (seperated by || OR) then it will return i.


const indexVowel = (str) => {
    for (let i = 0; i <str.length; i++) {
        if (
            str[i] === "a" || 
            str[i] === "e" ||
            str[i] === "i" ||
            str[i] === "o" ||
            str[i] === "u") {
            return i
          }
        }
      }

