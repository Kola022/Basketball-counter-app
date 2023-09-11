



let countEl = document.getElementById("count-El");
let count = 0;
let saveEl = document.getElementById("save-el")
console.log(countEl)



function increment() {
   count = count + 1;
   countEl.textContent = count;


}

function decrement() {
   count = count - 1;
   countEl.textContent = count;


}


function save() {
   let countStr = count + " - "

   saveEl.textContent += countStr
   
   count = 0

   countEl.textContent = count; // to reset count = 0

// Google:
// .innerText = ".textContent" alternative mdn
     
}

/* 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.innerText += countStr
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
}*/

let username = "mosespac";
let message = "we have logged in";

let messageToUser = message + "," + username + "!"

console.log(messageToUser)

let name = "Adekola Olagunju";
let greeting = "Hi, my name is ";
let myGreeting = greeting + name;

console.log(myGreeting);

/* welcomeEl = document.getElementById("welcome-el")

let name = "Per Harald Borgen"
let greeting = "Welcome back "

welcomeEl.innerText = greeting + name*/

// Add an emoji to the end!
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

let welcomeEl = document.getElementById("welcome-el");

let fullName = "Adekola Olagunju";
let mainGreeting = "Welcome back ";
const waveEmoji = "\u{1F44B}";

welcomeEl.textContent = mainGreeting + fullName;

// welcomeEl.textContent = welcomeEl.textContent + waveEmoji; same as below

//count = count + 1; is same as count += 1;

welcomeEl.textContent += waveEmoji;

/* 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.innerText += countStr
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
}*/

let myPoints = 3; 

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

function add3Points() {

    myPoints += 3;
}

function remove1Points() {

    myPoints -= 1;
}

add3Points()
add3Points()
add3Points()
remove1Points()
remove1Points()

// Call the functions to that the line below logs out 10
console.log(myPoints);


//JS ************************
// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

/*let errorParagraph = document.getElementById("error")
console.log(errorParagraph)

function purchase() {
    console.log("button clicked")
    errorParagraph.textContent = "Something went wrong, please try again"
}*/

//HTML *****************************

/*<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <img src="images/shoe.jpeg" alt="Nike shoe">
        <p>Nike shoe</p>
        <button onclick="purchase()">Purchase - $149</button>
        <p id="error"></p>
        <script src="index.js"></script>
    </body>
</html>*/

//****************************
/*<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <span id="num1-el"></span>
        <span id="num2-el"></span>
        <br>
        <button onclick="add()">Add</button>
        <button onclick="subtract()">Subtract</button>
        <button onclick="divide()">Divide</button>
        <button onclick="multiply()">Multiply</button>
        <br>
        <span id="sum-el">Sum: </span>
        <script src="index.js"></script>
    </body>
</html>*/


/*let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
/*let sumEl = document.getElementById("sum-el")

function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}

function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
}

function divide() {
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
}

function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
}


//*********************************** */