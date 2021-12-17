// Model da aplicação, contendo atributos e validações simples
export default class Funcionario {
    constructor(id, nome, idade, cargo){
        if(!nome){
            throw new Error('Nome não informado');
        }
        if(!idade){
            throw new Error('Idade não informada');
        }
        if(!cargo){
            throw new Error('Cargo não informado');
        }
        this.id = id
        this.nome = nome
        this.idade = idade
        this.cargo = cargo
    }

    getNome() {
        return this.nome
    }

    getIdade() {
        return this.idade
    }

    getCargo() {
        return this.cargo
    }
}