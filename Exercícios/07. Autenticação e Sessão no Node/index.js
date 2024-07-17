// importar os módulos usados
const express = require('express')
const session = require('express-session')
const passport = require('passport');

// carregar o módulo de autenticação que definimos
require('./authentication')

// criar o app do servidor com o express
const app = express();
app.use(session({
    secret: 'jojoba',
    saveUninitialized:true,
    resave: false
}))
app.use(passport.initialize())
app.use(passport.session())

//configurar as rotas
app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Autenticar com Google</a>')
})

//iniciar o app, escutando na porta 5000
app.listen(5000, () => {
    console.log("Servidor iniciado")
})

//rota secreta
app.get('/segredo', usuarioLogado, (req, res) => {
    res.send(`Segredo aqui... Olá ${req.user.displayName}. <a href=/logout>Logout</a>`)
})

//rota autenticação com google
app.get('/auth/google', 
    passport.authenticate('google', {
        scope: ['email', 'profile']
    })
)

//rota de callback após autenticação com google
app.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: '/segredo',
        failureRedirect: '/auth/falha'
    }) //usamos passport como middleware
)

//rota para falhas de autenticação
app.get('/auth/falha', (req, res) => {
    res.send("Falha de autenticação.")
})

function usuarioLogado(req, res, next) {
    req.user ? next() : res.sendStatus(401)
}

//rota para logout
app.get('/logout', (req, res) => {
    req.session.destroy()
    res.send("Até mais!")
})