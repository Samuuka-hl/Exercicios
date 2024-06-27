function ordenaArray(array) {
    if (array.length !== 2) {
        throw new Error('O array deve conter exatamente 2 números.');
    }

    let [num1, num2] = array;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Os elementos do array devem ser números.');
    }

    if (num1 > num2) {
        [num1, num2] = [num2, num1];
    }

    return [num1, num2];
}

document.addEventListener('DOMContentLoaded', function() {
    const ordenarButton = document.getElementById('ordenarButton');
    const resultadoElement = document.getElementById('resultado');

    ordenarButton.addEventListener('click', function() {
        const numero1 = parseFloat(document.getElementById('numero1').value);
        const numero2 = parseFloat(document.getElementById('numero2').value);

        const arrayNumeros = [numero1, numero2];

        try {
            const resultado = ordenaArray(arrayNumeros);
            resultadoElement.textContent = `Números ordenados: ${resultado[0]} e ${resultado[1]}.`;
        } catch (error) {
            resultadoElement.textContent = `Erro: ${error.message}`;
        }
    });
});
