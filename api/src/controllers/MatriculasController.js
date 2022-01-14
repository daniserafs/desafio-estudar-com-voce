
const Sequelize = require("sequelize")
const database = require("../config/database")
const sequelize = new Sequelize(database)

class MatriculasController {
    async criar(req, res) {
        try{
            
            const  {idAluno, idFaculdade} = req.body

            await sequelize.query(`INSERT INTO faculdade_alunos (faculdade_id, aluno_id) VALUES ("${idFaculdade}", "${idAluno}"  )`)
            
            return res.status(201).json({
                idFaculdade,
                idAluno
            })
        }catch(err){
            console.log(err)
            return res.status(400).json({
                error: "Erro ao inserir dado"
            })
        }
    }

    async show(req, res) {
        try{
            const { id } = req.params 
            
            const [resultados] = await sequelize.query(`SELECT alunos.nome, alunos.idade
            from alunos
            inner join faculdade_alunos on alunos.id = faculdade_alunos.aluno_id
            where faculdade_alunos.faculdade_id = "${id}"`)

            return res.json({
                resultados
            })
        } catch(err) {
            
            return res.status(400).json({
                error: "Erro ao atualizar dados"
            })
        }
    }

    async deletar (req, res) {
        try {
            const { idAluno } = req.params
            const { idFaculdade } = req.body
            await sequelize.query(`DELETE FROM faculdade_alunos WHERE faculdade_id = ${idFaculdade} and aluno_id = ${idAluno} `);
            return res.json({
                sucess: "Sucesso"
            })
        }catch(err) {
            console.log(err)
            return res.status(400).json({error: err})
        }
    }
}


module.exports = new MatriculasController()