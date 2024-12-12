let btnMais = document.getElementById('btnMais');
let btnMenos = document.getElementById('btnMenos')
let perguntas = document.getElementById('Perguntas');

btnMais.addEventListener('click',()=>{
    perguntas.classList.add('abrir-pergunta'),
    btnMenos.classList.add('revelaMenos')
});

btnMenos.addEventListener('click',()=>{
    perguntas.classList.remove('abrir-pergunta'),
    btnMenos.classList.remove('revelaMenos')
});