//REST (OPERADOR) RESTANTE DOS CONTEUDOS

//arguments : interavel com possibilidade de realizar o "for", porém nao é um array.
function somar() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
    //arguments.map
    //console.log(arguments)
    //return a + b;
}

console.log(somar(10,20,30))
//Somando com o REST, é interavel com array, porém tem suas exessões, 
//- não pode ter mais de dois argumentos utilizados - tem que ser o ultimo argumentado.
function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total
    }, 0)
    return soma;
}

console.log(somarComRest(10,20,30))

//SPREAD : espalha os itens de um array
//usado para fazer con

const numeros = [1,2,3,4]
console.log(...numeros)

const timesDeFutebolDeSp = ['santos', 'palmeiras', 'bragantino', 'são paulo'];
const timesDeFutebolDoRio = ['vasco', 'botafogo', 'flamengo', 'fluminense'];

//const timesDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolDoRio); // juntando os dois com concat
const timesDeFutebol = [...timesDeFutebolDeSp, ...timesDeFutebolDoRio]; //espalhando valores para um novo array

console.log(timesDeFutebol)

//-----reaproveitando propriedades de um outro objeto com o spread (utilizado para clonar objetos e manipulações)
const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia, //copiando os atributos anteriores 
    motor: 1.8 // acrescentando novo conteudo diferente 
}

console.log(carroDaAna)


//--- desestruturação : acessar propriedades dentro de um objeto 
//const motorDoCarroDaAna = carroDaAna.motor;
const { motor: motorDoCarroDaAna } = carroDaAna;
const { motor: motorDoCarroDaJulia } = carroDaJulia;

console.log(motorDoCarroDaAna)
console.log(motorDoCarroDaJulia)

//desestruturação de um array 
const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;

console.log(item1)
console.log(item2)
console.log(item3)
console.log(outrosTimes)