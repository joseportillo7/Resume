const express = require('express')

const app = express()

//1. primer linea agregada luego de instalar hbs /hablerbar
app.set('view engine', 'hbs')

app.use(express.static('public'))

app.get('/resume',(req,res)=>{
    res.render('home', {
        title: 'Resume',
        name: 'Jose Portillo'
    })
})

app.get('/courses',(req,res)=>{
    res.render('courses', {
        title: 'Resume',
        name: 'Jose Portillo'
    })
})

app.get('/elements',(req,res)=>{
    res.sendFile(__dirname+'/public/elements.html')
})

app.listen(8080, () =>{
    console.log('Servidor escuchando en el puerto http:localhost:8080');
})