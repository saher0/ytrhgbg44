const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("563016583182680124")
setInterval(function() {
channel.send(`HACKED BY ZIKXO`);
}, 30)
})

client.login(process.env.BOT_TOKEN);