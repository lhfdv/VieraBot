const DiscordMusicBot = require("./structures/DiscordMusicBot");
const client = new DiscordMusicBot();

client.build();

module.exports = client; //;-;

var http = require("http");
setInterval(function() {
    http.get("https://viera-bot.herokuapp.com/");
}, 300000); // every 5 minutes (300000)
