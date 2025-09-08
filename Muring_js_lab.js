// Activity 1: Variables and Functions
// Declare variables for name and age
const name = 'Althea';
const age = 21;

// Function to return a greeting string using template literals
function greetUser (name, age) {
    return `Hello, I am ${name} and I am ${age} years old.`;
}

// Insert the greeting inside the <h1> with id="greeting"
const greetingElement = document.getElementById('greeting');
greetingElement.textContent = greetUser (name, age);

// Activity 2: DOM Manipulation
// Get references to the button and paragraph elements
const button = document.getElementById('colorButton');
const colorDisplay = document.getElementById('colorDisplay');

// Function to generate a random hex color string
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        // Append a random character from letters to the color string
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add click event listener to the button
button.addEventListener('click', function() {
    // Activity 3: Debugging and Enhancement
    console.log('Before color change: Background color is being updated. Get ready for a vibrant surprise!');
    const newColor = getRandomColor(); // Generate a new random color
    document.body.style.backgroundColor = newColor; // Change the page background color
    colorDisplay.textContent = `The current background color is ${newColor}`; // Update the displayed color text
    console.log(`After color change: Woot! The background is now a lovely ${newColor}. Enjoy the view!`);
});