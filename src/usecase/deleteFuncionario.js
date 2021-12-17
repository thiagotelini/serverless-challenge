export default class DeleteFuncionario {
    constructor(funcionarioRepository) {
        this.funcionarioRepository = funcionarioRepository;
    }

    async execute(funcionario){
        return await this.funcionarioRepository.deleteFuncionario(funcionario);
    }
}