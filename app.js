const express = require('express');
const router = require('./routes/router');

const app = express();
const port = 3001;

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views','./views');

app.use('/', router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })