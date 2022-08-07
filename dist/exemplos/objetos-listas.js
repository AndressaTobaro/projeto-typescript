"use strict";
const pessoa = {
    nome: "Mariana",
    idade: 28,
    profissão: "Desenvolvedora"
};
pessoa.idade = 25;
const andre = {
    nome: "André",
    idade: 25,
    profissao: "pintor"
};
const paula = {
    nome: "Paula",
    idade: 25,
    profissao: "desenvolvedora"
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["professora"] = 0] = "professora";
    Profissao[Profissao["atriz"] = 1] = "atriz";
    Profissao[Profissao["desenvolvedora"] = 2] = "desenvolvedora";
    Profissao[Profissao["jogadora"] = 3] = "jogadora";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: "Vanessa",
    idade: 23,
    profissao: Profissao.desenvolvedora,
};
const maria = {
    nome: 'Maria',
    idade: 24,
    materias: ['Algoritmos', 'Lógica para computação']
};
const jessica = {
    nome: "Jessica",
    idade: 27,
    profissao: Profissao.desenvolvedora,
    materias: ["Matemática discreta", "Programação"]
};
const monica = {
    nome: "Monica",
    idade: 27,
    materias: ["Matemática discreta", "Programação"]
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ' + item);
    }
}
listar(monica.materias);
