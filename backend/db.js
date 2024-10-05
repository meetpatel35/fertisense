// const { MongoClient } = require("mongodb");

// // Replace the following with your Atlas connection string                                                                                                                                        
// const url = "";

// // Connect to your Atlas cluster
// const client = new MongoClient(url);

// const connectToMongo = () => {
//     client.connect();
//     console.log("Successfully connected to Atlas");
// }
// module.exports = connectToMongo;


const { MongoClient } = require('mongodb');
require('dotenv').config(); // For storing MongoDB URI securely

// const uri = process.env.MONGO_URI; // Your MongoDB Atlas URI
const uri = "mongodb://localhost:27017/" 
const client = new MongoClient(uri);

const connectToMongo = async () => {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        // Access the Fertisense database and plant_data collection ....ATLAS
        // const db = client.db('Fertisense');
        // const plantDataCollection = db.collection('plant_data');
        const db = client.db('Plant_data_local');
        const plantDataCollection = db.collection('plant_data');
        return { db, plantDataCollection };
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error; // Throw error if unable to connect
    }
};

module.exports = {connectToMongo ,client};
