// Responsável pela criação de funcionarios
export default class CreateFuncionario {
    constructor(funcionarioRepository) {
        this.funcionarioRepository = funcionarioRepository; // recebe o repositorio referente ao DB ou memória local
    }

    async execute(funcionario){
        const existingFuncionario = await this.funcionarioRepository.getFuncionarioByName(funcionario.nome); //Verifica existência do funcionario pelo nome
        
        if(existingFuncionario){
            throw new Error('Funcionario já existente.'); // retorna erro caso o funcionario esteja duplicado
        }
        
        return this.funcionarioRepository.createFuncionario(funcionario); // finaliza a criação do funcionario
    }
}