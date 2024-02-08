// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = 3000;

// app.use(cors());

// app.get('/', (req, res) => {
//     res.send('Arthmetic Service - Hello World!');
// });

// app.get('/add/:n/:m',(req,res) => {
//     res.json(Number(req.params.n) + Number(req.params.m));
// });

// app.listen(port);

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Arithmetic Service - Hello World! I am deployed by Jinay on Render, and this is my 2nd attempt');
});

app.get('/add/:n/:m', (req, res) => {
    res.json(Number(req.params.n) + Number(req.params.m));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
