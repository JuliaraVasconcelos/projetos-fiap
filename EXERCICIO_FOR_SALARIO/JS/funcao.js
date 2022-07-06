function salarioFor() {
    soma = 0;
    media = 0;

    for(numero = 0; numero < 5; numero++){
        recebeSalario = parseInt(prompt('digite o salário'));
        soma = soma + recebeSalario;
    }
    media = soma / 5;
    alert('essa é a sua media salarial ' + media);
}
