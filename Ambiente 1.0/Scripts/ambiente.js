
//Cada sala precisa ter o seu próprio array com os valores de data e hora
let check1 = [''];
let check2 = [''];
let check3 = [''];
let check4 = [''];

function confirmaSala1(){
        //Pegando os valores do input e colocando em variáveis
        let professor = document.getElementById("professor1")
        let data = document.getElementById("data1")
        let hora = document.getElementById("hora1")

        //criando os elementos da table, setando classes e adicionando o nome do professor
        let tr = document.createElement('tr')
        let cancela = document.createElement('button')
        cancela.className = "btn-danger"
        let tbody = document.getElementById("tbody1");  
        let tdOne = document.createElement('td')
        tdOne.appendChild(cancela)
        let tdTwo = document.createElement('td')
        tdTwo.innerHTML = String(professor.value);
        let tdThree = document.createElement('td')
        let tdFour = document.createElement('td')

        //Variável que vai garantir a atualização dos dados
        let y = 1;

        //Checando se o horário e data escolhidos já foram selecionados por outro professor
        for(let i = 0; i<check1.length; i++){
            if(check1[i] == `${data.value}${hora.value}`){
                window.alert("Essa data e hora já foram escolhidas por outro professor!");
                y = 0;
            }
        }

        //Se o valor de y permanecer sendo 1, significa que seus valores não foram encontrados na array, ou seja, os valores podem ser adicionados

        if(y == 1){
            //Adicionando o texto da data e hora.
                tdThree.innerHTML = String(data.value);
                tdFour.innerHTML = String(hora.value);
            //Colocando o valor da data e hora na array check2
                check1.push(`${data.value}${hora.value}`);
                console.log(check1)
            //Adicionando tudo visualmente para o usuário
                tbody.appendChild(tr)
                tr.appendChild(tdTwo)
                tr.appendChild(tdThree)
                tr.appendChild(tdFour)
                tr.appendChild(tdOne)
        }

        cancela.innerText = "X"

        //Atrelando uma função no botão Cancela para que ele apague o elemento visualmente e na array
        cancela.onclick = function(){

            //Pega a tr mais próxima do botão de apagar
            let linha = cancela.closest("tr");

            //Cria um for que checa todos os elementos da array e quando encontra o valor que deseja apaga ele, junto com a linha
            for (let i = 0; i < check1.length; i++){
                if(check1[i] == `${linha.childNodes[1].textContent}${linha.childNodes[2].textContent}`){
                    check1.splice(i,1)
                    cancela.closest("tr").remove();
                    console.log(check1)
                }
            }
            
        }  
}

function confirmaSala2(){
        //Pegando os valores do input e colocando em variáveis
        let professor = document.getElementById("professor2")
        let data = document.getElementById("data2")
        let hora = document.getElementById("hora2")

        //Cada sala precisa ter a sua própria variável de professor, data, hora e tbody, para que não tenha interferência quando estivermos interagindo com elas
        let tr = document.createElement('tr')
        let cancela = document.createElement('button')
        cancela.className = "btn-danger"
        let tbody = document.getElementById("tbody2");  
        let tdOne = document.createElement('td')
        tdOne.appendChild(cancela)
        let tdTwo = document.createElement('td')
        tdTwo.innerHTML = String(professor.value);
        let tdThree = document.createElement('td')
        let tdFour = document.createElement('td')

        //Variável que vai garantir a atualização dos dados
        let y = 1;

        //Checando se o horário e data escolhidos já foram selecionados por outro professor
        for(let i = 0; i<check2.length; i++){
            if(check2[i] == `${data.value}${hora.value}`){
                window.alert("Essa data e hora já foram escolhidas por outro professor!");
                y = 0;
            }
        }

        //Se o valor de y permanecer sendo 1, significa que seus valores não foram encontrados na array, ou seja, os valores podem ser adicionados

        if(y == 1){
            //Adicionando o texto da data e hora.
                tdThree.innerHTML = String(data.value);
                tdFour.innerHTML = String(hora.value);
            //Colocando o valor da data e hora na array check2
                check2.push(`${data.value}${hora.value}`);
                console.log(check2)
            //Adicionando tudo visualmente para o usuário
                tbody.appendChild(tr)
                tr.appendChild(tdTwo)
                tr.appendChild(tdThree)
                tr.appendChild(tdFour)
                tr.appendChild(tdOne)
        }

        cancela.innerText = "X"

        //Atrelando uma função no botão Cancela para que ele apague o elemento visualmente e na array
        cancela.onclick = function(){

            //Pega a tr mais próxima do botão de apagar
            let linha = cancela.closest("tr");

            //Cria um for que checa todos os elementos da array e quando encontra o valor que deseja apaga ele, junto com a linha
            for (let i = 0; i < check2.length; i++){
                if(check2[i] == `${linha.childNodes[1].textContent}${linha.childNodes[2].textContent}`){
                    check2.splice(i,1)
                    cancela.closest("tr").remove();
                    console.log(check2)
                }
            }
            
        }  
}

