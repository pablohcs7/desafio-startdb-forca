class Forca {
  letrasChutadas = []
  chutes = 0 //quantidade de chutes executados
  vidas = 6
  palavraChutada = [] //array com as letras validas chutadas
  palavra = ''
  palavraChutadaString = '' //array de letras validas chutadas convertido em string para comparação

  constructor(palavraSecreta) {
    //atribui a palavra secreta ao objeto palavra e cria o array de palavraChutada
    this.palavra = palavraSecreta
    for (let i = 0; i < palavraSecreta.length; i++) {
      this.palavraChutada.push('_')
    }
  }

  chutar(letra) {
    var letraCorreta = 0 //verifica se continha a letra chutada na palavra

    if (letra.length > 1) {
      //verifica se o chute possui mais de uma letra
      return
    }
    for (let i = 0; i < this.letrasChutadas.length; i++) {
      // verifica se a letra já foi chutada
      if (this.letrasChutadas[i] == letra) {
        return
      }
    }
    this.letrasChutadas.push(letra)

    for (let i = 0; i < this.palavra.length; i++) {
      //verifica se a letra chutada corresponde com a palavra secreta
      if (letra == this.palavra[i]) {
        this.palavraChutada[i] = letra
        letraCorreta++
      }
    }

    if (letraCorreta == 0) {
      this.vidas--
    }
    this.palavraChutadaString = this.palavraChutada.join('') //Transforma o array de palavraChutada em uma string para comparação
  }

  buscarEstado() {
    if (this.vidas == 0) {
      return 'perdeu' //se a quantidade de vidas for 0 o jogador perde
    } else if (this.palavraChutadaString == this.palavra) {
      return 'ganhou' //se a palavra chutada for igual a palavra secreta o jogador vence
    } else {
      return 'aguardando chute' //se nenhuma das condições acima for verdadeira aguarda o chute
    }
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavraChutada // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}

module.exports = Forca
