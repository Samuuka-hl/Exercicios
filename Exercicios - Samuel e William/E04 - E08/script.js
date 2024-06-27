// Passo 4: Criar o array inicial
        let frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga'];

        // Passo 5: Exibir o segundo elemento do array
        console.log("Segundo elemento:", frutas[1]);

        // Passo 6: Exibir o último elemento do array sem usar o índice diretamente
        console.log("Último elemento:", frutas[frutas.length - 1]);

        // Passo 7.1: Adicionar 'abacaxi' no final do array usando push()
        frutas.push('abacaxi');
        console.log("Array após adicionar 'abacaxi' no final:", frutas);

        // Passo 7.2: Adicionar 'morango' no início do array usando unshift()
        frutas.unshift('morango');
        console.log("Array após adicionar 'morango' no início:", frutas);

        // Passo 7.3: Remover o primeiro elemento do array usando shift()
        let primeiroElementoRemovido = frutas.shift();
        console.log("Array após remover o primeiro elemento:", frutas);
        console.log("Elemento removido:", primeiroElementoRemovido);

        // Passo 7.4: Remover o último elemento do array usando pop()
        let ultimoElementoRemovido = frutas.pop();
        console.log("Array após remover o último elemento:", frutas);
        console.log("Elemento removido:", ultimoElementoRemovido);
		
		// Encontrar o índice da string 'laranja' usando indexOf()
        let indiceLaranja = frutas.indexOf('laranja');

        // Exibir o índice encontrado no console
        console.log("Índice da 'laranja' no array:", indiceLaranja);
		 let frutasComM = frutas.filter(function(fruta) {
            return fruta.startsWith('m');
        });

        // Exibir o novo array no console
        console.log("Frutas que começam com a letra 'm':", frutasComM);