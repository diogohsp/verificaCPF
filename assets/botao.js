import isCPF from "./verificaCPF.js";

const btn = document.querySelector('#send');
const texto = document.querySelector('#texto');
texto.innerHTML=`<h2 id="texto">Insira o CPF!</h2>`


btn.addEventListener('click', function(e) {
    e.preventDefault();
    const cpf = document.querySelector('#cpf').value;
    isCPF(cpf);
    

})

