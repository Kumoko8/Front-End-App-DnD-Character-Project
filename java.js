var dndApi = "https://www.dnd5eapi.co/api/"
var generateBtn = document.querySelector("#generate-btn")
raceArray = ["dragonborn","dwarf","elf","gnome","half-elf","half-orc","halfling","human","tiefling"];
classArray = ["barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", "wizard"];


//get class API
function getClass() {
    var classRandom = classArray[Math.floor(Math.random()*classArray.length)];
    
    const classes = dndApi + "classes/" + classRandom 
    fetch(classes)
    .then(function (response) {
        response.json().then(function (data) {
            console.log(data);
        //populate class random into class input
        var classEl = document.querySelector("#class-El")
        classEl.textContent = data.index;
       
        })
    })
}
function getRace(){
    var raceRandom = raceArray[Math.floor(Math.random()*raceArray.length)];
    const races = dndApi + "races/" + raceRandom 
    fetch(races)
    .then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            var raceEl = document.querySelector("#race-El")
            raceEl.textContent = data.index;
            

})
    })
}

// var raceEl = document.querySelector("#race-El")
//         raceEl.textContent = data.level;
    
function generateRandomName() {
    var apiUrl = "https://randomuser.me/api/";
    fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var firstName = data.results[0].name.first;
        var characterNameEl = document.querySelector("#name-El");
        characterNameEl.textContent = firstName;
      })
      
      };
  
  




        //create button

        generateBtn.addEventListener("click", function () {
            generateRandomName();
            getClass();
            getRace();
          });