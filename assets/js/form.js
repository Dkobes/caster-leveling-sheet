let user = {
    level: 1,
    experience: 0,
    experienceToLevelUp: 5
}

function addxp(points) {
    user.experience += points;
    if (
        user.experience >= user.experienceToLevelUp
    ) {
            levelUp();
        }
}

function levelUp() {
    user.level += 1;
    user.experience = 0;
    user.experienceToLevelUp *= 2; 
    console.log(`Congratulations! You've leveled up to Level ${user.level}!`)
}

document.getElementById('addxp').addEventListener('click', () =>{
    addxp(1);
    updateUI();
})

function updateUI() {
    document.getElementById('level').textContent = user.level;
    document.getElementById('experience').textContent = user.experience;
    document.getElementById('experienceToLevelUp').textContent =user.experienceToLevelUp;
}