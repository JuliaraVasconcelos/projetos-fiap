function salarioFor() {
    soma = 0;
    media = 0;
    
    for(numero = 1; numero <= 5; numero++){
        recebeSalario = parseInt(prompt('digite o '+ numero +  'º salario'));
        soma = soma + recebeSalario;
        media = soma / 5;
    } if(media <= 5000){
        alert('Rever o salário desse profissional')
    } else {
        alert('A média salarial deste funcionário está correta')
    }
    
    alert('essa é a sua media salarial ' + media);
}
