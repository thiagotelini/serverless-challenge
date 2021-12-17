// Distribui as solicitações para os usecases
import Funcionario from "../domain/funcionario.js";
import CreateFuncionario from "../usecase/createFuncionario.js";
import GetFuncionario from "../usecase/getFuncionario.js";
import UpdateFuncionario from "../usecase/updateFuncionario.js";
import DeleteFuncionario from "../usecase/deleteFuncionario.js";
import * as funcionarioRepository from "../repository/mysqlRepository.js";

const createFuncionarioUseCase = new CreateFuncionario(funcionarioRepository); // instancia o usecase utilizando o repositório
const getFuncionarioUseCase = new GetFuncionario(funcionarioRepository); // instancia o usecase utilizando o repositório
const updateFuncionarioUseCase = new UpdateFuncionario(funcionarioRepository); // instancia o usecase utilizando o repositório
const deleteFuncionarioUseCase = new DeleteFuncionario(funcionarioRepository); // instancia o usecase utilizando o repositório

export async function createFuncionario(params, body) {
    const funcionarioData = body; // atribui request.body
    const funcionario = new Funcionario(funcionarioData.nome, funcionarioData.idade, funcionarioData.cargo);
    const novoFuncionario = await createFuncionarioUseCase.execute(funcionario); // executa método do usecase
    return novoFuncionario;
}

export async function getFuncionario(params, body) {
    const funcionarioId = params; // atribui request.params
    const funcionarios = await getFuncionarioUseCase.execute(funcionarioId); // executa método do usecase
    return funcionarios;
}

export async function updateFuncionario(params, body) {
    const funcionarioData = body; // atribui request.body
    funcionarioData.id = params.id; // atribui request.params
    return await updateFuncionarioUseCase.execute(funcionarioData); // executa método do usecase
}

export async function deleteFuncionario(params, body) {
    const funcionarioId = params; // atribui request.params
    return await deleteFuncionarioUseCase.execute(funcionarioId); // executa método do usecase
}