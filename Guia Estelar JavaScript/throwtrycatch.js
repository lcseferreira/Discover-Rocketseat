/*

    throw (disparar)

    try ... catch (tentar ... capturar)

*/

function sayMyName(name = '') {
    if (name === '') throw new Error("Nome é obrigatório");

    console.log("Deu certo!");
}

try {
    sayMyName();
} catch (e) {
    console.log(e);
}