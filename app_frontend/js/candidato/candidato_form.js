function renderForm(candidato) {
    //Se candidato estiver indefinido, cria novo candidato.
    if(!candidato) {
        candidato = {};
    }
    
    var str = `
    <h2>Formulario de Candidatos</h2>
    <form id="formulario">
        <label for="txtnome">Nome:</label>
        <input type="text" id="txtnome" value="${candidato.nome ?candidato.nome : ''}">
        <br />
        <label for="txtuso">Partido:</label>
        <input type="text" id="txtpartido" value="${candidato.partido ?candidato.partido : ''}">
        <br />
        <label for="txtnumero">Número:</label>
        <input type="text" id="txtnumero" value="${candidato.numero ?candidato.numero : ''}">
        <br />
        <br />
        <input type="submit" id="btnsalvar" value="Salvar">
        <input type="reset" value="Cancelar">
        <br />
    </form>
    `;

    let containerForm = document.querySelector("main");
    containerForm.innerHTML = str;

    var form = document.querySelector("#formulario");

    form.onsubmit = function(event){
        event.preventDefault();
        onSalvar(getDataCandidato(candidato));            
    }

    form.onreset = function(event){
        event.preventDefault();
        onCancelar();
    }
    
}

function getDataCandidato(candidato){
    candidato.nome = document.querySelector("#txtnome").value;
    candidato.partido = document.querySelector("#txtpartido").value;
    candidato.numero = document.querySelector("#txtnumero").value;
    return candidato;
}

function limparCampos(){
    document.querySelector("#txtnome").value="";
    document.querySelector("#txtpartido").value="";
    document.querySelector("#txtnumero").value="";
}

