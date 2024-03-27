const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

const port = process.env.PORT || 3306

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello World!");
});

const personRoutes = require('./src/routes/persons.routes');

app.use('/api/v1/persons', personRoutes);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
