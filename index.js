// let vs const
// SETTING THE STAGE
// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes

const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent} ${player} lost the game`)
}



// Log out items in an array
// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

function logItems(array) {
   for(let i = 0; i < myCourses.length; i++) {
       console.log(array[i])
   }
}
logItems(myCourses)



// save to localStorage
// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

let myCredits = localStorage.getItem("myCredits")
console.log(myCredits)



// addEventListener and object array
// Log Jane's score when the button is clicked (via data)

let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
const scoreBtn = document.getElementById("score-btn")
// Use addEventListener() to listen for button clicks
scoreBtn.addEventListener("click", function() {
    console.log(data[0].score)
})



// Generate sentence
// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge

function generateSentence(desc, arr) {
    let faveFoods = `My ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for(let i = 0; i < arr.length; i++) {
        if(i === lastIndex) {
            faveFoods += arr[i]
        } else {
            faveFoods += arr[i] + ", "
        }
    }
    return faveFoods
}

const sentence = generateSentence("favorite foods", ["cheeseburger", "pizza", "taco"])
console.log(sentence)



// Render images
// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const container = document.getElementById("container")

function renderImages() {
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img alt="Employee in the company" class="team-img" src="${imgs[i]}">`
    }
    container.innerHTML = imgsDOM
}

renderImages()



// Rounding numbers
// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

const totalPrice = 485.83235632455
const btn = document.getElementById("purchase-btn")
btn.textContent = `Buy $${ totalPrice.toFixed(2) }`



// Convert string to number challenge
// Challenge:
// The toFixed() method doesn't work anymore. Can you make it work?
// Google the error message if you're unsure about how to do it

const totalPrice = "485.83235632455"
const btn = document.getElementById("buy-btn")
btn.textContent = `Buy $${ Number(totalPrice).toFixed(2) }`




