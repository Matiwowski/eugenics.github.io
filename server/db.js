// db.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/medical_system', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB", err);
  process.exit(1);
});
