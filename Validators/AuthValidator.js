const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");

const login = validateRequest({
    body: z.object({
        email: z.string({ required_error: "O email é obrigatório" }).email({ required_error: "O email é inválido" }),
        senha: z.string({ required_error: "A senha é obrigatório" }),
    })


});

module.exports = {
    login,
}