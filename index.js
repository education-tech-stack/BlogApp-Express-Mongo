const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const expressSession = require('express-session')
const flash = require('connect-flash')
require("dotenv").config()

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true})

const app = new express()
const ejs = require('ejs')
const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/home')
const getPostController = require('./controllers/getPost')
const storePostController = require('./controllers/storePost')
const newUserController = require('./controllers/newUser')
const storeUserController = require('./controllers/storeUser')
const validateMiddleWare = require('./controllers/validationMiddleWare')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const authMiddleware = require('./controllers/authMiddleware')
const redirectIfAuthenticatedMiddleware = require('./controllers/redirectIfAuthenticatedMiddleware')
const logoutController = require('./controllers/logout')

global.loggedIn = null;

app.set('view engine', 'ejs')
app.use(fileUpload())
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/posts/store', validateMiddleWare)
app.use(expressSession({
    secret: 'keyboard cat'
}))
app.use(flash())
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId
    next()
})

let port = process.env.PORT
if(port == null || port == ""){
    port = 4000;
}
app.listen(port, () => {
    console.log('App listening on port 4000')
})

app.get('/', homeController)

app.get('/post/:id', getPostController)

app.get('/posts/new', authMiddleware, newPostController)

app.post('/posts/store', authMiddleware, storePostController)

app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController)

app.post('/users/register', redirectIfAuthenticatedMiddleware, storeUserController)

app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController)

app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController)

app.get('/auth/logout', logoutController)

app.use((req, res) => res.render('notfound'))