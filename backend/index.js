const {connectToMongo,client} = require('./db');

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
app.use(express.json())
app.use(cors());

let crop = "select"

app.post('/crop', async(req, res) => {
    const { plantDataCollection } = await connectToMongo();
    crop = req.body.cropName;
    console.log(crop);
    const cropData = await plantDataCollection.findOne({ crop_name: crop });
        if (cropData) {
            console.log(`message: Crop selected: `,crop,cropData );
        } else {
            console.log({ message: `Crop data for ${crop} not found` });
        }
});
app.get('/crop', (req, res) => {
    res.send(`Crop selected: ${crop}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});