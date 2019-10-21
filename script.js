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
         pilotNameStatus.innerHTML = `${pilotName.value} is Ready.`;
         copilotNameStatus.innerHTML =  `${copilotName.value} is Ready.`;
      } 
      
      //Turns faulty itmes visible if all fields are filled in correctly.
      if(fieldsFilledIn === true && fuelAndCargoAreNumbers === true && namesAreStrings === true){
         document.getElementById("faultyItems").style.visibility = "visible"; 
      }

      //Changes statement if there is not enough fuel.  
      let fuelLevelStatus = document.getElementById("fuelStatus");
      if(fuelLevel.value<10000){
         console.log("low fuel")
         fuelLevelStatus.innerHTML = "There is not enough fuel for the journey";
      }else{
         console.log("plenty of fuel")
         fuelLevelStatus.innerHTML = "Fuel level high enough for launch";
      }  
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
