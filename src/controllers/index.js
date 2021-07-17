const express = require('express');

const Class = require('../models');

const router = express.Router();

router.get('/', async(req, res)=>{
    
    try{
        console.log(req.query)
        let filter = null;
        if(!req.query.classId){
            req.query = req.body
        }
        if(req.query.classId != "000000000000000"){ // ESSA SEQUÊNCIA DE ZEROS REPRESENTA O IDENTIFICADOR DA CLASSE class => (TODA A BASE)
            filter = {classId : req.query.classId};
        }
        let objetos;
        if(req.query.classId){
            objetos = await Class.find(filter);
            return res.json(objetos);
        }else{
            return res.json({ "msg" : "Informe um classId "});
        }

    }catch(err){

        return res.status(400).send({error: 'Falha ao buscar objeto'});

    }

});

router.get('/all', async(req, res)=>{
    
    try{

        objetos = await Class.find();
        return res.json(objetos);

    }catch(err){

        return res.status(400).send({error: 'Falha ao buscar objeto'});

    }

});

router.post('/', async(req, res)=>{
    
    try{
        console.log(req.body)
        
        let objeto = await Class.create(req.body);

        return res.json(objeto);

    }catch(err){

        return res.status(400).send({error: 'Falha ao criar objeto'});

    }

});

router.put('/', async(req, res)=>{

    console.log(req.body)
    
    try{
        const filter = {_id : req.body._id};

        let object = req.body.object;
        await Class.findOneAndUpdate(filter, {object});
        const objetoAtualizado = await Class.findById(filter);

        return res.json(objetoAtualizado);

    }catch(err){

        return res.status(400).send({error: 'Falha ao atualizar objeto'});

    }

});

router.delete('/', async(req, res)=>{
    
    try{
        
        await Class.deleteOne(req.body);
        return res.json({"statusCode": "200"});

    }catch(err){

        return res.status(400).send({error: 'Falha ao excluir objeto'});

    }

});

module.exports = app => app.use('/', router);