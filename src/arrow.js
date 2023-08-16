//arrow: No ES6 tivemos a introdução de uma nova forma de 
//escrever funções, o arrow function: 
//Além da escrita ser menos verbosa o contexto da execução
//de uma arrow function é diferente, considere:
/*
const minhaFuncao = (argumento) => {
    console.log("Diz oi");
}
minhaFuncao()
// forma curta e simplificada: 
const minhaFuncao = () => "Diz ola";
console.log(minhaFuncao())
*/
//quando se retorna um objeto, é aplicado:
const minhaFuncao = () => "Diz ola";

const retornaUmCarro = () => ({
    modelo:'Ka',
    fabricante: 'Ford'
})
console.log(minhaFuncao())
console.log(retornaUmCarro())

const carro = {
    velocidadeAtual: 40,
    acelerar: function(){
        console.log(this)
        this.velocidadeAtual += 10;
    },
    frear: () => {
        console.log(this)
        this.velocidadeAtual -= 10;
    }
}

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual)