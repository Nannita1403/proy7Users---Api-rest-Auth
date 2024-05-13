const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("La base de datos ha sido actualizada");
    } catch (error) {
        console.log("La base de datos exploto");
    }
}

module.exports = { connectDB}