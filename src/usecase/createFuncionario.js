export default class CreateFuncionario {
    constructor(funcionarioRepository) {
        this.funcionarioRepository = funcionarioRepository;
    }

    async execute(funcionario){
        const existingFuncionario = await this.funcionarioRepository.getFuncionarioByName(funcionario.nome);
        
        if(existingFuncionario){
            throw new Error('Funcionario já existente.');
        }
        
        return this.funcionarioRepository.createFuncionario(funcionario);
    }
}