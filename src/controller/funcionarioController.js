import Funcionario from "../domain/funcionario.js";
import CreateFuncionario from "../usecase/createFuncionario.js";
import * as funcionarioRepository from "../repository/arrayRepository.js";

const createFuncionarioUseCase = new CreateFuncionario(funcionarioRepository);

export async function createFuncionario(params, body) {
    const funcionarioData = body;
    const funcionario = new Funcionario(funcionarioData.nome, funcionarioData.idade, funcionarioData.cargo);
    const novoFuncionario = await createFuncionarioUseCase.execute(funcionario);
    return novoFuncionario;
}