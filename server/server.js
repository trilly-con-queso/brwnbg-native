const express = require('express');
const generate = require('./generate');
const freshBag = require('./freshbag')
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/dish', generate);
app.post('/api/store', freshBag);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});