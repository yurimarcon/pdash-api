const mongoose = require('../database');

const LeadsSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    subtitle:{
        type: String,
    },
    class:{
        type: String,
    },
    icon:{
        type: String,
    },
    nome:{
        type: String,
    },
    email:{
        type: String,
    },
    telefone:{
        type: String,
    },
    empresa:{
        type: String,
    },
    fornecedor:{
        type: String,
    },
    descricao:{
        type: String,
    },
});

const Leads = mongoose.model('leads', LeadsSchema);

module.exports = Leads;