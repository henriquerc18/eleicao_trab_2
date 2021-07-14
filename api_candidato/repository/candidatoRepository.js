const conexao = require('../config/conexaoBD')

exports.listar = (callback) => {
    const sql = "SELECT * FROM candidato";

    conexao.query(sql, (erro, rows) => {
        if(erro){            
            callback(erro,null);
        }
        else {
            callback(null, rows);
        }
    })
}

exports.inserir = (candidato, callback) => {   
    //SQL
    const sql = "INSERT INTO candidato(nome,partido,numero) VALUES (?,?,?)"

    conexao.query(sql, [candidato.nome, candidato.partido, candidato.numero],
        (erro, rows) => {
            if(erro){
                callback(erro, null)
            }
            else {
                candidato.id = rows.insertId;
                callback(null, candidato)
            }
    })    
}

exports.buscarPorId = (id, callback) => {

    const sql = "SELECT * FROM candidato WHERE id=?";

    conexao.query(sql, [id], (err, rows) => {
        if(err){
            const error = {
                status: 500,
                msg: err
            }
            callback(error, null);
        }
        else {
            if(rows && rows.length > 0){
                callback(null,rows[0])
            }
            else{ 
                const error = {
                    status: 404,
                    msg: "candidato nao encontrado"
                }
                callback(error, null);
            }
        }
    })
}

exports.deletar = (id, callback) => {
    const sql = `DELETE FROM candidato WHERE id=?`;
    conexao.query(sql, [id], (err, rows) => {
        if(err){
            const error = {
                status: 500,
                msg: err
            }
            callback(err, null);
        }
        else {
            if(rows.affectedRows){
                callback(null, id);
            }
            else {
                const error = {
                    status: 500,
                    msg: err
                }
                callback(err, null);    
            }
        }
    })            
}