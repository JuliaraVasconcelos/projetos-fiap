function mediaSalario() {
    soma = 0
    quantidadeIteracoes = 1;
    while (quantidadeIteracoes <= 5) {
        var salario = parseInt(prompt('digite '+ quantidadeIteracoes +  'º salário'));
        soma += salario;
        quantidadeIteracoes++;
    } 
    var media = soma / 5 
    alert('a sua média salarial é ' + media)

}