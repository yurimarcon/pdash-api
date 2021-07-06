const mongoose = require('../database');

const MesaDeTestes = new mongoose.Schema({
    title:{
        type: String,
    },
    subtitle:{
        type: String,
    },
    icon:{
        type: String,
    },
    class:{
        type: String,
    },
});

const Mesa = mongoose.model('mesas', MesaDeTestes);

module.exports = Mesa;