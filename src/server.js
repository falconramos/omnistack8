const express = require('express');
const mongoose  = require('mongoose');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://omnistack:Etapa654@cluster0-hnjd3.mongodb.net/omnistack8?retryWrites=true&w=majority',{
    useNewUrlParser: true
});

// indentico a server.get('/', function(req, res){
// });
// server.get('/', (req, res) =>{
//     // return res.send('Olá Mundo!');
//     // return res.send(`Olá ${req.query.name}!`);
//     return res.json({ message: `Olá ${req.query.name}` });
// });

server.use(express.json());

server.use(routes);

server.listen(3333);