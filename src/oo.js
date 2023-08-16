// function Pokemon(nome, tipo) {
//     this.nome = nome;
//     this.tipo = tipo;
// }

// const pikachu = new Pokemon("Pikachu", "elétrico")

class Pokemon {
    // nome = '';
    // tipo = '';
    #hp = 100; // "#" : se tornando privado
    //usando o construtor
    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }
//criando um metodo
    atacar(nomeDoAtaque){
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }

    recebeuAtaque(){
        this.#hp -= 10;
    }
    //criando um novo metodo para mostrar atributo privado
    exibeHp() {
        console.log(this.#hp);
    }
}

//-----HERANÇA "extends"----------
class Pikachu extends Pokemon {
    constructor(){
        //como se fosse uma função, o super chama o construtor da classe mãe
        super('Pikachu', 'Eletrico')
    }
    //polimorfismo
    atacar(){
        console.log(`${this.nome} atacou com atacou com choque do trovão`)
    }
}
const pikachuDoAsh = new Pikachu()

//---encapsulamento, reposta
pikachuDoAsh.recebeuAtaque(); 
pikachuDoAsh.hp = 5000;
console.log(pikachuDoAsh.hp);
//--------------------------
pikachuDoAsh.atacar()
//-------continuação, exibindo atributo privado
pikachuDoAsh.exibeHp()
//---------------------------------
const pikachu = new Pokemon('pikachu', 'elétrico');
// pikachu.atacar('choque do trovão')
// pikachu.nome = 'pikachu';
// pikachu.tipo = 'elétrico'

console.log(pikachu)
console.log(pikachuDoAsh)

console.log(pikachuDoAsh instanceof Pikachu); 
// verificando se é uma instacia, resultado em boleano