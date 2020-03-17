const express = require('express');
const app = express();
const port = process.env.PORT || process.env.DEFAULT_PORT;
const path = require('path');
const router = express.Router();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
