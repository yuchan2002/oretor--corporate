const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(__dirname));
app.get('/tokusho', (req, res) => res.sendFile(__dirname + '/tokusho.html'));
app.listen(process.env.PORT || 3000);
