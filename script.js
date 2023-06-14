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
          classEl.textContent = upperCase(data.index);
        localStorage.setItem('character class', data.index);

        // Generate random numbers for stats
        var stats = {
            attack: getRandomNumber(1, 20),
            defense: getRandomNumber(1, 20),
            dexterity: getRandomNumber(1, 20),
            charisma: getRandomNumber(1, 20),
            constitution: getRandomNumber(1, 20)
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
          raceEl.textContent = upperCase(data.index);
            localStorage.setItem('character race', data.index);
            

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

  //stats from localstorage
    var displayName = localStorage.getItem('character name')
    var displayClass = localStorage.getItem('character class')
    var displayRace = localStorage.getItem('character race')
    var displayStats = JSON.stringify(localStorage.getItem('character stats'))
    //sections for display
    var profileSection = document.querySelector("#profile-section");
    var characterProfileSection = document.createElement('section');
//display headings for storage data
    var characterName = document.createElement('h3');
    var characterClass = document.createElement('h3');
    var characterRace = document.createElement('h3');
    var characterStats = document.createElement('h3');
    //var characterForm = document.querySelector('#form');
    //create sections for each stat
    var nameSpan = document.createElement("span")
    var classSpan = document.createElement("span")
    var raceSpan = document.createElement("span")
    var statsSpan = document.createElement("span")
//append the span to each heading
    characterName.appendChild(nameSpan);
    characterClass.appendChild(classSpan);
    characterRace.appendChild(raceSpan);
    characterStats.appendChild(statsSpan);
    //set the content of each span
    nameSpan.textContent = "Name: " + displayName
    classSpan.textContent = "Class: " + displayClass
    raceSpan.textContent = "Race: " + displayRace
    statsSpan.textContent = "Stats: " + displayStats

// append each heading to the section
    characterProfileSection.appendChild(characterName);
    characterProfileSection.appendChild(characterClass);
    characterProfileSection.appendChild(characterRace);
    characterProfileSection.appendChild(characterStats);

    //set the content of the html section to the profile section
    
    profileSection.appendChild(characterProfileSection);


    
    //characterProfileData.textContent = JSON.stringify(characterProfile);
    
    

});



  

// on click reveal form with name, class, race, and stats (maybe sliced)


function upperCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
