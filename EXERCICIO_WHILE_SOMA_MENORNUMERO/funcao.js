function somaMenor() {
    
    menor = Number.MAX_VALUE
    soma = 0
    quantidadeIteracoes = 0;
    while (quantidadeIteracoes <= 4) {
        numeroAtual = parseInt(prompt('qual o próximo número?'));
        soma += numeroAtual;
        quantidadeIteracoes++;
        if (numeroAtual < menor){
            menor = numeroAtual;
        }
    } 

    
    alert('o menor número é ' + menor + ' e o resultado é '+ soma);
}
