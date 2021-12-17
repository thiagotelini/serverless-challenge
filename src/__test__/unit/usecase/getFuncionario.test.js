import GetFuncionario from "../../../usecase/getFuncionario.js";
import * as funcionarioRepository from "../../../repository/mysqlRepository";
import { expect } from '@jest/globals';

test('Deve visualizar o Funcionario com id 1', async function () {
    const getFuncionarioUseCase = new GetFuncionario(funcionarioRepository);
    const funcionario = await getFuncionarioUseCase.execute({id: 1});
    expect(funcionario).toBeDefined();
});