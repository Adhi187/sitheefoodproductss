const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    // Use environment variable or fallback to the connection string
    // Use environment variable or fallback to the correct connection string
    // Try without specifying database name
    const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://adhithyaata23bsr:password123@cluster0.oeqsqtl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    
    if (!mongoURI) {
      throw new Error('MongoDB URI is not defined. Please set MONGODB_URI environment variable.');
    }
    
    console.log('Attempting to connect to MongoDB...');
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    console.error('Please check your MongoDB connection string and credentials');
    process.exit(1);
  }
};

module.exports = connectDB; 