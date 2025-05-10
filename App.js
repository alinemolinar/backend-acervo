const express = require ("express");
const rotas = require("./routes");

const app = express();

app.use(express.json());
app.use(rotas);

app.listen(8000, () => console.log("Servidor Rodando"));
module.exports = app;
