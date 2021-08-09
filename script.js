
 var resultado = document.querySelector('.result');
 var numeros = document.querySelectorAll('.number');
 var operator = document.querySelectorAll('[class*=operator]');
 var numeroAnterior;
 var operador;
 var novoNumero = true;
 var numAtual;



 function atualizarDisplay(numero){
        if(novoNumero == true){
            resultado.innerHTML = `${numero}`;
            novoNumero = false;
         }else{
            resultado.innerHTML += `${numero}`;
         }
 }


 
const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
numeros.forEach(numero => numero.addEventListener('click',inserirNumero));



function fazerOperacao(){
    if(operador && numeroAnterior != undefined){
        numAtual = resultado.innerHTML;
        let conta = `${numeroAnterior}${operador}${numAtual}`;
        let valorFinal = eval(conta);
        resultado.innerHTML = `${valorFinal}`;
        novoNumero = true;
        numeroAnterior = valorFinal;
    }
}

const selecionarOperador  = (evento) => {
    if(novoNumero == false){
        fazerOperacao();
    }
    operador = evento.target.value;
    novoNumero = true;
    numeroAnterior =  resultado.textContent;

}
operator.forEach(operador => operador.addEventListener('click', selecionarOperador));


document.querySelector('.equals')
.addEventListener('click', ()=>{
    fazerOperacao();
});




document.querySelector('.reset')
.addEventListener('click', ()=>{
    resultado.innerHTML = "0";
    novoNumero = true;
    operador = undefined;
    numAtual = undefined;
    numeroAnterior = undefined;
})



document.querySelector('.decimal')
.addEventListener('click', ()=>{
    if(resultado.textContent.indexOf('.') == -1){
        if(novoNumero == true){
            atualizarDisplay('0.');
        }else{
            atualizarDisplay('.');
        }
    }
})


document.querySelector('.switch-sign')
.addEventListener('click', ()=>{
    resultado.innerHTML = resultado.innerHTML *  -1;
    
})