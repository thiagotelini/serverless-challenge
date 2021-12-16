import Funcionario from '../../../domain/funcionario.js';

test('Deve instanciar um Funcionario', function () {
    const funcionario = new Funcionario('Thiago Telini', 21, 'Desenvolvedor');
    expect(funcionario.getNome()).toBe('Thiago Telini');
});

test('Deve retornar um error ao criar um Funcionario sem nome', function () {
    expect(() => new Funcionario( '', 21, 'Desenvolvedor')).toThrowError(Error);
    expect(() => new Funcionario( '', 21, 'Desenvolvedor')).toThrowError('Nome não informado');
});

test('Deve retornar um error ao criar um Funcionario sem idade', function () {
    expect(() => new Funcionario( 'Thiago Telini', '', 'Desenvolvedor')).toThrowError(Error);
    expect(() => new Funcionario( 'Thiago Telini', '', 'Desenvolvedor')).toThrowError('Idade não informada');
});

test('Deve retornar um error ao criar um Funcionario sem cargo', function () {
    expect(() => new Funcionario( 'Thiago Telini', 21, '')).toThrowError(Error);
    expect(() => new Funcionario( 'Thiago Telini', 21, '')).toThrowError('Cargo não informado');
});