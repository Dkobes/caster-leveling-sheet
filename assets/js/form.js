const classesData = JSON.parse(localStorage.getItem("classesData")) || {
    Wizard: { level: 1, xp: 0 },
    Healer: { level: 1, xp: 0 },
    Druid: { level: 1, xp: 0},
    Bard: { level: 1, xp: 0},
}

const xpToNextLevel = 10;
const maxLevel = 6;

function updateExperienceBar(className) {
    const experienceFill = document.querySelector(`.${className} .experienceFill`);
    const classProgress = document.getElementById(`${className}Progress`);

    let currentXP = classesData[className].xp;
    let currentLevel = classesData[className].level;

    let percentage = (currentXP / xpToNextLevel) * 100;

    if (currentXP >= xpToNextLevel && currentLevel < maxLevel) {
        currentLevel++;
        currentXP = 0;
        percentage = 0;
    }

    experienceFill.style.width = percentage + "%";
    classProgress.children[0].textContent = "Current Level: " + currentLevel;
    classProgress.children[1].textContent = "XP needed to next Level: " + (xpToNextLevel - currentXP);

    classesData[className].level = currentLevel;
    classesData[className].xp = currentXP;
    localStorage.setItem("classesData", JSON.stringify(classesData));
}

document.querySelectorAll(".addxp").forEach(button => {
    button.addEventListener("click", function() {
        const className = this.dataset.class;
        if (classesData[className]) {
            classesData[className].xp += 1;
            updateExperienceBar(className);
        }
    })
})

for (const className in classesData) {
    updateExperienceBar(className);
}
