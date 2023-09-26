const express = require('express');
const path = require('path');
const port = process.env.PORT || 3001;


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

require('./routes/allRoutes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));