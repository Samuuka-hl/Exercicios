function calcularTotal() {
    // Obtém os valores dos inputs
    var nome = document.getElementById('nome').value;
    var valorHora = parseFloat(document.getElementById('valorHora').value);
    var totalHoras = parseFloat(document.getElementById('totalHoras').value);

    // Calcula o total geral
    var totalGeral = valorHora * totalHoras;

    // Atualiza o input de total geral com o resultado formatado para duas casas decimais
    document.getElementById('totalGeral').value = totalGeral.toFixed(2);
}
