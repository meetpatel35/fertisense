const { connectToMongo, client } = require('./db');

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors())
app.use(express.json())

let crop = " Please select a crop first"
// app.post('/crop', async (req, res) => {

//     const { plantDataCollection } = await connectToMongo();
//     crop = req.body.cropName;
//     console.log(crop);

//     const cropData = await plantDataCollection.findOne({ crop_name: crop });
//         if (cropData) {
//             console.log(`message: Crop selected:${crop} `,cropData );
//             return res.status(200).json({cropData , espdata:espdata.number})
//         } else {
//             console.log({ message: `Crop data for ${crop} not found` });
//             res.status(404).json({"message":"data not found"})
//         }

// });
// app.get('/crop', (req, res) => {
//     res.send(`Crop selected: ${crop}`);
// });

app.post('/espdatareceive', async (req, res) => {
    const { plantDataCollection, espdatadb } = await connectToMongo();
    const espdatafromesp = req.body.number;
    let espdata = 0;
    if (espdatafromesp) {

        espdata = parseFloat(espdatafromesp)
        console.log(espdata)
    }
    console.log(espdatafromesp)

    // const espdata = "6.5"
    // const espdata = 6.5
    crop = req.body.cropName;
    // console.log(crop);
    // console.log(espdata)
    // if(espdata)
    // console.log(number)
    const cropData = await plantDataCollection.findOne({ crop_name: crop });
    if (espdata !== 0) {
        const updatedData = await espdatadb.updateOne(
            { number: { $exists: true } }, // Find any document that has a 'number' field
            { $set: { number: espdata } } // Replace newValue with the desired number
        );
    }
    const espdatafromdb = await espdatadb.findOne({ number: { $exists: true } })
    // console.log(espdata.number)
    const number = { number: espdatafromdb.number }
    //   console.log(updatedData)
    if (cropData) {
        // console.log(`message: Crop selected:${crop} `,cropData );
        // res.send({cropData, espdata});
        return res.status(200).json({ cropData, number })
    } else {
        // console.log({ message: `Crop data for ${crop} not found` });
        res.status(404).json({ "message": "data not found" })

    }
})

app.get('/espdatareceive', (req, res) => {
    res.status(200).send(espdata);
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});