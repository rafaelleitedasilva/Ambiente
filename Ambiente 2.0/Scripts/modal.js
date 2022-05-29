//Setando o Body em uma variável
let body = document.getElementById("body");

//Criando os Elementos do Modal
let divContainer = document.createElement("div");
let divModal = document.createElement("div");
let divRegistros = document.createElement("div");
let tabela = document.createElement("table");
let divForm = document.createElement("div");
let buttonX = document.createElement("button")

//Elementos do Cabeçalho da Tabela
let thead = document.createElement("thead");
let trThead = document.createElement("tr");
let thProfessor = document.createElement("th");
let thData = document.createElement("th");
let thHora = document.createElement("th");
let thDelete = document.createElement("th");

//Setando as classes
divContainer.className="container-sala";
divModal.className="modal-sala";
divRegistros.className="registros";
tabela.className="table";
tabela.id="registros";
buttonX.className="btn btn-danger-modal"
thProfessor.scope,thData.scope,thHora.scope,thDelete.scope = "col";
divForm.className="form"

//Criando o Modal
divContainer.appendChild(divModal)
divModal.appendChild(divRegistros)
divRegistros.appendChild(tabela)
tabela.appendChild(thead)
thead.appendChild(trThead)
trThead.appendChild(thProfessor)
trThead.appendChild(thData)
trThead.appendChild(thHora)
trThead.appendChild(thDelete)
divModal.appendChild(divForm)
divModal.appendChild(buttonX)

//Valores
thProfessor.innerText="Professor";
thData.innerText="Data"
thHora.innerText="Horário"
thDelete.innerText="Apagar"
buttonX.innerText="X"

//Função do ButtonX
buttonX.onclick = function(){
    divContainer.style="display:none;"
}


function cria(id){
    divContainer.style="display:flex;"
    let tbody = document.createElement("tbody")
    tbody.id = `tbody${id}`;

    body.appendChild(divContainer);
    tabela.appendChild(tbody);
    

}
