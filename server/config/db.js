const mongoose = require('mongoose');

const connectDb = async()=>
{
    const connection = await mongoose.connect(process.env.MONGO_URI);

    console.log(`Mongo DB connected to: ${connection.connection.host}`.cyan.underline.bold);
}

module.exports = connectDb;