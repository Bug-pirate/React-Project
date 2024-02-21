const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://gofood:sudarshansangle5656@cluster0.nmwgh47.mongodb.net/gofoodM?retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");

    const fetched_data = await mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();

    console.log("Data from MongoDB:", data);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
