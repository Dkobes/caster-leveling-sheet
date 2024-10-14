let currentXP = localStorage.getItem("currentXP") ? parseInt(localStorage.getItem("currentXP")) : 0;
let currentLevel = localStorage.getItem("currentLevel") ? parseInt(localStorage.getItem("currentLevel")) : 1;
const xpToNextLevel = 10;

document.getElementById("addxp").addEventListener("click", function() {
    currentXP += 1;
    updateExperienceBar();
})

function updateExperienceBar() {
    const experienceFill = document.querySelector(".experienceFill");
    const classProgress = document.getElementById("classProgress");

    let percentage = (currentXP / xpToNextLevel) * 100; 

    if (currentXP >= xpToNextLevel) {
        currentLevel++;
        currentXP = 0;
        percentage = 0;
    }

    experienceFill.style.width = percentage + "%";
    classProgress.children[0].textContent = "Current Level: " + currentLevel;
    classProgress.children[1].textContent = "XP needed to next Level: " + (xpToNextLevel - currentXP);

    localStorage.setItem("currentLevel", currentLevel);
    localStorage.setItem("currentXP", currentXP);
}

updateExperienceBar();
