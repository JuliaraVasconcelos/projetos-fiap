function mediaSalarioWhile() {
    soma = 0
    quantidadeIteracoes = 1;
    do {
        salario = parseInt(prompt('digite '+ quantidadeIteracoes +  'º salário'));
        soma += salario;
        quantidadeIteracoes++;
        media = soma / 5
    } while (quantidadeIteracoes <= 5)
    if(media <= 5000){
        alert('Rever o salário desse profissional')
    } else {
        alert('A média salarial deste funcionário está correta')
    }
}   
