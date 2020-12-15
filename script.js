//Get random number as input to select random message
function randomNum(input) {
    return Math.floor(Math.random() * input)
};

let month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let city = ['Hong Kong','Tokyo','Hokkaido','London','Manchester','San Franciso','Cupertino']
let activity = ['Working','Shopping','Eating','Ski-ing','Doing a road trip','Watching soccer','Playing Golf','Hiking'];

console.log(`number of months: ${month.length}`);
console.log(`number of cities: ${city.length}`);
console.log(`number of activities: ${activity.length}`);