// Declare and assign the variables below
let nameOfTheShuttel = "Determination"
let shuttelSpeedMph = 17500
let distanceToMarsKm = 225000000
let distanceToMoonKm = 384400
let milesPerKm = 0.621
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof nameOfTheShuttel)
console.log(typeof shuttelSpeedMph)
console.log(typeof distanceToMarsKm)
console.log(typeof distanceToMoonKm)
console.log(typeof milesPerKm)
// Calculate a space mission below
let milesToMars = distanceToMarsKm * milesPerKm;
let hoursToMars = milesToMars / shuttelSpeedMph;
let daysToMars = hoursToMars / 24
// Print the results of the space mission calculations below
console.log( nameOfTheShuttel  +  "will take" +  daysToMars  +  "days to reach Mars.")
// Calculate a trip to the moon below
let milesToMoon = distanceToMoonKm * milesPerKm;
let hoursToMoon = milesToMoon / shuttelSpeedMph;
let daysToMoon = hoursToMoon / 24
// Print the results of the trip to the moon below
console.log(nameOfTheShuttel + "will take" + daysToMoon+ "days to reach the Moon")