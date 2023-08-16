//MAP E SET: conjunto de valores que sao como objetos.


//MAP

let meuMap = new Map(); // map
//para adicionar um intem ao map, é utilizado o set:
meuMap.set("nome", "gian");
meuMap.set("stack", "html, css, js");

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has("sobrenome"))

//meuMap.clear() //limpeza dentro do map

console.log(meuMap.size)
//recuperar chaves
for (let chave of meuMap.keys()){
    console.log(chave);
}

//recupera valores
for (let valor of meuMap.values()){
    console.log(valor);
}

// for (let entrada of meuMap.entries()){
//     console.log(entrada);
// }
//com arrays:
for (let [chave, valor] of meuMap.entries()){
    console.log(`${chave}: ${valor}`);
}

//remover item dentro de um map
meuMap.delete("stack");
console.log(meuMap)


//----SET --- a chave é o valor//as funções do MAP estao incluidas no set
// nao permite numeros duplicados

const cpfs = new Set();

cpfs.add('24037070073')
cpfs.add('19736693074')
cpfs.add('06264645010')

console.log(cpfs)

console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) => {
    console.log(valor);
})

const array = ['Gian Souza', 'José Paulo', 'Maria Isabel', 'Luana', 'Luana', 'Gian Souza']
//convertendo um array como um SET{}
const arrayComoSet = new Set([...array])
//convertendo o SET como um array[]
const arraySemItensDuplicados = [...arrayComoSet]

//A diferença entre ARRAY E SET, SET: utiliza {}, ARRAY :utiliza []

console.log(arrayComoSet)
console.log(arraySemItensDuplicados)