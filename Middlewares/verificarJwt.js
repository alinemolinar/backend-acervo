function verificarJwt(req, res, next) {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    console.log( authHeader );


    next();
}

module.exports = verificarJwt;