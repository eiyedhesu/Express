const express = require ('express')
const app = express ()
// const router = require('./routes')
// const log = require('./middlewares/logger')
const path = require ('path')
const view = __dirname + "/views/"
const public= __dirname + "/public/"



app.get('/', function(req, res){
    res.sendFile(path.join(view + "home.html"))
})
app.get('/about', (req, res)=> {
    res.sendFile(path.join(view + "about.html"))
})
app.get('/contact', (req, res)=> {
    res.sendFile(path.join(view + "contact.html"))
})

app.use('/', express.static(public))
app.listen(3000, ()=> console.log('Server: http://localhost:3000'))