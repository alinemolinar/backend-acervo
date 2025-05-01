const startDB = require("./mongodb");

class loaders{
    start() {
        startDB();
    }
}
module.exports = new loaders();