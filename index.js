const app = require("./App");
const loaders = require("./Loaders/index");
const dotenv = require ("dotenv");

dotenv.config()
loaders.start();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log("Servidor Rodando"));