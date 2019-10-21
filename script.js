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

      if(pilotName.value ==="" || copilotName.value ==="" || fuelLevel.value ==="" || cargoMass.value ===""){
         alert("All fields are required!");
         event.preventDefault();
      }else{
         fieldsFilledIn = true;
         console.log("fields are filled in"); 
      }if(isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
         alert("Please enter a number for fuel and cargo")
         event.preventDefault();
      }else{
         fuelAndCargoAreNumbers = true;

      }if(!(isNaN(pilotName.value) && isNaN(copilotName.value)) ){
         alert("Please enter a name for pilot and copilot")
         event.preventDefault();
      }else{
         namesAreStrings = true; 
      } 
      
      if(fieldsFilledIn === true && fuelAndCargoAreNumbers === true && namesAreStrings === true){
         document.getElementById("faultyItems").style.visibility = "visible"; 
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
