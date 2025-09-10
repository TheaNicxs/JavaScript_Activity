// Activity 1: Variables and Functions
// Declare variables for name and age
const name = 'Althea';
const age = 21;

// Function to return a greeting string using template literals
function greetUser(name, age) {
    return `Hello, I am ${name} and I am ${age} years old.`;
}

// Print the greeting message to the console
console.log(greetUser(name, age));

// Activity 2 & 3: DOM Manipulation and Debugging
// Attempt to get references to the button and paragraph elements
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

// Add event listener to the button to change background color on click
button.addEventListener('click', () => {
    console.log('Before color change: Background color is being updated. Get ready for a vibrant surprise!');
    const newColor = getRandomColor(); // Generate a new random color
    document.body.style.backgroundColor = newColor; // Change the page background color
    colorDisplay.textContent = `The current background color is ${newColor}`; // Update the displayed color text
    console.log(`After color change: Woot! The background is now a lovely ${newColor}. Enjoy the view!`);
});