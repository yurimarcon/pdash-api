const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/CRM/empresas')(app);
require('./controllers/Marketing/eventos')(app);
require('./controllers/Marketing/leads')(app);
require('./controllers/Desenvolvimento/mesa')(app);
require('./controllers/Analytics/analytics')(app);

app.listen(process.env.PORT || 3000);