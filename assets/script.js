var dndApi = "https://www.dnd5eapi.co/api/"
var generateBtn = document.querySelector("#generate-btn")
raceArray = ["dragonborn","dwarf","elf","gnome","half-elf","half-orc","halfling","human","tiefling"];
classArray = ["barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", "wizard"];
var saveBtn = document.querySelector("#save-btn");
var characterProfile = {
    
}
var profileSection = document.querySelector("#profile-section");
var infoEl = document.querySelector("#info");
var statsEl = document.querySelector("#stats");
var storedCharacter =[ ]
var savedCharacters = [ ]


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
        // localStorage.setItem('character class', data.index);
        characterProfile.class = data.index;
        classEl.textContent = upperCase(data.index);
      

        
        
          getRace();
        });
      });
    }
  // Generate random numbers for stats

function getStats(){
  var stats = {
    attack: getRandomNumber(1, 20),
    defense: getRandomNumber(1, 20),
    dexterity: getRandomNumber(1, 20),
    charisma: getRandomNumber(1, 20),
    constitution: getRandomNumber(1, 20)
  };
  characterProfile.stats = stats;

  // Populate the stats inputs with the generated numbers
  document.querySelector("#attack-input").value = stats.attack;
  document.querySelector("#defense-input").value = stats.defense;
  document.querySelector("#dexterity-input").value = stats.dexterity;
  document.querySelector("#charisma-input").value = stats.charisma;
  document.querySelector("#constitution-input").value = stats.constitution;
  
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
  
// generate race
function getRace(){
    var raceRandom = raceArray[Math.floor(Math.random()*raceArray.length)];
    const races = dndApi + "races/" + raceRandom 
    fetch(races)
    .then(function (response) {
        response.json().then(function (data) {
            var raceEl = document.querySelector("#race-El")
            characterProfile.race = data.index;
            raceEl.textContent = upperCase(data.index);
// created an object with all the images as values
            var raceImages = {
              dragonborn: "assets/Dragonborn.jpg",
              dwarf:"assets/Dwarf.jpg",
              elf:"assets/Elf.png",
              gnome:"assets/Gnome.jpg",
              "half-elf":"assets/Half-elf.jpg",
              "half-orc":"assets/half-orc.jpg",
               halfling:"assets/halfling.jpg",
              human:"assets/human.jpg",
              tiefling:"assets/tiefling.png"
            };
// created function to hide all other pictures, basically hide the images til choice is picked from index             
                var allImages = document.querySelectorAll("#race-image img");
                allImages.forEach(function(img){
                  img.style.display = "none";
                });
//attaches image to chosen index from API and appends it to HTML               
                var imageR = raceImages[data.index];
        
                var img = document.getElementById(data.index);

                if (!img) {
                  img = document.createElement("img");
                  img.id = data.index;
                  img.src = imageR;
                  img.alt = data.Index;
                  document.getElementById("race-image").appendChild(img)
                }
               

//sets some styling to image                
                img.style.display = "block";

          img.width = 200;
          img.style.border = "10px silver groove"
        img.style.borderRadius = "80px 80px 80px 80px"        
        img.style.boxShadow = "0px 0px 25px blue"                                    
      })


            
})
    }

  function persistentCharacterRendering (){
      var characterData = JSON.parse(localStorage.getItem(characterProfile.name));
      if (characterData)
        storedCharacter = characterData
        displayCharacterOnPage();
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
        characterProfile.name = firstName;

        })
};
  
 function displayCharacterOnPage (){
    infoEl.innerHTML = " "
    var displayCharacter = JSON.parse(localStorage.getItem("characters"));
console.log(displayCharacter)
for (let i = 0; i < displayCharacter.length; i++) {
  var displayCharacterName = document.createElement("section");
  var displayCharacterClass = document.createElement("section");
  var displayCharacterRace = document.createElement("section");
  var displayCharacterStats = document.createElement("section");
displayCharacterName.textContent = displayCharacter[i].name
displayCharacterClass.textContent = displayCharacter[i].class
displayCharacterRace.textContent = displayCharacter[i].race
displayCharacterStats.textContent = `Stats ${displayCharacter[i].stats}`
infoEl.appendChild(displayCharacterName);
infoEl.appendChild(displayCharacterClass);
infoEl.appendChild(displayCharacterRace);

}
    // var displayCharacterClassSection = document.createElement("section");
    // var displayCharacterRaceSection = document.createElement("section");
  
    // var displayCharacterClassTitle = document.createElement("h3");
    // var displayCharacterRaceTitle = document.createElement("h3");
  
    // var displayCharacterClassValue = document.createElement("h3");
    // var displayCharacterRaceValue = document.createElement("h3");
  
    // var displayCharacterStatsSection = document.createElement("section");
    // var displayCharacterStatsAttack = document.createElement("h3");
    // var displayCharacterStatsDefense = document.createElement("h3");
    // var displayCharacterStatsDexterity = document.createElement("h3");
    // var displayCharacterStatsCharisma = document.createElement("h3");
    // var displayCharacterStatsConstitution = document.createElement("h3");
    
    //display each property in each section
  
    // displayCharacterNameTitle.textContent = "Name: ";
    // displayCharacterClassTitle.textContent = "Class: ";
    // displayCharacterRaceTitle.textContent = "Race: ";
  
    // displayCharacterNameValue.textContent = displayCharacter.name;
    // displayCharacterClassValue.textContent = displayCharacter.class;
    // displayCharacterRaceValue.textContent = displayCharacter.race;
  
  
    // displayCharacterStatsSection.textContent = "Stats: "
    // //create each individual stat
    
    // displayCharacterStatsAttack.textContent = "Attack: " + displayCharacter.stats.attack;
    // displayCharacterStatsDefense.textContent = "Defense: " + displayCharacter.stats.defense;
    // displayCharacterStatsDexterity.textContent = "Dexterity: " + displayCharacter.stats.dexterity;
    // displayCharacterStatsCharisma.textContent = "Charisma: " + displayCharacter.stats.charisma;
    // displayCharacterStatsConstitution.textContent = "Constitution: " + displayCharacter.stats.constitution;
  
  
    // nameClassRaceSection.appendChild(displayCharacterNameSection);
    // displayCharacterNameSection.appendChild(displayCharacterNameTitle);
    // displayCharacterNameSection.appendChild(displayCharacterNameValue)
  
    // nameClassRaceSection.appendChild(displayCharacterClassSection);
    // displayCharacterClassSection.appendChild(displayCharacterClassTitle);
    // displayCharacterClassSection.appendChild(displayCharacterClassValue);
  
    // nameClassRaceSection.appendChild(displayCharacterRaceSection);
    // displayCharacterRaceSection.appendChild(displayCharacterRaceTitle);
    // displayCharacterRaceSection.appendChild(displayCharacterRaceValue);
  
    
    // statsSection.appendChild(displayCharacterStatsSection);
    // displayCharacterStatsSection.appendChild(displayCharacterStatsAttack);
    // displayCharacterStatsSection.appendChild(displayCharacterStatsDefense);
    // displayCharacterStatsSection.appendChild(displayCharacterStatsDexterity);
    // displayCharacterStatsSection.appendChild(displayCharacterStatsCharisma);
    // displayCharacterStatsSection.appendChild(displayCharacterStatsConstitution);
  
    // document.getElementById("profile-section").style.color = "white";
    // displayCharacterStatsSection.style.fontWeight = "bold"
    // displayCharacterStatsSection.style.padding = "5%"
    // nameClassRaceSection.style.padding = "5%"
    // displayCharacterNameTitle.style.fontWeight = "bold"
    // displayCharacterClassTitle.style.fontWeight = "bold"
    // displayCharacterRaceTitle.style.fontWeight = "bold"

    
    


  }


  


        //create generate button

        generateBtn.addEventListener("click", function () {
            generateRandomName();
            getClass();
            getRace();
            getStats();
          });


