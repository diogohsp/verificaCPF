const btn = document.querySelector('#send');
const texto = document.querySelector('#texto');
const cpf = document.querySelector('#cpf').value;

export default function isCPF (cpf) {
    const tamanhoCPF = cpf.toString().length; 
    cpf = cpf.replace(/\.|-/g, "");
    
    if(verificaPrimeiroDigito(cpf) && verificaSegundoDigito(cpf)){
        texto.innerHTML=`<h2 id="texto">O CPF inserido é valido!</h2>`;
    }else {
        texto.innerHTML=`<h2 id="texto">O CPF inserido é inválido!</h2>`;
    }

    if(tamanhoCPF > 11 ){
        texto.innerHTML=`<h2 id="texto">O número inserido é grande demais para ser um CPF!</h2>`;
    } else if(tamanhoCPF < 11 && tamanhoCPF >= 1){
        texto.innerHTML=`<h2 id="texto">O número inserido é pequeno demais para ser um CPF!</h2>`;
    }
}

function verificaPrimeiroDigito(cpf){
    let soma = 0;
    let multiplicador = 10;

    for(let tamanho = 0; tamanho < 9; tamanho++){
        soma +=cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 1) {
        soma = 0;
    }

    console.log("O primeiro digito verificador é: "+soma);
    return soma == cpf[9];
}

function verificaSegundoDigito(cpf){
    
    let soma = 0;
    let multiplicador = 11;

    for(let tamanho = 0; tamanho < 10; tamanho++){
        soma +=cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 1) {
        soma = 0;
    }

    console.log("O segundo digito verificador é: "+soma);
    return soma == cpf[10];
}