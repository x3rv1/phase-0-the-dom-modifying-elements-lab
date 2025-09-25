// Write your code here!// Remove the <main id="main"> element
const main = document.getElementById("main");
if (main) {
  main.remove();
}

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set its id to 'victory'
newHeader.id = "victory";

// Set its inner text to your name and message
newHeader.textContent = "Peter is the champion";

// Append it to the body
document.body.appendChild(newHeader);
