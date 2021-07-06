const express = require('express');

const Eventos = require('../models/eventos');

const router = express.Router();

router.get('/', async(req, res)=>{
    
    try{
        
        const eventos = await Eventos.find();

        return res.send(eventos);

    }catch(err){

        return res.status(400).send({error: 'Falha ao buscar empresas'});

    }

});

module.exports = app => app.use('/eventos', router);