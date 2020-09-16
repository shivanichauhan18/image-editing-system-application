var now = Math.floor(Date.now() / 1000),
iat = (now - 10),
jwtId = Math.random().toString(36).substring(7);

module.exports = {
    secret: 'SECRETOfshivani',
     payload : {
        iat: iat,
        jwtid: jwtId,
        audience: 'TEST',
    }
};