const express = require('express');
const axios = require('axios');
const cors = require("cors");
const app = express();
const port = 3000;

// app.use(cors());
app.use(cors());



app.get('/api/products', async (req, res) => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      res.json(response.data);
    } catch (error) {
      res.status(500).send('Error fetching products');
    }
  });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
