const Funcionarios = [];

export async function createFuncionario(funcionario) {
    funcionario.id = Math.floor(Math.random() * 10000);
    Funcionarios.push(funcionario);
    return funcionario;
}

export async function getFuncionarioByName(nome){
    return Funcionarios.find(funcionario => funcionario.nome === nome);
}