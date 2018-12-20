const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523048543133630465")
setInterval(function() {
channel.send(`فلوس فلوس كثير | Wings Community`);
}, 30)
})

client.login("NTIzMDQ5NzQ1OTAwMzcxOTc5.DvT7yw.94391pB7v-aRQvdzgmi393S6d-A");
