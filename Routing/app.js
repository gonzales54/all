const exporess = require('express');
const app = exporess();

const router = require('./router.js');

app.use('/router', router);
app.listen(3000);