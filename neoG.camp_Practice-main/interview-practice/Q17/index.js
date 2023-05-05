const read = require("readline-sync");

const newsLink = read.question("Enter the news link: ");
const source = read.question("Enter the source of news: ");

if (source == "whatsapp" || source == "facebook" || source == "telegram") {
     console.log("Don't believe things on FB, Whatsapp and Telegram");
} else {
     console.log(`${newsLink} is valid`);
}