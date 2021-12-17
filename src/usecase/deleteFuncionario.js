//Responsável pelo delete de um funcionário
export default class DeleteFuncionario {
    constructor(funcionarioRepository) {
        this.funcionarioRepository = funcionarioRepository; // recebe o repositorio referente ao DB ou memória local
    }

    async execute(funcionario){
        return await this.funcionarioRepository.deleteFuncionario(funcionario); // Deleta funcionario
    }
}