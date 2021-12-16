import connect from '../infra/database.js';

const connection = await connect()

export async function createFuncionario(funcionario) {
    return await connection.query(
        'INSERT INTO Funcionario(funcionarioNome, funcionarioIdade, funcionarioCargo) VALUES (?,?,?)',
        [funcionario.nome, funcionario.idade, funcionario.cargo]
    )
}

export async function getFuncionarioByName(nome){
    console.log('to no getFuncionarioByName')
    const [rows] = await connection.query(
        'SELECT * FROM Funcionario WHERE funcionarioNome = ?',
        [nome]
    )
    return rows[0]
}