const express = require("express");
const app = express ();
const cors = require ("cors")
app.get ("", (req, res) => {
  return res.json ({
    message: 'Hello World!',
    });
});

app.get ("/cadastro", (req, res) => {
    return res.json ({
      message: 'Funcao de cadastro',
      });
  });

  app.get ("/login", (req, res) => {
    return res.json ({
      message: 'Funcao de login',
      });
  });
  app.get ("/home", (req, res) => {
    return res.json ({
      message: 'Funcao de home',
      });
  });

app.listen(9000, () => console.log("Servidor Rodando!"));