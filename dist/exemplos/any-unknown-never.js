"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = "teste";
anyEstaDeVolta = 5;
let stringTeste = "Verificar";
stringTeste = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = "ola";
unknownValor = true;
unknownValor = "vai sim";
let stringTeste2 = "agora vai";
// stringTeste2 = unknownValor;
// if(typeof unknownValor==="string"){
//     stringTeste2 = unknownValor;
// }
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);
