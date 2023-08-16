const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}
///* i = indice incial do array
//----USANDO O "FOR" NO ES6--- metodos para array 

//forEach : só intera, nao retorna
redesSociais.forEach(function(nomeDaRedeSocial, indice){
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

//metodo map = iterar por um array e criar um novo, modificar e retornar 
const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
//criar uma variavel para armazenar a funçao criada
const alunos2 = alunos.map(function(intemAtual){
    
    // intemAtual = {
    //     nome: intemAtual,
    //     curso: 'Frontend'
    // }
    // return intemAtual;
    //OUTRA POSSIBILIDADE MAIS CURTA É INCLUINDO APENAS O RETORN
    return {
        nome: intemAtual,
        curso: 'Frontend'
    }
    
})
//se chama a variavel no node 
console.log(alunos2)

/*const numeros = [1, 2, 3, 4, 5]
const dobroDosNumeros = numeros.map(function(numeroAtual){
    //numeroAtual = numeroAtual * 2;
    //OUTRA POSSIBILIDADE MAIS CURTA É INCLUINDO APENAS O RETORN
    return numeroAtual * 2;
})

console.log(dobroDosNumeros)*/


//METODO PARA ENCONTRAR ITEM DENTRO DE UM ARRAY "find"

const paula = alunos2.find(function(item) {
    return item.nome == 'Paula' //retorna boleano, true our false
})

console.log(paula)
// metodo, que retorna o indice do item dentro do array"findIndex"
const indiceDaPaula = alunos2.findIndex(function(item) {
    return item.nome == 'Paula' //retorna boleano, true our false
})
console.log(indiceDaPaula)

//METODOS PARA VERIFICAR VALORES DENTRO DE UM ARRAY 
//"every" == verifica todos os itens no array, se todos os item dentro do array eles satisfazem a uma condição 
// "some" == verifica se pelo menos 1 item desse array contempla, satisfaz uma condição (tolerante)

alunos2.push({ //adicionando item 
    nome: 'Lucio',
    curso: 'Backend'
})

const todosAlunosSaoDeFrontend = alunos2.every(function(item){
    return item.curso === 'Frontend' //retorna boleano, true our false
})

console.log(todosAlunosSaoDeFrontend)

const existeAlgumAlunoDeBackend = alunos2.some(function(item){
    //return item.curso === 'Backend' //retorna boleano, true our false
    return item.curso === 'Backend' && item.curso === 'Frontend' //retorna boleano, true our false
})

console.log(existeAlgumAlunoDeBackend);
//-------
function filtraAlunosDeBackend(aluno) {
    return aluno.curso === 'Backend';
}

 // VERSAO MAIS CURTA
const alunosDeBackend = alunos2.filter(filtraAlunosDeBackend)

//função anonima -- 
/*const alunosDeBackend = alunos2.filter(function(item) {
    return item.curso === 'Backend'
})*/

console.log(alunosDeBackend)

//-----

//"reduce" reduz conteudo de um array em um unico valor
/* += : agrega valor sem interferir no anterior 
(em uma instrutura numera gera uma soma, e em uma string gera concatenação).*/

const nums = [10, 20, 30, 10]
//abordagem mais simples, recurso novo
const soma = nums.reduce(function(acumulador, itemAtual){
    acumulador += itemAtual;
    return acumulador
}, 0)

console.log(soma);

//reduce com string
const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual){
    acumulador += `${itemAtual.nome} `;
    return acumulador;
}, '')
console.log(nomesDosAlunos);


//somando com o FOR, abordagem mais complexa, antiga
let somaComFor = 0;

for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i];
}

console.log(somaComFor);

