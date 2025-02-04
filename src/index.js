// Função para validar o número do cartão de crédito usando o algoritmo de Luhn
function validarNumeroCartao(numero) {
    const reversedDigits = numero.split('').reverse().map(digit => parseInt(digit, 10));
    const sum = reversedDigits.reduce((acc, digit, idx) => {
        if (idx % 2 === 1) {
            const doubled = digit * 2;
            return acc + (doubled > 9 ? doubled - 9 : doubled);
        }
        return acc + digit;
    }, 0);
    return sum % 10 === 0;
}

// Função para determinar a bandeira do cartão de crédito
function determinarBandeira(numero) {
    const prefix = numero.substring(0, 2);
    if (/^4/.test(numero)) {
        return 'Visa';
    } else if (/^5[1-5]/.test(numero)) {
        return 'MasterCard';
    } else if (/^3[47]/.test(numero)) {
        return 'American Express';
    } else if (/^6(?:011|5)/.test(numero)) {
        return 'Discover';
    } else if (/^3(?:0[0-5]|[68])/.test(numero)) {
        return 'Diners Club';
    } else if (/^35/.test(numero)) {
        return 'JCB';
    } else if (/^38|^60/.test(numero)) {
        return 'Hipercard';
    } else if (/^(4011|4312|4389|4514|4576|5041|5066|5067|509|6277|6362|6363|650|6516|6550)/.test(numero)) {
        return 'Elo';
    } else if (/^4[0-9]{15}$/.test(numero)) {
        return 'VISA Visa 16 Digitos';
    } else if (/^2014|2149/.test(numero)) {
        return 'EnRoute';
    } else if (/^8699/.test(numero)) {
        return 'Voyage';
    } else if (/^50[0-9]{14,17}$/.test(numero)) {
        return 'Aura';
    } else {
        return 'Desconhecida';
    }
}

// Bandeiras adicionadas agora como segunda parte:
// - VISA Visa 16 Digitos
// - EnRoute
// - Voyage
// - Aura

// Função principal para validar e determinar a bandeira do cartão
function validarEBandeiraCartao(numero) {
    if (validarNumeroCartao(numero)) {
        return determinarBandeira(numero);
    } else {
        return 'Número de cartão inválido';
    }
}

// Exemplo de uso
const numeroCartao = '3549227684073324'; // Substitua pelo número do cartão a ser validado
console.log(validarEBandeiraCartao(numeroCartao));

// Numeros de teste
// Visa: 4532015112830366
// MasterCard: 5252842788123294
// American Express: 371449635398431
// Discover: 6011111111111117