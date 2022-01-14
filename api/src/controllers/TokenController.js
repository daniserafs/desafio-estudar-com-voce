const jwt = require('jsonwebtoken')
const Sequelize = require('sequelize')
const database = require("../config/database")
const sequilize = new Sequelize(database)

class TokenController{
    async store(req, res) {
        const { email, senha } = req.body;

        if(!email || !senha) {
            return res.status(401).json({
                error: "Insira um email e senha válidos"
            })
        }

        const [[usuario]] = await sequilize.query(`SELECT * FROM alunos WHERE email = "${email}" and senha = "${senha}"`)
        if (!usuario) {
            return res.status(401).json({
                error: "Insira um email e senha validos"
            })
        
        }
        
        const token = jwt.sign(usuario, "qwertyuiopasdfghjklzxcvbnm123456", {
            expiresIn: '7d'
        })

        return res.json({
            token
        })
    }
}

module.exports = new TokenController();