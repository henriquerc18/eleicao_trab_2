

function renderTabela(candidatos){
    var str=`
    <h3>Tabela de Candidatos</h3>
    <a id='novo' href="#">Novo</a>
    <div id="tabela">

    <table>
        <tr>
            <th style='text-align: left;'>Id</th>
            <th style='text-align: left;'>Nome</th>
            <th style='text-align: left;'>Partido</th>
            <th style='text-align: left;'>Número</th>
            <th colspan="2">Ação</th>
        </tr>`;

    for(var i in candidatos){
        str+=`<tr id=${candidatos[i].id}>
                <td>${candidatos[i].id}</td>
                <td>${candidatos[i].nome}</td>
                <td>${candidatos[i].partido}</td>
                <td>${candidatos[i].numero}</td>
                <td><a class="edit" href="#" 
                    data-id="${candidatos[i].id}">Editar</a></td>
                <td><a class="delete" href="#" 
                    data-id="${candidatos[i].id}">Deletar</a></td>
            </tr>`;
            
    } 
    str+= `
    </table>
    </div>`;

    var tabela = document.querySelector("main");
    tabela.innerHTML = str;

    var linkNovo = document.querySelector("#novo");
    linkNovo.onclick = function(event){
        carregarForm();
    }

    const linksEdit = document.querySelectorAll(".edit");
    for(let linkEdit of linksEdit) {
        linkEdit.onclick = function(event){
            onEdit(event.target.getAttribute("data-id"));
        }
    }

    const linksDelete = document.querySelectorAll(".delete");
    for(let linkDelete of linksDelete) {
        linkDelete.onclick = function(event){
            onDeletar(event.target.getAttribute("data-id"));
        }
    }

}