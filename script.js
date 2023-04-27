// const inputPesquisa = document.querySelector('input[type="search"]')

let data = [];

fetch('colaboradores.json')
.then(response => response.json())
.then(jsonData =>{
    data = jsonData
    carregarElemntos(data)
});


function carregarElemntos(data){
    const tbody = document.getElementById('resultado');
    
    for (const colaborador of data) {
        const tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.textContent = colaborador.nome
        tr.appendChild(td1);
        let td2 = document.createElement('td');
        td2.textContent = colaborador.idade
        tr.appendChild(td2);
        let td3 = document.createElement('td');
        td3.textContent = colaborador.salario
        tr.appendChild(td3);
        let td4 = document.createElement('td');
        td4.textContent = colaborador.email
        tr.appendChild(td4);
        let td5 = document.createElement('td');
        td5.textContent = colaborador.cpf
        tr.appendChild(td5);
        tbody.appendChild(tr);
    }
}

// inputPesquisa.addEventListener('input', filterColaboradores);

// function filterColaboradores() {
//     if (inputPesquisa.value !== "") {
//       for (let tr of document.querySelectorAll("tbody tr")) {
//         let nome = tr.querySelector("td:nth-child(1)").textContent.toLowerCase();
//         let email = tr.querySelector("td:nth-child(4)").textContent.toLowerCase();
//         let cpf = tr.querySelector("td:nth-child(5)").textContent.toLowerCase();
        
//         let inputTexto = inputPesquisa.value.toLowerCase();
  
//         if (!nome.includes(inputTexto) || !email.includes(inputTexto) || !cpf.includes(inputTexto)) {
//          tr.querySelectorAll("td").forEach(td => td.classList.add("hide"));
//         } else {
//             tr.querySelectorAll("td").forEach(td => td.classList.remove("hide"));
//         }
//       }
//     }
//   }
  
carregarElemntos(data);

    const tbody = document.getElementById('resultado');
    const inputPesquisa = document.querySelector('input[type="search"]')

    inputPesquisa.addEventListener('keyup', ()=>{
        let expressao = inputPesquisa.value.toLowerCase();

        if(expressao.length < 2){
            return;
        }

        let linhas = tbody.getElementsByTagName('tr');
        for(let posicao in linhas){
            if(true === isNaN(posicao)){
                continue;
            }
            let conteudo = linhas[posicao].innerHTML.toLowerCase();

            if(true === conteudo.includes(expressao)){
                linhas[posicao].style.display = ""
            }else{
                linhas[posicao].style.display = "none"
            }
        }

    })