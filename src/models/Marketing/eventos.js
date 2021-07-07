const mongoose = require('../../database');

const EventosSchema = new mongoose.Schema({
    nome:{
        type: String,
    }
});

const Eventos = mongoose.model('eventos', EventosSchema);

module.exports = Eventos;