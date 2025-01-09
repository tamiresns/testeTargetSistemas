function isFibonacci(num) {
    let a = 0;
    let b = 1;

    if (num === 0 || num === 1) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    }

    while (b < num) {
        let temp = b;
        b = a + b; 
        a = temp;
    }

    if (b === num) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${num} não pertence à sequência de Fibonacci.`;
    }
}

const input = prompt("Digite um número para verificar se pertence à sequência de Fibonacci:");
const numero = parseInt(input, 10);

if (!isNaN(numero)) {
    console.log(isFibonacci(numero));
} else {
    console.log("Por favor, insira um número válido.");
}