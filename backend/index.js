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

app.post('/espdatareceive',async (req,res)=>{
    const { plantDataCollection } = await connectToMongo();
    const espdata = req.body.number;  //{number : 6.5}
    crop = req.body.cropName;
    // console.log(crop);
    // console.log(espdata)
    const cropData = await plantDataCollection.findOne({ crop_name: crop });
        if (cropData) {
            // console.log(`message: Crop selected:${crop} `,cropData );
            return res.status(200).json({cropData , espdata})
        } else {
            // console.log({ message: `Crop data for ${crop} not found` });
            res.status(404).json({"message":"data not found"})
        }
})
app.get('/espdatareceive',(req,res)=>{
    res.status(200).send(espdata);
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});