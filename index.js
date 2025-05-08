const app = require("./App");
const loaders = require(" ./loaders/index");

Loaders.start();

app.listen(8000, () => console.log("Servidor Rodando"));