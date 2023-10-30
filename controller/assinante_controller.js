import connect from "../config/connection.js";

let assinante = {}; //objeto assinante
const con = await connect(); // conexão irá esperar o método connect (importamos ele do arquivo connection), ou seja, irá inicializar quando a conexão estiver feita.

assinante.all = async function (requisicao, response){
    try{
        let nome_assinante = requisicao.query.nome_assinante;
        let sql = "SELECT * FROM assinante WHERE nome_assinante LIKE ?;";
        let values = ['%' + nome_assinante + '%'];
        let resultado = await con.query(sql, values);
        response.send(resultado);
    } catch (e) {
        console.log("Erro, operação não realizada." ,e);
    }
}

assinante.create = async function (requisicao, response){
    try{
        let assinante = requisicao.body;
        let sql = "INSERT INTO assinante (cpf_assinante, nome_assinante, email_assinante) VALUES (?,?,?);";
        let values = [assinante.cpf_assinante, assinante.nome_assinante, assinante.email_assinante];
        let resultado = await con.query(sql, values);
        response.send({
            status:"Dado inserido com sucesso!",
            result: resultado
        });
    } catch (e) {
        console.log("Erro, operação não realizada.",e);
    }
}

assinante.update = async function (requisicao, response){
    try{
        let id_ass = requisicao.params.cpf_assinante;
        let assinante = requisicao.body;
        let sql = "UPDATE assinante SET nome_assinante = ?, email_assinante = ? WHERE cpf_assinante = ?;";
        let values = [assinante.nome_assinante, assinante.email_assinante, id_ass];
        let resultado = await con.query(sql, values);
        response.send({
            status:"Atualização do assinante " +assinante.nome_assinante+ " realizada com sucesso.",
            result: resultado
        });
    } catch (e) {
        console.log("Erro, operação não realizada.",e);
    }
}

assinante.delete = async function (requisicao, response){
    try {
        let id_ass = requisicao.params.cpf_assinante;
        let sql = "DELETE FROM assinante WHERE cpf_assinante = ?;";
        let resultado = await con.query(sql, [id_ass]);
        response.send({
            status:"Exclusão do assinante de CPF " +id_ass+ " realizada com sucesso.",
            result: resultado
        });
    } catch (e) {
        console.log("Erro, opração não realizada.",e);
    }
}

export {assinante};