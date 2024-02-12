// Número limite
let numeroLimite = 100;

// Números sorteados
let numerosSorteados = [];

// Mensagem de boas vindas
function mensagemDeBoasVindas(tag, texto) {
    let mensagemDeBoasVindas = document.querySelector(tag);
    mensagemDeBoasVindas.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );

}



// Função dos números randômicos
function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 100 + 1);
    let quantidadeElementosNaLista = numerosSorteados.length;

    if (quantidadeElementosNaLista === numeroLimite) {
        numerosSorteados = [];
    }

    if (numerosSorteados.includes(numeroEscolhido)) {
        return numeroAleatorio();
    } else {
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

// Chamando a função de mensagem inicial.
mensagemInicial();

// Gerar número aleatório
let numeroSecreto = numeroAleatorio();

// Tentativas
let tentativas = 1;

// Função verificar chute
function verificarChute() {
    let numeroChute = document.querySelector('input').value;

    // Comparando números
if (numeroChute<1||numeroChute>100) {
mensagemDeBoasVindas('p', 'O número digitado é inválido');
}
    else if (numeroChute == numeroSecreto) {
        mensagemDeBoasVindas('h1', 'Parabéns!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        mensagemDeBoasVindas('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (numeroChute > numeroSecreto) {
        mensagemDeBoasVindas('h1', 'Você errou!');
        mensagemDeBoasVindas('p', 'O número secreto é menor!');
    } else {
        mensagemDeBoasVindas('h1', 'Você errou!');
        mensagemDeBoasVindas('p', 'O número secreto é maior!');
    }

    tentativas++;
    limparCampo();
}

// Limpar campo
function limparCampo() {
    let numeroChute = document.querySelector('input');
    numeroChute.value = '';
}

// Mensagem inicial
function mensagemInicial() {
    mensagemDeBoasVindas('h1', 'Seja bem-vindo(a) ao jogo do Número Secreto!');
    mensagemDeBoasVindas('p', 'Escolha um número entre 1 e 100');
}

// Novo jogo
function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}
