function verificarCondicaoIf(){

    idadeJogador = parseInt(prompt('digite a idade do jogador'));

    if(idadeJogador >= 18) {
        alert('profissional');

    } else if (idadeJogador >= 15 && idadeJogador < 18){
        alert('quase profissional');

    } else if (idadeJogador >= 12 && idadeJogador < 15) {
        alert('aspirante a quase profissional');

    } else {
        alert('dente de leite');
    }

}