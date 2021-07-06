const express = require('express');

const Leads = require('../models/leads');

const router = express.Router();

router.get('/', async(req, res)=>{
    
    try{
        
        const leads = await Leads.find();

        return res.json(leads);

    }catch(err){

        return res.status(400).send({error: 'Falha ao buscar empresas'});

    }

});

router.put('/', async(req, res)=>{
    
    try{
        console.log(req.body)
        
        let leads = req.body;
        leads.class = "leads"
        leads = await Leads.create(leads);

        return res.json(leads);

    }catch(err){

        return res.status(400).send({error: 'Falha ao criar lead'});

    }

});

router.delete('/', async(req, res)=>{
    
    try{
        
        leads = await Leads.deleteOne(req.body);
        return res.json(leads);

    }catch(err){

        return res.status(400).send({error: 'Falha ao excluir lead'});

    }

});

module.exports = app => app.use('/leads', router);