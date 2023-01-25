const express = require('express');
const cors = require('cors');
const routes = require('../routes/routes');
const errorMiddleware = require('../middlewares/error');

const app = express();
app.use('/images', express.static('./public'));
app.use(cors());

app.use(express.json());

app.use(routes);

app.use(errorMiddleware);

module.exports = app;
