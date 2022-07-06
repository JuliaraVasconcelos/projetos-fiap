function mediaSalario() {
    soma = 0
    quantidadeIteracoes = 1;
    do {
        var salario = parseInt(prompt('digite '+ quantidadeIteracoes +  'º salário'));
        soma += salario;
        quantidadeIteracoes++;
    } while (quantidadeIteracoes <= 5)
    var media = soma / 5 
    alert('a sua média salarial é ' + media)

}