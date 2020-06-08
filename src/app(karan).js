const express = require('express')

const app = express()

//app.com
//app.com/help
//app.com/about
app.get('', (req, res) => {
    res.send('Hello, Welcome to Express !')
})
app.get('/help', (req, res) => {
    res.send('Help Page')
})
app.get('/about', (req, res) => {
    res.send('About Page')
})
app.get('/weather', (req, res) => {
    res.send('Weather Page')
})

app.listen(3000, () => {
    console.log('Server is Up on port 3000')
})