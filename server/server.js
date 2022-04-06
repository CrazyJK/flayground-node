const express = require('express');
const app = express();
const test = require('./Router/test');
// const cors = require('cors');

// app.use(cors());
app.use('/api', test);

const port = 5000;
app.listen(port, () => console.log(`${port}`));
