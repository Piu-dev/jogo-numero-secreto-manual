function inicioJogo(){
    let titulo = document.querySelector('h1');
    titulo.innerHTML = 'Jogo do número secreto';
    let paragrafo = document.querySelector('p');
    paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
}
inicioJogo();

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}

let numerosecreto = gerarNumeroAleatorio();
console.log(`numero aleatorio: ${numerosecreto}`);
let contarTentativa = 1;

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
exibirTextoNaTela('h1','Jogo do numero secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numerosecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = contarTentativa > 1? "Tentativas" : "Tentativa";
        let mensagemTentativa =`Você acertou o numero secreto em ${contarTentativa} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    }else if(chute > numerosecreto){
  
            exibirTextoNaTela('h1','O numero secreto é menor');            
        } else{
            exibirTextoNaTela('h1','O numero secreto é maior');            
        }
        contarTentativa++;
        limparCampo();


}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    gerarNumeroAleatorio();
    contarTentativa = 1;
    limparCampo();
    inicioJogo();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}




    //Treinando funções
/* 
    function saudacao(nome){
    console.log(`Ola ${nome}, seja bem vindo!`);
}
saudacao('Marcos');
saudacao('Ana');

//____________________________________________________

/* function dobroDeNumero(numero){
    numero = numero *2;
    console.log(`O dobro do numero informado é: ${numero}`);
}
dobroDeNumero('5'); */

//____________________________________________________

/* function media3(numero1, numero2, numero3){
 let mediatotal = (numero1 + numero2 + numero3)/3;
 return mediatotal;
}
//Solicitando dados ao usuários
let valor1 = parseInt(prompt('Informe o valor 1'));
let valor2 = parseInt(prompt('Informe o valor 2'));
let valor3 = parseInt(prompt('Informe o valor 3'));

//Calculando a média
let mediacalculada = media3(valor1, valor2, valor3);

//Retornando a média
console.log(`A media calculada e ${mediacalculada}`); */

//____________________________________________________

//Funcao que retorna o máximo a partir de 02 parâmetros

/* function Maximo(num1, num2){
    if(num1 > num2){
        console.log (`O primeiro numero digitado: ${num1} e o maior`);
    } else if (num1 < num2) ;{
        console.log(`O segundo numero digitado: ${num2} e o maior`);
    } else {
             console.log(`Os numeros informados são iguais`);   
        }
    }

Maximo(10,8); */

/* function Maximo(num1, num2){
    if(num1 > num2){
        console.log(`O primeiro número digitado: ${num1} é o maior`);
    } else if (num1 < num2) {
        console.log(`O segundo número digitado: ${num2} é o maior`);
    } else {
        console.log(`Os números informados são iguais`);
    }
}

//Solicitando dados ao usuários
let valor1 = parseInt(prompt('Informe o valor 1'));
let valor2 = parseInt(prompt('Informe o valor 2'));

//Verificando valor máximo
Maximo(valor1, valor2); */

//_______________________________________________________________
//Tabuada

/* function tabuada(num){
    for( let i = 1; i <=10; i++){
        let vlrMultiplicado = num * i;
        console.log(`Valor multiplicado: ${num} x ${i} =  ${vlrMultiplicado}`); 
    }
    
}

let num1 = prompt('Informe o numero: ');
tabuada(num1);
 */

//_______________________________________________________________
//Arrays

/* let listaGenerica=[];
let linguagensDeProgramacao = ['javaScript', 'C','C++','Kotlin','Python'];
linguagensDeProgramacao.push('Java','Ruby','GoLang');
let ultimonome = linguagensDeProgramacao.length -1;
console.log(linguagensDeProgramacao[ultimonome]);
console.log(linguagensDeProgramacao.length); */

