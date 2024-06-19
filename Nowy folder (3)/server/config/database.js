const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'MedicalInfo';
let db;

const connectDB = async () => {
    if (!db) {
        const client = await MongoClient.connect(url, { useUnifiedTopology: true });
        db = client.db(dbName);
    }
    return db;
};

module.exports = connectDB;
