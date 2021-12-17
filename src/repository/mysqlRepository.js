import connect from '../infra/database.js';

const connection = await connect()

export async function createFuncionario(funcionario) {
    return await connection.query(
        'INSERT INTO Funcionario(funcionarioNome, funcionarioIdade, funcionarioCargo) VALUES (?,?,?)',
        [funcionario.nome, funcionario.idade, funcionario.cargo]
    )
}

export async function getFuncionarioByName(nome){
    const [rows] = await connection.query(
        'SELECT * FROM Funcionario WHERE funcionarioNome = ?',
        [nome]
    )

    return rows[0]
}

export async function getFuncionario(id){
    const [rows] = await connection.query(
        'SELECT * FROM Funcionario WHERE funcionarioId = ?',
        [id]
    )

    return rows[0]
}

export async function updateFuncionario(funcionario){
    try{
        return await connection.query(
            'UPDATE Funcionario SET funcionarioNome = ?, funcionarioIdade = ?, funcionarioCargo = ? WHERE funcionarioId = ?',
            [funcionario.nome, funcionario.idade, funcionario.cargo, funcionario.id]
        )
    } catch (error) {
        return error;
    }
}

export async function deleteFuncionario(funcionario){
    try{
        return await connection.query(
            'DELETE FROM Funcionario WHERE funcionarioId = ?',
            [funcionario.id]
        )
    } catch (error) {
        return error;
    }
}