function confirmaSala3(){
    //Pegando os valores do input e colocando em variáveis
    let professor = document.getElementById("professor3")
    let data = document.getElementById("data3")
    let hora = document.getElementById("hora3")

    //Cada sala precisa ter a sua própria variável de professor, data, hora e tbody, para que não tenha interferência quando estivermos interagindo com elas
    let tr = document.createElement('tr')
    let cancela = document.createElement('button')
    cancela.className = "btn-danger"
    let tbody = document.getElementById("tbody3");  
    let tdOne = document.createElement('td')
    tdOne.appendChild(cancela)
    let tdTwo = document.createElement('td')
    tdTwo.innerHTML = String(professor.value);
    let tdThree = document.createElement('td')
    let tdFour = document.createElement('td')

    //Variável que vai garantir a atualização dos dados
    let y = 1;

    //Checando se o horário e data escolhidos já foram selecionados por outro professor
    for(let i = 0; i<check3.length; i++){
        if(check3[i] == `${data.value}${hora.value}`){
            window.alert("Essa data e hora já foram escolhidas por outro professor!");
            y = 0;
        }
    }

    //Se o valor de y permanecer sendo 1, significa que seus valores não foram encontrados na array, ou seja, os valores podem ser adicionados

    if(y == 1){
        //Adicionando o texto da data e hora.
            tdThree.innerHTML = String(data.value);
            tdFour.innerHTML = String(hora.value);
        //Colocando o valor da data e hora na array check3
            check3.push(`${data.value}${hora.value}`);
            console.log(check3)
        //Adicionando tudo visualmente para o usuário
            tbody.appendChild(tr)
            tr.appendChild(tdTwo)
            tr.appendChild(tdThree)
            tr.appendChild(tdFour)
            tr.appendChild(tdOne)
    }

    cancela.innerText = "X"

    //Atrelando uma função no botão Cancela para que ele apague o elemento visualmente e na array
    cancela.onclick = function(){

        //Pega a tr mais próxima do botão de apagar
        let linha = cancela.closest("tr");

        //Cria um for que checa todos os elementos da array e quando encontra o valor que deseja apaga ele, junto com a linha
        for (let i = 0; i < check3.length; i++){
            if(check3[i] == `${linha.childNodes[1].textContent}${linha.childNodes[2].textContent}`){
                check3.splice(i,1)
                cancela.closest("tr").remove();
                console.log(check3)
            }
        }
        
    }  
}

function confirmaSala4(){
    //Pegando os valores do input e colocando em variáveis
    let professor = document.getElementById("professor4")
    let data = document.getElementById("data4")
    let hora = document.getElementById("hora4")

    //Cada sala precisa ter a sua própria variável de professor, data, hora e tbody, para que não tenha interferência quando estivermos interagindo com elas
    let tr = document.createElement('tr')
    let cancela = document.createElement('button')
    cancela.className = "btn-danger"
    let tbody = document.getElementById("tbody4");  
    let tdOne = document.createElement('td')
    tdOne.appendChild(cancela)
    let tdTwo = document.createElement('td')
    tdTwo.innerHTML = String(professor.value);
    let tdThree = document.createElement('td')
    let tdFour = document.createElement('td')

    //Variável que vai garantir a atualização dos dados
    let y = 1;

    //Checando se o horário e data escolhidos já foram selecionados por outro professor
    for(let i = 0; i<check4.length; i++){
        if(check4[i] == `${data.value}${hora.value}`){
            window.alert("Essa data e hora já foram escolhidas por outro professor!");
            y = 0;
        }
    }

    //Se o valor de y permanecer sendo 1, significa que seus valores não foram encontrados na array, ou seja, os valores podem ser adicionados

    if(y == 1){
        //Adicionando o texto da data e hora.
            tdThree.innerHTML = String(data.value);
            tdFour.innerHTML = String(hora.value);
        //Colocando o valor da data e hora na array check2
            check4.push(`${data.value}${hora.value}`);
            console.log(check4)
        //Adicionando tudo visualmente para o usuário
            tbody.appendChild(tr)
            tr.appendChild(tdTwo)
            tr.appendChild(tdThree)
            tr.appendChild(tdFour)
            tr.appendChild(tdOne)
    }

    cancela.innerText = "X"

    //Atrelando uma função no botão Cancela para que ele apague o elemento visualmente e na array
    cancela.onclick = function(){

        //Pega a tr mais próxima do botão de apagar
        let linha = cancela.closest("tr");

        //Cria um for que checa todos os elementos da array e quando encontra o valor que deseja apaga ele, junto com a linha
        for (let i = 0; i < check4.length; i++){
            if(check4[i] == `${linha.childNodes[1].textContent}${linha.childNodes[2].textContent}`){
                check4.splice(i,1)
                cancela.closest("tr").remove();
                console.log(check2)
            }
        }
        
    }  
}

//Botão futuro que apaga todos os elementos da array e apaga todas as tr da table
/*     function excluirTudo(){
        let table = document.getElementById('registros')
        let linhas = tbody.children
        tbody.remove(linhas)
    }
 */
//Abre o Modal da Sala
function entraSala1(){
    let container = document.getElementById("container-sala1")
    container.style="display:flex;"
}

function entraSala2(){
    let container = document.getElementById("container-sala2")
    container.style="display:flex;"
}

function entraSala3(){
    let container = document.getElementById("container-sala3")
    container.style="display:flex;"
}

function entraSala4(){
    let container = document.getElementById("container-sala4")
    container.style="display:flex;"
}

//Fecha o Modal da Sala
function sairSala1(){
    let container = document.getElementById("container-sala1")
    container.style="display:none;"
}

function sairSala2(){
    let container = document.getElementById("container-sala2")
    container.style="display:none;"
}

function sairSala3(){
    let container = document.getElementById("container-sala3")
    container.style="display:none;"
}

function sairSala4(){
    let container = document.getElementById("container-sala4")
    container.style="display:none;"
}