//Get name, class, race, and all stats
saveBtn.addEventListener("click", function(){

  savedCharacters = JSON.parse(localStorage.getItem("characters"))||[]
  let character = characterProfile
  savedCharacters.push(character)
  console.log(savedCharacters);
  localStorage.setItem("characters", JSON.stringify(savedCharacters))
  
  displayCharacterOnPage();

  localStorage.setItem(characterProfile.name, JSON.stringify(characterProfile) )
  //stats from localstorage
  // var characterProfile = {
  //   name: localStorage.getItem('character name'),
  //   class: localStorage.getItem('character class'),
  //   race: localStorage.getItem('character race'),
  //   stats: JSON.stringify(localStorage.getItem('character stats'))
  // }
    // localStorage.setItem('character name', firstName);
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
   

  
//     var displayName = localStorage.getItem('character name')
//     var displayClass = localStorage.getItem('character class')
//     var displayRace = localStorage.getItem('character race')
//     var displayStats = JSON.stringify(localStorage.getItem('character stats'))
//     //create sections for display

});



  

// on click reveal form with name, class, race, and stats (maybe sliced)


function upperCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

persistentCharacterRendering();
displayCharacterOnPage();


function clearInfo() {
  document.getElementById("name-El").value = "";
  document.getElementById("class-El").value = "";
  document.getElementById("race-El").value = "";
  document.getElementById("attack-input").value = "";
  document.getElementById("defense-input").value = "";
  document.getElementById("dexterity-input").value = "";
  document.getElementById("charisma-input").value = "";
  document.getElementById("constitution-input").value = "";
}

saveBtn.addEventListener("click", function(){
  clearInfo()
});
