function mediaSalarioWhile() {
    soma = 0
    quantidadeIteracoes = 1;
    quantFuncionario = parseInt(prompt('digite quantos funcionários tem na empresa'));
    if(quantFuncionario >= 2){

    while (quantidadeIteracoes <= quantFuncionario) {
        salario = parseInt(prompt('digite '+ quantidadeIteracoes +  'º salário'));
        soma += salario;
        quantidadeIteracoes++;
        media = soma / 5
    } 
    
        document.write('A média dos salários é R$ ' + media);
    } else {
        alert('você não pode usar esse programa');
    }
}   
