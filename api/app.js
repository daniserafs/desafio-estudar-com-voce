const express = require("express");
const alunosRoutes = require('./src/routes/alunos.routes')
const materiasEssenciaisRoutes = require('./src/routes/materiasEssenciais.routes')
const faculdadeRoutes = require('./src/routes/faculdade.routes')
const matriculasRoutes = require('./src/routes/matriculas.routes')
const loginRoutes = require('./src/routes/login.routes')
const materiasFaculdadeRoutes = require('./src/routes/materiasFaculdade.routes')
const cors = require('cors')

const whitelist = ['http://localhost:3000/', 'http://example2.com/'];
const corsOptions = {
  origin(origin, callback) {
    if (!whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();

    }
    middlewares() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(cors(corsOptions));
    }
    
    routes () {
        this.app.use('/alunos', alunosRoutes)
        this.app.use('/materias-essenciais', materiasEssenciaisRoutes)
        this.app.use('/faculdade', faculdadeRoutes)
        this.app.use('/matriculas', matriculasRoutes)
        this.app.use('/login', loginRoutes)
        this.app.use('/materias-faculdade', materiasFaculdadeRoutes)
    }
}

module.exports = new App().app