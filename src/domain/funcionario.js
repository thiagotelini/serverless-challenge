export default class Funcionario {
    constructor(nome, idade, cargo){
        if(!nome){
            throw new Error('Nome não informado');
        }
        if(!idade){
            throw new Error('Idade não informada');
        }
        if(!cargo){
            throw new Error('Cargo não informado');
        }
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