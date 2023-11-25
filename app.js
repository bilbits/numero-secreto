// Mensagem de boas vindas
alert(`Olá, seja bem-vindo(A) ao jogo Número Secreto!`);

// Declarando variáveis
let numeroMaximo = 500;
let numeroSecreto = parseInt(Math.random() *numeroMaximo+1);
let numeroChute;
let tentativas = 1;
// Bloco de repetição
while (numeroChute != numeroSecreto) {
    // Recebendo resposta de um jogador
    numeroChute = prompt(`Escolha um número de 1 a ${numeroMaximo}`);

    // Comparando as escolhas do jogador
    if (numeroChute == numeroSecreto) {
        break;
    } else if (numeroChute > numeroSecreto) {
        alert(`O número ${numeroChute} é maior que o número secreto`);
    } else {
        alert(`O número ${numeroChute} é menor que o número secreto`);
    }

    tentativas++;
}

// Mensagem de vitória fora do loop
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);