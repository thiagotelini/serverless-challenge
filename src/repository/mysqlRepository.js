// Gerencia as Querys do Banco de Dados
import connect from '../infra/database.js';

const connection = await connect() // realiza a conexão implementada externamente

export async function createFuncionario(funcionario) { // Create
    try {
        return await connection.query(
            'INSERT INTO Funcionario(funcionarioNome, funcionarioIdade, funcionarioCargo) VALUES (?,?,?)',
            [funcionario.nome, funcionario.idade, funcionario.cargo]
        )
    } catch (error) {
        return error;
    }
}

export async function getFuncionarioByName(nome){ // Verifica duplicidade
    try {

        const [rows] = await connection.query(
            'SELECT * FROM Funcionario WHERE funcionarioNome = ?',
            [nome]
        )
        return rows[0]

    } catch (error) {
        return error;
    }
}

export async function getFuncionario(id){ //Read 
    try {

        const [rows] = await connection.query(
            'SELECT * FROM Funcionario WHERE funcionarioId = ?',
            [id]
        )
        return rows[0]

    } catch (error) {
        return error
    }
}

export async function updateFuncionario(funcionario){ //Update
    try{
        return await connection.query(
            'UPDATE Funcionario SET funcionarioNome = ?, funcionarioIdade = ?, funcionarioCargo = ? WHERE funcionarioId = ?',
            [funcionario.nome, funcionario.idade, funcionario.cargo, funcionario.id]
        )
    } catch (error) {
        return error;
    }
}

export async function deleteFuncionario(funcionario){ // Delete
    try{
        return await connection.query(
            'DELETE FROM Funcionario WHERE funcionarioId = ?',
            [funcionario.id]
        )
    } catch (error) {
        return error;
    }
}