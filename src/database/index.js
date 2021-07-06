const mongoose = require('mongoose');
require('dotenv').config();

let user = process.env.USER_DB;
let psw = process.env.PSW_DB;
let cluster = process.env.CLUSTER;

mongoose.connect(
    'mongodb+srv://'+user+':'+psw+'@cluster0.lplyi.mongodb.net/'+cluster,
    { useUnifiedTopology: true },
    { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;

module.exports = mongoose;