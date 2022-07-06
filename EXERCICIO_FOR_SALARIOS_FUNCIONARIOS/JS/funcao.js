function salarioFor() {
    soma = 0;
    media = 0;
    quantFuncionario = parseInt(prompt('digite quantos funcionários tem na empresa'));
    if(quantFuncionario >= 2){

    for(numero = 1; numero <= quantFuncionario; numero++){
        recebeSalario = parseInt(prompt('digite o '+ numero +  'º salario'));
        soma = soma + recebeSalario;
        media = soma / quantFuncionario;
    }

    document.write('A média dos salários é R$ ' + media);

} else{
    alert('você não pode usar esse programa')
}    
}