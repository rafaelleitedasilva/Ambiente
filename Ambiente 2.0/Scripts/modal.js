//Setando o Body em uma variável
let body = document.getElementById("body");
let check = [];

//Criando os Elementos do Modal
let divContainer = document.createElement("div");
let divModal = document.createElement("div");
let divRegistros = document.createElement("div");
let tabela = document.createElement("table");
let divForm = document.createElement("div");
let labelProfessor = document.createElement("label")
let labelData = document.createElement("label")
let labelHora = document.createElement("label")
let labelPeriodo = document.createElement("label")
let buttonX = document.createElement("button")

//Elementos do Cabeçalho da Tabela
let thead = document.createElement("thead");
let trThead = document.createElement("tr");
let thProfessor = document.createElement("th");
let thData = document.createElement("th");
let thHora = document.createElement("th");
let thDelete = document.createElement("th");
let thPeriodo = document.createElement("th");

//Setando as classes
divContainer.className="container-sala";
divModal.className="modal-sala";
divRegistros.className="registros";
tabela.className="table";
tabela.id="registros";
buttonX.className="btn btn-danger-modal"
thProfessor.scope,thData.scope,thHora.scope,thDelete.scope,thPeriodo.scope = "col";
divForm.className="form"

//Valores
thProfessor.innerText="Professor";
thData.innerText="Data"
thHora.innerText="Horário"
thDelete.innerText="Apagar"
thPeriodo.innerText="Periodo"
buttonX.innerText="X"
labelProfessor.innerText="Professor:"
labelData.innerText="Data:"
labelHora.innerText="Horário"
labelPeriodo.innerText="Periodo:"



//Função do ButtonX
buttonX.onclick = function(){
    divContainer.style="display:none;"
}

//Elementos Específicos de Cada Sala
let tbody = document.createElement("tbody")
let br = document.createElement("br")
let inputProfessor = document.createElement("input")
let inputData = document.createElement("input")
let submit = document.createElement("input")
let inputHora = document.createElement("input")
let inputPeriodo = document.createElement("input")

    

function cria(id){
    divContainer.style="display:flex;"

    //Inputs
    inputProfessor.type="text"
    inputData.type="date"
    inputHora.type="time"
    submit.type="submit"
    inputPeriodo.type="number"
    inputPeriodo.value = 4
    inputPeriodo.style = "width:35px;"
    inputPeriodo.min = 2
    submit.value="Confirmar"
    submit.className="btn btn-success"
    tbody.id = `tbody${id}`;
    console.log(tbody.id)
    inputProfessor.id=`professor${id}`
    inputData.id=`data${id}`
    inputHora.id=`hora${id}`
    inputPeriodo.id=`periodo${id}`
    
    //Criando o Model proceduralmente
    body.appendChild(divContainer);
    divContainer.appendChild(divModal)
    divModal.appendChild(divRegistros)
    divRegistros.appendChild(tabela)
    tabela.appendChild(thead)
    thead.appendChild(trThead)
    trThead.appendChild(thProfessor)
    trThead.appendChild(thData)
    trThead.appendChild(thHora)
    trThead.appendChild(thPeriodo)
    trThead.appendChild(thDelete)
    divModal.appendChild(divForm)
    divModal.appendChild(buttonX)
    tabela.appendChild(tbody)
    divForm.appendChild(labelProfessor)
    divForm.appendChild(inputProfessor)
    divForm.appendChild(labelData)
    divForm.appendChild(inputData)
    divForm.appendChild(br)
    divForm.appendChild(labelHora)
    divForm.appendChild(inputHora)
    divForm.appendChild(labelPeriodo)
    divForm.appendChild(inputPeriodo)
    divForm.appendChild(submit)

    submit.setAttribute("onclick", `confirmaSala(${id})`)
     

}

function confirmaSala(id){
    //Pegando os valores do input e colocando em variáveis
    let professor = document.getElementById(`professor${id}`)
    let data = document.getElementById(`data${id}`)
    let hora = document.getElementById(`hora${id}`) 
    let periodo = document.getElementById(`periodo${id}`)

    let tr = document.createElement('tr')
    let cancela = document.createElement('button')
    cancela.className = "btn-danger"
    let tbody = document.getElementById(`tbody${id}`);  
    let tdOne = document.createElement('td')
    tdOne.appendChild(cancela)
    let tdTwo = document.createElement('td')
    tdTwo.innerHTML = String(professor.value);
    let tdThree = document.createElement('td')
    let tdFour = document.createElement('td')
    let tdFive = document.createElement('td')

    //Variável que vai garantir a atualização dos dados
    let y = 1;

    //Checando se o horário e data escolhidos já foram selecionados por outro professor
    for(let i = 0; i<check.length; i++){
        if(check[i] == `${data.value},${tdTwo.textContent},${hora.value},${periodo.value}`){
            window.alert("Essa data e hora já foram escolhidas por outro professor!");
            y = 0;
        }
    }

    //Se o valor de y permanecer sendo 1, significa que seus valores não foram encontrados na array, ou seja, os valores podem ser adicionados

    if(y == 1){
        //Adicionando o texto da data e hora.
            tdTwo.innerHTML += ` LAB${id}`
            tdThree.innerHTML = String(data.value);
            tdFour.innerHTML = String(hora.value);
            tdFive.innerHTML = String(periodo.value);
        //Colocando o valor da data e hora na array check2
            check.push(`${data.value},${tdTwo.textContent},${hora.value},${periodo.value}`);
            console.log(check)
        //Adicionando tudo visualmente para o usuário
            tbody.appendChild(tr)
            tr.appendChild(tdTwo)
            tr.appendChild(tdThree)
            tr.appendChild(tdFour)
            tr.appendChild(tdFive)
            tr.appendChild(tdOne)
            
    }

    cancela.innerText = "X"

    //Atrelando uma função no botão Cancela para que ele apague o elemento visualmente e na array
    cancela.onclick = () => {

        //Pega a tr mais próxima do botão de apagar
        let linha = cancela.closest("tr");

        //Cria um for que checa todos os elementos da array e quando encontra o valor que deseja apaga ele, junto com a linha
        for (let i = 0; i < check.length; i++){
            if(check[i] == `${linha.childNodes[1].textContent},${linha.childNodes[2].textContent},${linha.childNodes[3].textContent},${linha.childNodes[4].textContent}`){
                check.splice(i,1)
                linha.remove();
                console.log(check)
            }
        }
        
    }  
    }