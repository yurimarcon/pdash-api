const express = require('express');

const Mesa = require('../models/mesas');

const router = express.Router();

router.get('/', async(req, res)=>{
    
    try{
        
        const mesa = await Mesa.find();

        return res.json(mesa);

    }catch(err){

        return res.status(400).send({error: 'Falha ao buscar mesa de testes'});

    }

});

router.put('/', async(req, res)=>{
    
    try{
        
        let mesa = req.body
        mesa.class = "mesa"
        mesa = await Mesa.create(mesa);

        return res.json({mesa});

    }catch(err){

        return res.status(400).send({error: 'Falha ao criar mesa de testes'});

    }

});

router.delete('/', async(req, res)=>{
    
    console.log(req.body._id)
    try{
        
        if(!req.body._id){
            return res.json({"error":"Infome um _id"})
        }
        let mesa = await Mesa.deleteOne(req.body);

        return res.json({mesa});

    }catch(err){

        return res.status(400).send({error: 'Falha ao excluir mesa de testes'});

    }

});


module.exports = app => app.use('/mesa', router);