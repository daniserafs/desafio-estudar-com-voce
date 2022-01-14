const jwt = require('jsonwebtoken')
const Sequelize = require('sequelize')
const database = require("../config/database")
const sequilize = new Sequelize(database)


async function Login(req, res, next){
    const { authorization } = req.headers;
    if(!authorization) {
        return res.status(401).json({
            error: "Login required"
        })
    }
    
    
    const [, token] = authorization.split(' ');

    try{
        const dados = jwt.verify(token, "qwertyuiopasdfghjklzxcvbnm123456")

        const { email, senha } = dados;
        const [[usuario]] = await sequilize.query(`SELECT * FROM alunos WHERE email = "${email}" and senha = "${senha}"`)
        
        if (!usuario) {
            return res.status(401).json({
                error: "Token invalido"
            })
    
        }
        return next()
    }catch(err){
        console.log(err)
        return res.status(401).json({
            error: "Token invalido"
        })
    }
}

module.exports = Login