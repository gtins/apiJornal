import connect from "../config/connection";

let assinante = {}; //objeto assinante
const con = await connect(); // conexão irá esperar o método connect (importamos ele do arquivo connection), ou seja, irá inicializar quando a conexão estiver feita.

assinante.all = async function (requisicao, response){
    try{
        let assinantes = await con.query("SELECT * FROM assinante");
        response.send(assinante);
    } catch (e) {
        console.log("Erro, operação não realizada." ,e);
    }
}

assinante.create = async function (requisicao, response){
    try{
        let assinante = requisicao.body;
        let sql = "INSERT INTO assinante (cpf_assinante, nome_assinante, email_assinante) VALUES (?,?,?)";
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
        let sql = "UPDATE assinante SET cpf_assinante = ?, nome_assinante = ?, email_assinante = ? WHERE cpf_assinante = ?;";
        let values = [assinante.cpf_assinante, assinante.nome_assinante, assinante.email_assinante, id_ass];
        let resultado = await con.query(sql, values);
        response.send({
            status:"Atualização do assinante " +assinante.nome+ "realizada com sucesso.",
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
            status:"Exclusão do assinante de CPF " +assinante.cpf_assinante+ "realizada com sucesso.",
            result: resultado
        });
    } catch (e) {
        console.log("Erro, opração não realizada.",e);
    }
}

export {assinante};