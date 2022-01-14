const Sequelize = require("sequelize")
const database = require("../config/database")
const sequelize = new Sequelize(database)

class MateriasEssenciaisController {
    async criar(req, res) {
        try{
            
            const  {nome, descricao } = req.body
            const data = new Date().toISOString();

            await sequelize.query(`INSERT INTO materias_essenciais (nome, descricao, criadoEm) VALUES ("${nome}", "${descricao}", "${data}")`)
            
            return res.status(201).json({
                nome,
                descricao,
                data
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
            const { nome, descricao, inativa } = req.body

            await sequelize.query(`UPDATE materias_essenciais set nome = "${nome}", descricao = "${descricao}", inativa = "${inativa}" WHERE id = ${id}`)

            return res.json({
                sucess: "Sucesso ao atualizar materia"
            })
        } catch(err) {
            console.log(err)
            return res.status(400).json({
                error: "Erro ao atualizar dados"
            })
        }
    }

    async delete(req, res) {
        try{
            const { id } = req.params;

            await sequelize.query(`DELETE FROM materias_essenciais WHERE id = ${id}`)

            return res.json({
                sucess: "Sucesso"
            })
        } catch(err) {
            console.log(err)
            return res.status(400).json({
                error: "Erro"
            })
        }
    }

    async show(req, res){
        try {
            const [resultado] = await sequelize.query('SELECT * FROM materias_essenciais WHERE inativa = 0')

            return res.json(resultado)
        } catch(err){
            console.log(err)
            return res.status(500).json( {
                error: "erro inesperado ao buscar matéria"
            })
        }
    }
}


module.exports = new MateriasEssenciaisController()