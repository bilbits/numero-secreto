// Mensagem de boas vindas
alert('Olá! Seja bem-vindo(A) ao jogo do Número Secreto!');
//Declaração de variáveis
let numeroSecreto = parseInt(Math.random() *100 + 1);
let numeroChute;
let nuneroMaximo = 100;
let tentativas =1;

// Enquanto o número chutado não for igual o número secreto.
while (numeroChute!=numeroSecreto) {
    // Chamando o prompt.
    numeroChute = Number(prompt(`Escolha um número entre 1 e ${nuneroMaximo}`));
// Comparando variáveis.
if (numeroChute<1||numeroChute>100) {
    alert('O número digitado é inválido. Tente novamente.');
} else if (numeroChute==numeroSecreto){
    break;
} else if (numeroChute>numeroSecreto) {
    alert(`O número secreto é menor do que o número ${numeroChute}`);
} else {
    alert(`O número secreto é maior do que o número ${numeroChute}`);
}
// encrementando o número de tentativas.
tentativas++;
}
// Vitória!
let palavraTentativa = tentativas > 1 ? 'tentativas.' : 'tentativa.';

alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);