// Initialize Variables below
let date = "Monday 2019-03-18"
let time = "10:05:34AM"
let astronautCount = 7
let astronautStatus = Ready 
let averageAstronautMassKg = 80.7
let crewMassKg = astronautCount + averageAstronautMassKg
let fuelMassKg = 760000
let shuttleMassKg = 74842.21
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg
let maxMassLimit = 850000
let fuelTempCelsius = -225
let minFuelTemp = -300
let maxFuelTemp = -150
let fuelLevel = "100%" 
let weatherStatus = clear
let preparedForLiftoff = true 

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log("Astronaut count" + astronautCount)
} else (preparedForLiftoff = false)
// add logic below to verify all astronauts are ready
if (astronautStatus === "Ready"){
    console.log("Crew Ready")
} else (preparedForLiftoff = false)
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (crewMassKg < maxMassLimit){
    console.log("Crew Mass" + totalMassKg)
} else (preparedForLiftoff = false)
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius >= -300 && fuelTempCelsius <= -150){
    console.log("fuel temperature is" + fuelTempCelsius)
} else(preparedForLiftoff = false)
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%"){
    console.log("Fuel temperature is" + fuelLevel)
} else (preparedForLiftoff = false)
// add logic below to verify the weather status is clear
if (weatherStatus === "clear"){ 
    console.log("Weather status" + weatherStatus)
}else (preparedForLiftoff = false)
// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftoff = true){
    console.log("All systems are a go!" + "Have a Safe trip")
}else {
    console.log("mission failed")
}