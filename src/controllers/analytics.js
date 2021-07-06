const express = require('express');

const Analytics = require('../models/analytics');

const router = express.Router();

router.get('/', async(req, res)=>{
    
    try{
        
        const analytics = await Analytics.find();

        return res.send(analytics);

    }catch(err){

        return res.status(400).send({error: 'Falha ao buscar analytics'});

    }

});

module.exports = app => app.use('/analytics', router);