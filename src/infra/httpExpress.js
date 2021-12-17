import express from 'express';
import expressAdapter from './../adapter/expressAdapter.js';
import * as funcionarioController from '../controller/funcionarioController.js';
import serverless from 'serverless-http';

const app = express();

app.use(express.json());
app.get('/', function(req, res) {
    res.send('Hello World!');
})

app.post('/funcionario', expressAdapter(funcionarioController.createFuncionario));
app.get('/funcionario/:id', expressAdapter(funcionarioController.getFuncionario));
app.put('/funcionario/:id', expressAdapter(funcionarioController.updateFuncionario));
app.delete('/funcionario/:id', expressAdapter(funcionarioController.deleteFuncionario));


app.listen(3333);
console.log('Rodando!');
export default serverless(app);
