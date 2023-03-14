const express = require('express')
const cors = require('cors')

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3002;

        this.middlewares()
        this.routes()
    }

    middlewares(){

        this.app.set('view engine', 'hbs')

        this.app.use(express.static('public'))

        this.app.use(cors())

        this.app.use(express.json())
    }

    routes(){
       this.app.get('/',(req,res)=>{
            res.render('home', {
                title: 'Resume',
                name: 'Jose Portillo'
            })
        })
        
        this.app.get('/courses',(req,res)=>{
            res.render('courses', {
                title: 'Resume',
                name: 'Jose Portillo'
            })
        })
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server listening on port ${this.port}`);
        })
    }
}

module.exports = Server;