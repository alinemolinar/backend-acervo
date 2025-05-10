const mongoose = require("mongoose");

async function startDB() {
    await mongoose.connect('mongodb+srv://alinemolinar:aline123@backend-cpe.ziqsf1x.mongodb.net/?retryWrites=true&w=majority&appName=backend-cpe');
    console.log("banco de dados conectado");
}
module.exports = startDB;
