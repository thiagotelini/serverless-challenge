import mysql from 'mysql2/promise';

// Conexão com Banco
export default async function connect() {
    if (global.connection && global.connection.state !== 'disconnected') {
        return global.connection;
    }

    //const mysql = require("mysql2/promise");
    const connection = await mysql.createPool({
        user: 'root',
        password: 'root',
        host: 'localhost',
        port: '3306',
        database: 'serverlessChallenge',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }); //mysql://USUARIO:SENHA@DOMINIO:PORTA/BANCO

    global.connection = connection;
    console.log('conectado com sucesso');
    return connection;
}