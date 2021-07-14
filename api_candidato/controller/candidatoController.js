const conexao = require('../config/conexaoBD')
const candidatoRepository = require('../repository/candidatoRepository')

exports.listar = (req, res) => {
    candidatoRepository.listar((erro,candidato) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})
            console.log(erro)
        }
        else {
            res.json(candidato)
        }
    })
}

exports.inserir = (req, res) => {    
    //Obter o dado do request - nome, partido, número
    const candidato = req.body;
    
    candidatoRepository.inserir(candidato, (erro, candidatoSalvo) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})
            console.log(erro)
        }
        else {
            res.status(201).json(candidatoSalvo)
        }
    })
}

exports.buscarPorId = (req, res) => {    
    const id = +req.params.id;
    if(isNaN(id)){
        const error = {
            status: 400,
            msg: "Id deve ser um numero"
        }
        res.status(error.status).json(error)
    }
    else{
        candidatoRepository.buscarPorId(id, (erro, candidato) => {
            if(erro){
                res.status(erro.status).json(erro)
            }
            else {
                res.json(candidato)
            }
        })
    }
}

exports.atualizar = (req, res) => {
    const id = req.params.id;
    const cand = req.body;

    const sql = `UPDATE candidato SET nome=?, partido=?, numero=? WHERE id=?`;
    conexao.query(sql, [cand.nome, cand.partido, cand.numero, id], (erro, rows) => {
        if(erro){
            res.status(500).json({"erro:":"Database Error"})
            console.log(erro)
        }
        else {
            cand.id = +id; //Sinal de "+" -> converte String para number (ou usar parseInt)
            res.json(cand);
        }
    })
}

exports.deletar = (req, res) => {
    const id = +req.params.id;
    if(isNaN(id)){
        const error = {
            status: 400,
            msg: "Id deve ser um numero"
        }
        res.status(error.status).json(error)
    }
    else{
        candidatoRepository.buscarPorId(id, (erro, candidato) => {
            if(erro){
                res.status(erro.status).json(erro)
            }
            else {
                candidatoRepository.deletar (id, (erro, id) => {
                    if(erro){
                        res.status(erro.status).json(erro)
                    }
                    else {
                        res.json(candidato)
                    }        
                })
            }
        })
    }
}