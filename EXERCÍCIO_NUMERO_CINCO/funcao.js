function mediaTrinta() {
    quantidadeNumerosUsuario = parseInt(prompt('quantos números quer receber?'));
    soma = 0
    quantidadeIteracoes = 1;
    while (quantidadeIteracoes <= quantidadeNumerosUsuario) {
        var proxNum = parseInt(prompt('qual o próximo número?'));
        soma += proxNum;
        quantidadeIteracoes++;
    } 
    var media = soma / quantidadeNumerosUsuario 
    if (media > 30) {
        alert('talvez os números digitados sejam acima de 5');
    } else if (media <= 30) {
        alert('talvez os números digitados sejam iguais ou menores que 5')
    }

}