// Função para pedir ao usuário que insira 3 números e manipular o array
function manipularArray() {
    let numeros = [];

    // Pedir ao usuário que insira 3 números usando prompt
    for (let i = 0; i < 3; i++) {
        let numero = prompt(`Digite o ${i + 1}º número:`);
        numeros.push(parseFloat(numero)); // Converter para número e adicionar ao array
    }

    // Exibir o array original
    console.log("Array original:", numeros);

    // Modificar a ordem dos elementos do array
    // Modificar para a sequência desejada: terceiro, primeiro, segundo
    if (numeros.length === 3) {
        let [primeiro, segundo, terceiro] = numeros;
        numeros = [terceiro, primeiro, segundo];
    }

    // Exibir o array modificado
    console.log("Array modificado:", numeros);
}

// Chamar a função quando o script é carregado
manipularArray();
