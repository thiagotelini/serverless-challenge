export default class GetFuncionario {
    constructor(funcionarioRepository) {
        this.funcionarioRepository = funcionarioRepository;
    }

    async execute(funcionario){
        const funcionarios = await this.funcionarioRepository.getFuncionario(funcionario.id);
        return funcionarios;
    }
}