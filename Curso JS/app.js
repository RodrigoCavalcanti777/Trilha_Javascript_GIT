let pessoa = {
    nome: 'Rodrigo',
    sobrenome: 'Silva'
}
console.log(pessoa);

let nome = {
    nome: 'Rodrigo',
    sobrenome: 'Cavalcanti'
}

let formula1 = ['Senna', 2, 1, 3];
console.log(formula1);

let carros = ['camaro', 'fox', 'corvete']
console.log(carros)

//functions
function Dobro(numero) {
    return numero * 2;
}

console.log(Dobro(5));


let pontos = 101;
let tipo = pontos > 100 ? 'premium' : 'comum'

console.log(tipo);


let nota = 6;

if (nota <= 4) {
    console.log('Voce está na recuperação');

} else {
    console.log('Voce está aprovado');
}



let permissao
permissao = 'rodrigo';

switch (permissao) {
    case 'comum':
        console.log('Usuário Comum');
        break;
    case 'gerente':
        console.log('Voce é um gerente');
        break;
    case 'vip':
        console.log('Voce é um cliente vip');
        break;

    default:
        console.log('Usuario nao reconhecido')
        break;
}

//Estrutura de repetição for
let i = 0;

for (let i = 0; i < 5; i++) {
    console.log('Estou aprendendo', i);

}
//do..while
do {
    console.log('Digitando!');
    i++
} while (i < 10)

//for..in
const pessoas = {
    nome: 'Rodrigo',
    idade: 20
}

for (let chave in pessoas) {
    console.log(chave, pessoas.nome);
}

//Retornar maior entre Dois Valores

function maiorNumero(num1, num2) {
    if (num1 > num2) {
        console.log('O maior número é ' + num1);
    } else if (num2 > num1) {
        console.log('o maior número é ' + num2);
    }
}

maiorNumero(100, 30);

//fizzBuzz
const resultado = FizzBuzz(45);
console.log(resultado);

function FizzBuzz(entrada) {

    if (typeof entrada != 'number') {
        return 'Só e permitido a entrada de Numeros'
    }
    else if (entrada % 3 === 0 && entrada % 5 === 0) {
        return 'FizBuzz'
    }
    else if (entrada % 3 === 0) {
        console.log('Fizz')
    }
    else if (entrada % 5 === 0) {
        return 'Buzz'

    } else {
        return entrada;
    }



}

//par ou impar 
exibirTipo(20);

function exibirTipo(limite) {

    for (let i = 0; i <= limite; i++) {
        if (i % 2 === 0)
            console.log(i, 'Par');
        else
            console.log(i, 'impar');

    }

}

function Tipo (indice){
    for(let a = 0; a <= indice; a++){
    if(a % 2 === 0)
    console.log(a, 'par')
    else
    console.log(a, 'Impar')
    }
}

Tipo(10)


let computador = {

    Processador: 'Ryzen',
    IdDeFabricação: 1000200,
    Teclado: 'T-Dagger',
    garantia: 3
}
ValorObjeto(computador);
function ValorObjeto(computador) {

    for (prop in computador)
        if(typeof computador[prop] === 'string'){
            console.log(prop, computador[prop])
        }
    

}

