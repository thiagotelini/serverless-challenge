import express from 'express';
import expressAdapter from './../adapter/expressAdapter.js';
import * as funcionarioController from '../controller/funcionarioController.js';
import serverless from 'serverless-http';

const app = express();

app.use(express.json());
app.get('/', function(req, res) {
    res.send('Rodando!');
})

// rotas do CRUD enviando o request diretamente para o adaptador e passando o obj retornado para controller 
app.post('/funcionario', expressAdapter(funcionarioController.createFuncionario)); // Create
app.get('/funcionario/:id', expressAdapter(funcionarioController.getFuncionario)); // Read
app.put('/funcionario/:id', expressAdapter(funcionarioController.updateFuncionario)); // Update
app.delete('/funcionario/:id', expressAdapter(funcionarioController.deleteFuncionario)); // Delete


app.listen(3333); // Express rodado localmente
console.log('Rodando!');
export default serverless(app); // Transforma Express em funções para o Serverless Framework
