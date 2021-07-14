function iniciaCandidatos(){
    carregarCandidatos()
}

function carregarCandidatos() {
    listarCandidatos((erro, candidatos) => {
        console.log(candidatos);
        renderTabela(candidatos);
    })
}

function carregarForm(candidato){
    renderForm(candidato);
}

function salvarCandidato(candidato){
    if(!candidato.id) {
        inserirCandidato(candidato, (erro,candidato)=> {
            carregarCandidatos();
            limparCampos();
        })    
    }
    else {
        atualizarCandidato(candidato.id, candidato, (erro, candidato) => {
            carregarCandidatos();
            limparCampos();
        })
    }
}

//Eventos
function onSalvar(candidato){
    console.log("Candidato: "+ candidato);
    salvarCandidato (candidato)
}

function onCancelar(){
    carregarCandidatos();
}

function onDeletar(id){
    deletarCandidato(id, (erro, candidato) => {
        alert(`Candidato ${candidato.nome} removido com sucesso!`);
        carregarCandidatos();
    });
}

function onEdit(id){
    buscarCandidato(id, (erro, candidato) => {
        console.log("Carregando Candidato "+candidato.nome);
        carregarForm(candidato);
    });
}



