export default class UpdateFuncionario {
    constructor(funcionarioRepository) {
        this.funcionarioRepository = funcionarioRepository;
    }

    async execute(funcionario){
        return await this.funcionarioRepository.updateFuncionario(funcionario);
    }
}