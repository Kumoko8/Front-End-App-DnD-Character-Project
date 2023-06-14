var dndApi = "https://www.dnd5eapi.co/api/"
var generateBtn = document.querySelector("#generate-btn")
raceArray = ["dragonborn","dwarf","elf","gnome","half-elf","half-orc","halfling","human","tiefling"];
classArray = ["barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", "wizard"];
var saveBtn = document.querySelector("#save-btn");

//get class API
function getClass() {
    var classRandom = classArray[Math.floor(Math.random()*classArray.length)];
    
    const classes = dndApi + "classes/" + classRandom 
    fetch(classes)
    .then(function (response) {
        response.json().then(function (data) {
      
        //populate class random into class input
        var classEl = document.querySelector("#class-El")
        classEl.textContent = data.index;
        localStorage.setItem('character class', data.index);

        // Generate random numbers for stats
        var stats = {
            attack: getRandomNumber(1, 100),
            defense: getRandomNumber(1, 100),
            dexterity: getRandomNumber(1, 100),
            charisma: getRandomNumber(1, 100),
            constitution: getRandomNumber(1, 100)
          };
          localStorage.setItem('character stats', JSON.stringify(stats));
  
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
            var raceEl = document.querySelector("#race-El")
            raceEl.textContent = data.index;
            localStorage.setItem('character race', data.index);

            var dragonbornURL = "assets/Dragonborn.jpg";
            var dwarfURL = "assets/Dwarf.jpg";
            var elfURL = "assets/Elf.png";
            var gnomeURL = "assets/Gnome.jpg";
            var halfURL = "assets/Half Elf.jpg";
            var hOrcURL = "assets\half-orc.jpg";
            var halflingURL = "assets/halfling.jpg";
            var humanURL = "assets/human.jpg";
            var teiflingURL = "assets/tiefling.png";

    if (raceRandom  === "dragonborn") {
    var dragonbornIMG = document.createElement("img");
    dragonbornIMG.src = dragonbornURL;
    document.getElementById("race-image").appendChild(dragonbornIMG);
    dragonbornIMG.width = 200;
    dragonbornIMG.height = 200;
    }else if(raceRandom  === "dwarf") {
     var dwarfIMG = document.createElement("img");
     dwarfIMG.src = dwarfURL;
     document.getElementById("race-image").appendChild(dwarfIMG);
     dwarfIMG.width = 200;
     dwarfIMG.height = 200;
    }else if(raceRandom  === "elf") {
      var elfIMG = document.createElement("img");
      elfIMG.src = elfURL;
      document.getElementById("race-image").appendChild(elfIMG);
      elfIMG.width = 200;
      elfIMG.height = 200;
     }else if(raceRandom  === "gnome") {
      var gnomeIMG = document.createElement("img");
      gnomeIMG.src = gnomeURL;
      document.getElementById("race-image").appendChild(gnomeIMG);
      gnomeIMG.width = 200;
      gnomeIMG.height = 200;
     }else if(raceRandom  === "half-elf") {
      var halfIMG = document.createElement("img");
      halfIMG.src = halfURL;
      document.getElementById("race-image").appendChild(halfIMG);
      halfIMG.width = 200;
      halfIMG.height = 200;
     }else if(raceRandom  === "half-orc") {
      var hOrcIMG = document.createElement("img");
      hOrcIMG.src = hOrcURL;
      document.getElementById("race-image").appendChild(hOrcIMG);
      hOrcIMG.width = 200;
      hOrcIMG.height = 200;
     }else if(raceRandom  === "halfling") {
      var halflingIMG = document.createElement("img");
      halflingIMG.src = halflingURL;
      document.getElementById("race-image").appendChild(halflingIMG);
      halflingIMG.width = 200;
      halflingIMG.height = 200;
     }else if(raceRandom  === "human") {
      var humanIMG = document.createElement("img");
      humanIMG.src = humanURL;
      document.getElementById("race-image").appendChild(humanIMG);
      humanIMG.width = 200;
      humanIMG.height = 200;
     }else if(raceRandom  === "tiefling") {
      var tieflingIMG = document.createElement("img");
      tieflingIMG.src = teiflingURL;
      document.getElementById("race-image").appendChild(tieflingIMG);
      tieflingIMG.width = 200;
      tieflingIMG.height = 200;
     }
   
   
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
        localStorage.setItem('character name', firstName);
      })
      
      };
  
  




        //create generate button

        generateBtn.addEventListener("click", function () {
            generateRandomName();
            getClass();
            getRace();
          });


//Get name, class, race, and all stats
saveBtn.addEventListener("click", function(){
  //function saveCharacter() {
    var displayName = localStorage.getItem('character name')
    var displayClass = localStorage.getItem('character class')
    var displayRace = localStorage.getItem('character race')
    var displayStats = JSON.parse(localStorage.getItem('character stats'))
    
    // var newStats = characterProfile.name; 
    // newStats.replace(/"/g, '');
    var characterProfileSection = document.createElement('section');
    var characterName = document.createElement('h3');
    var characterClass = document.createElement('h3');
    var characterRace = document.createElement('h3');
    var characterStats = document.createElement('h3');
    //var characterForm = document.querySelector('#form');
    
    characterProfileData.textContent = JSON.stringify(characterProfile);
    characterProfileSection.appendChild(characterProfileData);
    var profileBlock = document.querySelector("#profile-section");
    profileBlock.appendChild(characterProfileSection);

});



  

// on click reveal form with name, class, race, and stats (maybe sliced)



  