import Funcionario from '../../../domain/funcionario.js';
import CreateFuncionario from "../../../usecase/createFuncionario.js";
import * as funcionarioRepository from "../../../repository/mysqlRepository";
import { expect } from '@jest/globals';

test('Deve criar um novo Funcionario', async function () {
    const createFuncionarioUseCase = new CreateFuncionario(funcionarioRepository);
    const funcionario = new Funcionario('Thiago Telini', 21, 'Desenvolvedor');
    const novoFuncionario = await createFuncionarioUseCase.execute(funcionario);
    expect(novoFuncionario.id).toBeDefined();
});

test('Deve retornar um erro ao tentar criar um Funcionario duplicado', async function () {
    const createFuncionarioUseCase = new CreateFuncionario(funcionarioRepository);
    await createFuncionarioUseCase.execute(['Teste', 21, 'Desenvolvedor']);
    expect(await createFuncionarioUseCase.execute(['Teste', 21, 'Desenvolvedor'])).toThrow(Error);
});