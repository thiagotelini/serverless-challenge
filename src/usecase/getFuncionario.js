// Visualiza um funcionário pelo id informado
export default class GetFuncionario {
    constructor(funcionarioRepository) {
        this.funcionarioRepository = funcionarioRepository; // recebe o repositorio referente ao DB ou memória local
    }

    async execute(funcionario){
        const funcionarios = await this.funcionarioRepository.getFuncionario(funcionario.id); // Busca funcionario pelo id
        return funcionarios;
    }
}