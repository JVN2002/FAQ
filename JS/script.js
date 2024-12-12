let perguntas = [];

fetch('./JS/data.json')
    .then(res=> res.json())
    .then(data=>{
        perguntas = data;
        criaPerguntas();
    })
    .catch(error => console.log('ERRO',error));

const caixaFAQ = document.getElementById('caixaPerguntas');

function criaPerguntas(){
    console.log(perguntas);
    for(let i = 0; i < perguntas.length; i++)
    {
        const card = document.createElement("div");
        card.classList.add('boxPerguntas');
        card.innerHTML = 
        `   
        <h3>${perguntas[i].titulo} <img src="assets/images/icon-plus.svg" id="btnMais${i}" onclick="abrePergunta(Perguntas${i},btnMenos${i})"><img src="assets/images/icon-minus.svg"class="btnMenos" id="btnMenos${i}" onclick="fechaPergunta(Perguntas${i},btnMenos${i})"></h3>
        <div class="Pergunta" >
            <p id="Perguntas${i}">${perguntas[i].Texto}</p>
        </div>`;
        caixaFAQ.appendChild(card);
    }
    
}

function abrePergunta(idPergunta, idMenos)
{
    idPergunta.classList.add('abrir-pergunta');
    idMenos.classList.add('revelaMenos');
}

function fechaPergunta(idPergunta, idMenos)
{
    idPergunta.classList.remove('abrir-pergunta');
    idMenos.classList.remove('revelaMenos');
}