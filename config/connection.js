import mysql2 from "mysql2/promise"

export default async function connect(){
    if(global.connection && global.connection.state !== 'disconnected'){
        return global.connection;
    } try {
        const mysql = mysql2;
        const connection = await mysql.createConnection("mysql://root:@localhost:3306/jornalBanco");
        console.log("Conectado!")
        global.connection = connection;
            return connection;
    } catch (e) {
        console.log("Ocorreu um erro.");
    }
}