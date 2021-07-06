const mongoose = require('mongoose');

let user = 'betasydle'
let psw = 'ayllCTxreCYQ3tb1'
let cluster = 'BetaSydle'

mongoose.connect(
    'mongodb+srv://betasydle:ayllCTxreCYQ3tb1@cluster0.lplyi.mongodb.net/BetaSydle',
    { useUnifiedTopology: true },
    { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;

module.exports = mongoose;