
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
        console.log(`${numeroAnterior}${operador}${numAtual}`);
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
    console.log(operador);
    novoNumero = true;
    numeroAnterior =  resultado.textContent;
    console.log(numeroAnterior);
    

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

document.querySelector('.delete')
.addEventListener('click', ()=>{
   
})