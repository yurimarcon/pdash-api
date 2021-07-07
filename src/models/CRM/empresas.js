const mongoose = require('../../database');

const EmpresasSchema = new mongoose.Schema({
    nome:{
        type: String,
    }
});

const Empresas = mongoose.model('Empresas', EmpresasSchema);

module.exports = Empresas;