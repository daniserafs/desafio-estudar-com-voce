const Sequelize = require("sequelize")
const database = require("../config/database")
const sequelize = new Sequelize(database)

class MateriasFaculdadeController {
    async criar(req, res) {
        try{
            const { idFaculdade } = req.params
            const  { nome, descricao } = req.body
            const data = new Date().toISOString();

            await sequelize.query(`INSERT INTO materias_faculdade (faculdade_id, nome, descricao, criadoEm) VALUES ("${idFaculdade}", "${nome}", "${descricao}", "${data}")`)
            
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

    async show(req, res) {
       try{
            const { idFaculdade } = req.params
        
            const [resultados] = await sequelize.query(`SELECT * FROM materias_faculdade WHERE (inativa = 0) AND (faculdade_id = ${idFaculdade})`)
            return res.json(resultados)
       }catch(err){
           console.log(err)
           return err.status(400).json({
               error: "Erro ao mostrar dados"
           })
       }
    }

    async delete(req, res){
        try{
            const { id } = req.body

            await sequelize.query(`DELETE from materias_faculdade WHERE id = "${id}"`)
            return res.json({
                sucess: "Sucesso ao deletar materia"
            })
        }catch(err){
            console.log(err)
            return res.status(400).json({
                error:"Erro ao deletar materia"
            })
        }
    }

    async update(req, res){
        try{
            const { id } = req.params
            const { nome, descricao, inativa } = req.body

            await sequelize.query(`UPDATE materias_faculdade set nome = "${nome}", descricao = "${descricao}", inativa = "${inativa}" WHERE id = "${id}"`)
            return res.json({
                sucess: "Sucesso ao atualizar dados"
            })
        } catch(err){
            console.log(err)
            return res.status(400).json({
                error: "Erro ao atualizar dados"
            })
        }
    }

}




module.exports = new MateriasFaculdadeController()
