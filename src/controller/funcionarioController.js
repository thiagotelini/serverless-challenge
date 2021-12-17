import Funcionario from "../domain/funcionario.js";
import CreateFuncionario from "../usecase/createFuncionario.js";
import GetFuncionario from "../usecase/getFuncionario.js";
import UpdateFuncionario from "../usecase/updateFuncionario.js";
import DeleteFuncionario from "../usecase/deleteFuncionario.js";
import * as funcionarioRepository from "../repository/mysqlRepository.js";

const createFuncionarioUseCase = new CreateFuncionario(funcionarioRepository);
const getFuncionarioUseCase = new GetFuncionario(funcionarioRepository);
const updateFuncionarioUseCase = new UpdateFuncionario(funcionarioRepository);
const deleteFuncionarioUseCase = new DeleteFuncionario(funcionarioRepository);

export async function createFuncionario(params, body) {
    const funcionarioData = body;
    const funcionario = new Funcionario(funcionarioData.nome, funcionarioData.idade, funcionarioData.cargo);
    const novoFuncionario = await createFuncionarioUseCase.execute(funcionario);
    return novoFuncionario;
}

export async function getFuncionario(params, body) {
    const funcionarioId = params;
    const funcionarios = await getFuncionarioUseCase.execute(funcionarioId);
    return funcionarios;
}

export async function updateFuncionario(params, body) {
    const funcionarioData = body;
    funcionarioData.id = params.id;
    return await updateFuncionarioUseCase.execute(funcionarioData);
}

export async function deleteFuncionario(params, body) {
    const funcionarioId = params;
    return await deleteFuncionarioUseCase.execute(funcionarioId);
}