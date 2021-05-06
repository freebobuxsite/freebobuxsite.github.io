const app = require('express')()

app.get('/', (req, res) => {
    console.log(req.ip)
    res.sendFile('C:/Users/khisp/Desktop/Coding Projects/Free robux scam/index.html')
})
app.post('/post', (req, res) => {
    console.log(req.ip)
    res.send('wow trol xd')
})


app.listen(8080)