var nome = "Eduardo";
console.log(nome)
var idade = 32;
console.log(idade)
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos`); // Declarar nome e idade = 1ª questão




var nome = "Eduardo";
var cidade = "Recife"
console.log(`${nome} é de ${cidade}`); // Declara nome e a cidade de onde é = 2ª questão




var num1 = 12
var num2 = 18

var soma = num1 + num2;
console.log(`A soma dá ${soma}`); // Resultado da soma = 3ª questão

var subtracao = num1 - num2;
console.log(`A subtração dá ${subtracao}`); // Resultado da subtração = 3ª questão

var multiplicacao = num1 * num2;
console.log(`A multiplicação dá ${multiplicacao}`); // Resultado da multiplicação = 3ª questão

var divisao = num1 / num2;
var final = divisao.toFixed(2)
console.log(`A divisão dá ${final}`); // Resultado da divisão = 3ª questão




var base = 10;
var altura = 6;
var areadotriangulo = (base * altura /2);

console.log(`A área do triângulo é ${areadotriangulo}`); // Resultado da área do triângulo = 4ª questão




var n1 = 8;
var n2 = 9;
var n3 = 5;

var media = (n1+n2+n3) / 3
var resultado = media.toFixed(2)

console.log(`Sua média é...${resultado}.`); // O cálculo da média = 5ª questão




var preco_original = 2000; // valor inicial
var percentual_de_desconto = 0.05; // percentual de desconto de 5%
var preco_final = preco_original - (preco_original * percentual_de_desconto);

console.log(`O preço final do produto após o desconto é R$ ${preco_final}`); // Valor final após desconto = 6ª questão



var salario_bruto = 6000; // salario bruto
var aliquota = 0.275; // percentual de 27,5% IR
var valor_devido = (salario_bruto * aliquota);
var valor_final = valor_devido.toFixed(2)

console.log(`O valor do imposto de renda a ser pago é R$ ${valor_final}`); // Valor do Imposto de Renda = 7ª questão

