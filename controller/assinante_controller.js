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

aluno.create = async function (requisicao, response) {
    try{
        let assinante = requisicao.body;
        let sql = "INSERT INTO assinante (cpf_assinante, nome_assinante, email_assinante) VALUES (?,?,?)";
        let values = [assinante.cpf_assinante, assinante.nome_assinante, assinante.email_assinante];
        let resultado = await con.query(sql, values);
        response.send({
            status:"Dado inserido com sucesso!",
            result: result
        });
    } catch (e) {
        console.log("Erro, operação não realizada.",e);
    }
}

export {assinante};