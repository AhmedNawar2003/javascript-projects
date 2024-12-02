//Assuming you have the sound files correctly initialized
let sounds = [applause, boo, gasp, tada, victory, wrong];

// Select all buttons
const buttons = document.querySelectorAll("button");

// Attach click event listeners to each button
buttons.forEach((button, index) => {
    button.addEventListener("mouseover", () => {
        stopSounds();  // Stop all sounds before playing the new one
        sounds[index].play(); // Play the sound corresponding to the button
    });
});

function stopSounds() {
    sounds.forEach(element => {
        element.pause();
        element.currentTime = 0;
    });
}
