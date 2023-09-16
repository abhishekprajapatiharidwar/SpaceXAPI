const express = require('express');
require('dotenv').config();
const axios = require('axios');

const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log('Server is Started');
    console.log(process.env.TOKEN);
});

app.post('/', async (req, res) => {
    try {
        const Recievetoken = req.body.token;

        if (Recievetoken != process.env.TOKEN) {
            return res.status(400).json({
                "Status": "Failed",
                "Message": "Invalid Token",
            });

        }
        const response = await axios.get('https://api.spacexdata.com/v3/capsules');
        // Send the data from the SpaceX API as a response
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Something went wrong' });
    }
});
