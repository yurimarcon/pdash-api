const express = require('express');

const Empresas = require('../models/empresas');

const router = express.Router();

router.get('/', async(req, res)=>{
    
    try{
        
        const empresas = await Empresas.find();

        return res.send(empresas);

    }catch(err){

        return res.status(400).send({error: 'Falha ao buscar empresas'});

    }

});

module.exports = app => app.use('/empresas', router);