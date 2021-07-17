const mongoose = require('../database');

const ClassSchema = new mongoose.Schema({
    classId:{
        type: String,
    },
    className:{
        type: String,
    },
    objectClassId:{
        type: String
    },
    object:{
        type: Object
    }
});

const Class = mongoose.model('class', ClassSchema);

module.exports = Class;