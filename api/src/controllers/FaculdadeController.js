const Sequelize = require("sequelize")
const database = require("../config/database")
const sequelize = new Sequelize(database)

class FaculdadeController {
    async criar(req, res) {
        try{
            
            const  {nome} = req.body

            await sequelize.query(`INSERT INTO faculdades (nome) VALUES ("${nome}")`)
            
            return res.status(201).json({
                
                nome
            })
        }catch(err){
            console.log(err)
            return res.status(400).json({
                error: "Erro ao inserir dado"
            })
        }
    }

    async atualizar(req, res) {
        try{
            const { id } = req.params 
            const { nome } = req.body

            await sequelize.query(`UPDATE faculdades set nome = "${nome}" WHERE id = ${id}`)

            return res.json({
                sucess: "Sucesso ao atualizar faculdade"
            })
        } catch(err) {
            console.log(err)
            return res.status(400).json({
                error: "Erro ao atualizar dados"
            })
        }
    }

    
}


module.exports = new FaculdadeController()