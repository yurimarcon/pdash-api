const express = require('express');

const Leads = require('../../models/Marketing/leads');

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

router.post('/', async(req, res)=>{
    
    try{
        const filter = {_id : req.body._id};
        const update = { 
            title       : req.body.title,
            subtitle    : req.body.subtitle,
            nome        : req.body.nome,
            email       : req.body.email,
            telefone    : req.body.telefone,
            empresa     : req.body.empresa,
            fornecedor  : req.body.fornecedor,
            descricao   : req.body.descricao,
            class       : req.body.class,
        };
        
        const leads = await Leads.findOneAndUpdate(filter, update);
        
        return res.json(leads);

    }catch(err){

        return res.status(400).send({error: 'Falha ao atualizar lead'});

    }

});

module.exports = app => app.use('/leads', router);