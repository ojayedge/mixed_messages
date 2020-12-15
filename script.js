//Get random number as input to select random message
function randomNum(input) {
    return Math.floor(Math.random() * input)
};

const messageBank = {
    month: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    city: ['Hong Kong','Tokyo','Hokkaido','London','Manchester','San Franciso','Cupertino'],
    activity: ['Working','Shopping','Having a feast','Ski-ing','Doing a road trip','Watching soccer','Playing Golf','Hiking'],
};

//Store the final display message in an array
let finalMessage = [];

//Generate the components of the final message
let monthMessageIndex = randomNum(messageBank.month.length);
const monthMessage = finalMessage.push(`In the month of ${messageBank.month[monthMessageIndex]},`);

let activityMessageIndex = randomNum(messageBank.activity.length);
const activityMessage = finalMessage.push(`you will be ${messageBank.activity[activityMessageIndex].toLowerCase()}`);

let cityMessageIndex = randomNum(messageBank.city.length);
const cityMessage = finalMessage.push(`in ${messageBank.city[cityMessageIndex]}.`);

console.log(finalMessage.join(` `));