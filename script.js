// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      
      let fieldsFilledIn = false;
      let fuelAndCargoAreNumbers = false;
      let namesAreStrings = false; 

      
      //Checks to make sure each field has a value.
      if(pilotName.value ==="" || copilotName.value ==="" || fuelLevel.value ==="" || cargoMass.value ===""){
         alert("All fields are required!");
         event.preventDefault();
      }else{
         fieldsFilledIn = true;


      //Checks to make sure fuel and cargo are numbers.   
      }if(isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
         alert("Please enter a number for fuel and cargo")
         event.preventDefault();
      }else{
         fuelAndCargoAreNumbers = true;

      //Checks to make sure that pilot and copilot names are strings updates status. 
      }if(!(isNaN(pilotName.value) && isNaN(copilotName.value)) ){
         alert("Please enter a name for pilot and copilot")
      }else{
         let pilotNameStatus = document.getElementById("pilotStatus");
         let copilotNameStatus = document.getElementById("copilotStatus");
         namesAreStrings = true;
         console.log("Pilots are ready")
         pilotNameStatus.innerHTML = `Pilot ${pilotName.value} is Ready.`;
         copilotNameStatus.innerHTML =  `Copilot ${copilotName.value} is Ready.`;
      } 
      
      //Turns faulty itmes visible if all fields are filled in correctly.
      if(fieldsFilledIn === true && fuelAndCargoAreNumbers === true && namesAreStrings === true){
         document.getElementById("faultyItems").style.visibility = "visible"; 
      }

      //Changes statement if there is not enough fuel.  
      let fuelLevelStatus = document.getElementById("fuelStatus");
      let launchStatusMessage = document.getElementById("launchStatus");
      let fuelReady = false;
      if(fuelLevel.value<10000){
         console.log("low fuel")
         fuelLevelStatus.innerHTML = "There is not enough fuel for the journey";
         launchStatusMessage.innerHTML = "Shuttle not ready for launch!"; 
         launchStatusMessage.style.color = "red";

      }else{
         console.log("plenty of fuel");
         fuelLevelStatus.innerHTML = "Fuel level high enough for launch.";
         fuelReady = true;
      } 
      
      //Changes statement if cargo is too heavy
      let cargoStatusMessage = document.getElementById("cargoStatus");
      let cargoReady = false;
      if(cargoMass.value>10000){
         console.log("too heavy");
         cargoStatusMessage.innerHTML = "There is too much mass for the shuttle to take off.";
         launchStatusMessage.innerHTML = "Shuttle not ready for launch!"; 
         launchStatusMessage.style.color = "red";
      }else{
         console.log('not too heavy');
         cargoStatusMessage.innerHTML = "Cargo mass low enough for launch.";
         cargoReady = true;
      }   

      //Changes statement to Ready to Launch if Fuel and Cargo are true
      if(cargoReady ==true && fuelReady ==true){
         launchStatusMessage.innerHTML = "Shuttle is ready for launch!"; 
         launchStatusMessage.style.color = "green";
      }

      //Gets planetary data for the mission
      fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
         response.json().then( function(json) {
            const div = document.getElementById("missionTarget");
            div.innerHTML = `
            <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[3].name}</li>
                  <li>Diameter: ${json[3].diameter}</li>
                  <li>Star: ${json[3].star}</li>
                  <li>Distance from Earth: ${json[3].distance}</li>
                  <li>Number of Moons: ${json[3].moons}</li>
               </ol>
               <img src="${json[3].image}">
            `
         });
      } );   
      event.preventDefault();
      });

   });

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
