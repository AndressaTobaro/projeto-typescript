const pessoa = {
    nome: "Mariana",
    idade: 28,
    profissão: "Desenvolvedora"
}

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: "André",
    idade: 25,
    profissao: "pintor"
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: "Paula",
    idade: 25,
    profissao: "desenvolvedora"
}

enum Profissao{
    professora,
    atriz, 
    desenvolvedora,
    jogadora,
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa{
    materias: string[],

}

const vanessa: Pessoa = {
    nome: "Vanessa",
    idade:23,
    profissao: Profissao.desenvolvedora,
}

const maria: {nome: string, idade: number, materias: string[]} = {
    nome: 'Maria',
    idade: 24,
    materias: ['Algoritmos', 'Lógica para computação']
 }


const jessica: Estudante = {
    nome: "Jessica",
    idade:27,
    profissao: Profissao.desenvolvedora,
    materias: ["Matemática discreta", "Programação"]
}

const monica: Estudante = {
    nome: "Monica",
    idade:27,
    materias: ["Matemática discreta", "Programação"]
}

function listar(lista:string[]){
    for(const item of lista){
        console.log('- ' + item)
    }
}

listar(monica.materias);
