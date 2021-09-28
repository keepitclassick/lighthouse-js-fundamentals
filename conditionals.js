//checking what to wear according to the weather
const temperature = 16;

if (temperature < 0) {
  console.log('Make sure you pick out a scarf!');
} else if (temperature < 15) {
  console.log('Short sleeves won\'t cut it!');
} else {
  console.log('Short sleeves are fine.');
}

console.log('Now you\'re ready to go outside!');

//checking whether a citizen is over 18 AND a citizen
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log('You are eligible to vote.');
}

//checking if it's under -40 OR over 40

if(temperature < -40 || temperature > 40){
  console.log('Maybe going outside isn\'t such a great idea');
}

//checking if it is NOT raining
if (!raining) {
  console.log('Leave your umbrella at home');
}




 