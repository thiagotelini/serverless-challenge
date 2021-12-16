export default class Funcionario {
    constructor(nome, idade, cargo){
        this.nome = nome
        this.idade = idade
        this.cargo = cargo
    }

    getId() {
        return this.id
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