const UsuarioModel = require ("../Models/UsuarioModel");

class UsuarioController {

    async create (req, res) {
        try {
        const usuario = await UsuarioModel.create(req.body);

        const { senha, ...novoUsuario } = usuario.toObject();

        return res.status(200).json(usuario);
            
        } catch (error) {
            res
            .status(500)
            .json( {message: "Deu errado!", error: error.message} )
        }

        

    }

    async read (req, res) {
        try {
         const usuarios = await UsuarioModel.find();

        return res.status(200).json(usuarios);
            
        } catch (error) {
            res
            .status(500)
            .json( {message: "Deu errado!", error: error.message} )
        }

       
    }

    async update (req, res) {
        try {
         const { id } = req.params;
         const usuarioEncontrado = await UsuarioModel.findById(id);

         if (!usuarioEncontrado)
         return res.status(404).json({ message: "Usuário não encontrado "});
         
         const usuario = await usuariosEncontrado.set(req.body).save();
         //const usuario = await UsuarioModel.findByIdAndUpdate(id, req.body, { new: true });
         return res.status(200).json(usuario);
            
        } catch (error) {
            res
            .status(500)
            .json( {message: "Deu errado!", error: error.message} )
        }

    }

    async delete (req, res) {
         try {
        const { id } = req.params
        const usuarioEncontrado = await UsuarioModel.findById(id);

        if (!usuarioEncontrado)
        return res.status(404).json({ message: "Usuário não encontrado "});
         
         await usuariosEncontrado.deleteOne();
         


        return res.status(200).json({ "mensagem": "Usuario deletado com sucesso!"});
            
        } catch (error) {
            res
            .status(500)
            .json( {message: "Deu errado!", error: error.message} )
        }
       
    }
}

module.exports = new UsuarioController();