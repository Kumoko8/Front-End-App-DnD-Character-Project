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

        // Generate random numbers for stats
        var stats = {
            attack: getRandomNumber(1, 100),
            defense: getRandomNumber(1, 100),
            dexterity: getRandomNumber(1, 100),
            charisma: getRandomNumber(1, 100),
            constitution: getRandomNumber(1, 100)
          };
  
          // Populate the stats inputs with the generated numbers
          document.querySelector("#attack-input").value = stats.attack;
          document.querySelector("#defense-input").value = stats.defense;
          document.querySelector("#dexterity-input").value = stats.dexterity;
          document.querySelector("#charisma-input").value = stats.charisma;
          document.querySelector("#constitution-input").value = stats.constitution;
  
          getRace();
        });
      });
  }
  
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
    
  
// generate race
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

// generate random name
    
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

          function saveCharacter(){

          var newChar = race + firstName + stats + classes;
          localStorage.setItem("character", newChar);

          }
