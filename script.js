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
const finalMessage = [];

//Generate the components of the final message
const monthMessageIndex = randomNum(messageBank.month.length);
finalMessage.push(`In the month of ${messageBank.month[monthMessageIndex]},`);

const activityMessageIndex = randomNum(messageBank.activity.length);
finalMessage.push(`you will be ${messageBank.activity[activityMessageIndex].toLowerCase()}`);

const cityMessageIndex = randomNum(messageBank.city.length);
finalMessage.push(`in ${messageBank.city[cityMessageIndex]}.`);

console.log(finalMessage.join(` `));