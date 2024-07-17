const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

let userNames = []

app.use(cors({
    origin: '*'
}));

app.use(express.json())

app.post('/check-user', (req, res) => {    
    let username = req.body.username    
    if(userNames.indexOf(username) > -1) {
        res.status(200).json({userExists: true})
    } else {
        res.status(200).json({userExists: false})
    }
})

let usersList = []

app.post('/create-user', (req, res) => {
    const account = req.body
    usersList.push(account)
    userNames.push(account.usuario)
    console.log(account)
    res.status(200).json(account)
})

let loggedUser = null

app.post('/log-user', (req, res) => {
    const {email, senha} = req.body
    const user = usersList.find(account => account.email === email && account.senha === senha)
    if (user){
        loggedUser = user
        res.status(200).json({accountExists: true, loggedUser})
    } else {
        res.status(200).json({accountExists: false})
    }
})

app.listen(3125, () => console.log("Listening..."))