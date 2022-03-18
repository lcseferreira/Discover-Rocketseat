// Callback function

function sayMyName(aName) {
    console.log("antes de executar a função");

    aName();

    function testCallback() {
        console.log("dentro de outro callback");
    }

    testCallback();
}

// Callback é uma função que está sendo passada como parâmetro para outra função
sayMyName(
    () => { // Passando uma função como argumento
        console.log("estou em uma callback");
    }
)