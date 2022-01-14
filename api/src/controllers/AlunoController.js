const Sequelize = require("sequelize")
const database = require("../config/database")
const sequelize = new Sequelize(database)

class AlunoController {

    async show(req, res){
        try {
            const [resultado] = await sequelize.query('SELECT * FROM alunos')

            return res.json(resultado)
        } catch(err){
            console.log(err)
            return res.status(500).json( {
                error: "erro inesperado ao bucar alunos"
            })
        }
    }

    async criar(req, res) {
        try{
            
            const  { email, senha, nome, idade } = req.body

            await sequelize.query(`INSERT INTO alunos (email, senha, nome, idade) VALUES ("${email}", "${senha}", "${nome}", "${idade}")`)
            
            return res.status(201).json({
                email,
                senha,
                nome,
                idade
            })
        }catch(err){
            console.log(err)
            return res.status(400).json({
                error: "Erro ao inserir dado"
            })
        }
    }

    async delete(req, res) {
        try{
            const { id } = req.body;

            await sequelize.query(`DELETE FROM alunos WHERE id = ${id}`)

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

    async atualizar(req, res) {
        try{
            const { id } = req.params 
            const { email, senha, nome, idade } = req.body

            await sequelize.query(`UPDATE alunos set email = "${email}", senha = "${senha}", nome = "${nome}", idade = ${idade} WHERE id = ${id}`)

            return res.json({
                sucess: "Sucesso ao atualizar aluno"
            })
        } catch(err) {
            console.log(err)
            return res.status(400).json({
                error: "Erro ao atualizar dados"
            })
        }
    }
}


module.exports = new AlunoController()