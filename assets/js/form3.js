const classPrefix = document.body.getAttribute('data-class');

let currentXP = localStorage.getItem(`${classPrefix}CurrentXP`) ? parseInt(localStorage.getItem(`${classPrefix}CurrentXP`)) : 0;
let currentLevel = localStorage.getItem(`${classPrefix}CurrentLevel`) ? parseInt(localStorage.getItem(`${classPrefix}CurrentLevel`)) : 1;
const xpToNextLevel = 10;
const maxLevel = 6;

// Add XP button event listener
document.getElementById("addxp").addEventListener("click", function () {
    currentXP += 1;
    updateExperienceBar();
});

// Update experience bar function
function updateExperienceBar() {
    const experienceFill = document.querySelector(".experienceFill");
    const classProgress = document.getElementById("classProgress");

    let percentage = (currentXP / xpToNextLevel) * 100;
    
    if (currentLevel < 6) {
        if (currentXP >= xpToNextLevel) {
            currentLevel++;
            currentXP = 0;
            percentage = 0;
        }
    } else {
        percentage = 100;
        document.getElementById("addxp").disabled = true; // Ensure the button is disabled
    }

    experienceFill.style.width = percentage + "%";

    classProgress.children[0].textContent = "Current Level: " + currentLevel;
    classProgress.children[1].textContent = "XP needed to next Level: " + (xpToNextLevel - currentXP);

    localStorage.setItem(`${classPrefix}CurrentXP`, currentXP);
    localStorage.setItem(`${classPrefix}CurrentLevel`, currentLevel); 
}

// Initial call to update the experience bar
updateExperienceBar();

// Reset button event listener
document.getElementById("resetxp").addEventListener("click", function() {
    currentLevel = 1; // Reset to level 1
    currentXP = 0; // Reset XP to 0
    localStorage.setItem(`${classPrefix}CurrentLevel`, currentLevel); // Update local storage
    localStorage.setItem(`${classPrefix}CurrentXP`, currentXP); // Update local storage
    updateExperienceBar(); // Update the experience bar display
});