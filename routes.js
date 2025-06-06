const { Router } = require ("express");
const UsuarioController = require ("./Controllers/UsuarioController");
const SessoesController = require ("./Controllers/SessoesController");
const AuthController = require ("./Controllers/AuthController");
const UsuarioValidator = require ("./Validators/UsuarioValidator");
const SessoesValidator = require ("./Validators/SessoesValidator");
const AuthValidator = require("./Validators/AuthValidator");
const verificarJwt = require("./Middlewares/verificarJwt");
const verificarUsuario = require("./Middlewares/verificarUsuario");

const rotas = Router();

// usuarios
rotas.post('/usuarios', UsuarioValidator.create, UsuarioController.create);
rotas.get ('/usuarios', verificarJwt, UsuarioController.read);
rotas.delete ('/usuarios/:id', verificarJwt, verificarUsuario, UsuarioValidator.destroy, UsuarioController.delete);
rotas.put ('/usuarios/:id', verificarJwt, verificarUsuario, UsuarioValidator.update, UsuarioController.update);

// sessoes
rotas.post('/sessoes', SessoesValidator.create, SessoesController.create);
rotas.get ('/sessoes', SessoesController.read);
rotas.delete ('/sessoes/:id_usuario', verificarUsuario, verificarJwt, SessoesValidator.destroy, SessoesController.delete);

//auth
rotas.post("/login", AuthValidator.login, AuthController.login);

module.exports = rotas; 
//verificarJwt
//verificarUsuario