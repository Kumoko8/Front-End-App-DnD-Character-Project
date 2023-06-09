var dndApi = "https://www.dnd5eapi.co/api/classes/"
var generateBtn = document.querySelector("#generate-btn")
var classRandom = classArray[Math.floor(Math.random()*classArray.length)];
var levelRandom = levelArray[Math.floor(Math.random()*levelArray.length)];
levelArray = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
classArray = ["barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", "wizard"];
//get class API
function getClass() {
    const classes = dndApi + classRandom + "/levels/" + levelRandom
    fetch(classes)
    .then(function (response) {
        response.json().then(function (data) {
            console.log(data);

        })
    })
}

    





        //create button

        generateBtn.addEventListener("click", getClass);