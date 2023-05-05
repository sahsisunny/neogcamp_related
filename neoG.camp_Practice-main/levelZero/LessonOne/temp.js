const fs = require('fs');

// Function to read json file
function readData() {
     const data = fs.readFileSync('C:\\Users\\ShreeRam\\Documents\\GitHub\\neoG.camp_Practice\\levelZero\\LessonOne\\score.json');
     const jsonData = JSON.parse(data);
     console.log(jsonData.userDetails.name);

}

console.log(readData());