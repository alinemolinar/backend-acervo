const mongoose = require("mongoose");

async function startDB() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("banco de dados conectado")
}
module.exports = startDB;
