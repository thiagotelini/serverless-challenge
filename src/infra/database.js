import mysql from 'mysql2/promise';

// Conexão com Banco
export default async function connect() {
    if (global.connection && global.connection.state !== 'disconnected') { // Caso a conexão já tenha sido feita, se mantém
        return global.connection;
    }

    const connection = await mysql.createPool({ // Realiza a conexão com o banco
        user: 'admin',
        password: '', // credenciais removidas para o repositório
        host: '', // credenciais removidas para o repositório
        port: '3306',
        database: 'serverlessChallenge',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }); //mysql://USUARIO:SENHA@DOMINIO:PORTA/BANCO

    global.connection = connection;
    return connection;
}