const startDB = require("./mongodb");

class loaders{
    async start() {
       startDB();
    }
}
module.exports = startDB;
module.exports = new loaders();