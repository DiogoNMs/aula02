//Aula 02

//Atividade 1

let number = prompt(`Digite um número inteiro: `);
number = parseInt(number);

if (number % 2 == 0 &&  number > 0) {
    console.log(`O número ${number} é par`)
    }
else if (number < 0){
    console.log(`O número é negativo`)
}    
else {
    console.log(`O número ${number} é ímpar`)
};

//Atividade 02

let weight = prompt(`Qual o seu peso em kg?`);
weight = parseFloat(weight);
let height = prompt(`E agora, qual a sua altura em metros?`);
height = parseFloat(height);

let imc = (weight/Math.pow(height,2)).toFixed(2)
imc = parseFloat(imc);

console.log(`Seu IMC é de ${(weight/Math.pow(height,2)).toFixed(2)}kg/m²`);


if (imc < 18.5) {
    console.log('Você está abaixo do Peso');
} 
else if (imc <= 25 && imc > 18.49) {
    console.log('Peso ideal');
} 
else if (imc <= 30 &&  imc > 25) {
    console.log('Acima do Peso');
} 
else if (imc <= 40 && imc > 30) {
    console.log('Obesidade grau 1');
} 
else {
    console.log('Obesidade grau 2');
};


//Atividade 03

let idade = prompt( `Digite a sua idade: `);
idade = parseInt(idade);

let preco = prompt(`Digite o preço do produto: `);
preco = parseFloat(preco);

if (idade < 18) {
    console.log (`Você tem direito ao desconto de 10%, o valor fica R$ ${preco*0.9}`)
}

else{
    console.log(`Você não tem direito a desconto, o valor fica R$ ${preco}`);
}

//atividade 04

const ladoA = parseFloat(prompt("Digite o comprimento do lado A: "));
const ladoB = parseFloat(prompt("Digite o comprimento do lado B: "));
const ladoC = parseFloat(prompt("Digite o comprimento do lado C: "));


if (ladoA + ladoB < ladoC || ladoA + ladoC < ladoB || ladoB + ladoC < ladoA) {
  console.log("Não é um triângulo");
} else if (ladoA === ladoB && ladoB === ladoC) {
  console.log("Triângulo equilátero");
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
  console.log("Triângulo isósceles");
} else {
  console.log("Triângulo escaleno");
}

//atividade 05

const dia = parseInt(prompt("Digite um número de 1 a 7 representando o dia da semana: "));

switch (dia) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  case 4:
    console.log("Quinta-feira");
    break;
  case 5:
    console.log("Sexta-feira");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Número inválido. Digite um número entre 1 e 7.");
}


//Atividade 06

const numero = parseInt(prompt("Digite um número: "));

let ehPrimo = true;

for (let i = 2; i <= Math.sqrt(numero); i++) {
  if (numero % i === 0) {
    ehPrimo = false;
    break;
  }
}

if (ehPrimo) {
  console.log("O número é primo");
} else {
  console.log("O número não é primo");
}

//Desafio

while (true) {
    
    console.log("\n**Menu de Cálculos Geométricos**");
    console.log("1. Calcular Área do Triângulo");
    console.log("2. Calcular Área do Retângulo");
    console.log("3. Calcular Volume do Cubo");
    console.log("4. Calcular Área do Círculo");
    console.log("5. Sair");
  
    
    const opcao = parseInt(prompt("Digite a opção desejada: "));
  
    
    switch (opcao) {
      case 1:
        
        const baseTriangulo = parseFloat(prompt("Digite a base do triângulo: "));
        const alturaTriangulo = parseFloat(prompt("Digite a altura do triângulo: "));
        const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
        console.log(`A área do triângulo é ${areaTriangulo}`);
        break;
      case 2:
        
        const baseRetangulo = parseFloat(prompt("Digite a base do retângulo: "));
        const alturaRetangulo = parseFloat(prompt("Digite a altura do retângulo: "));
        const areaRetangulo = baseRetangulo * alturaRetangulo;
        console.log(`A área do retângulo é ${areaRetangulo}`);
        break;
      case 3:
       
        const arestaCubo = parseFloat(prompt("Digite a aresta do cubo: "));
        const volumeCubo = arestaCubo ** 3;
        console.log(`O volume do cubo é ${volumeCubo}`);
        break;
      case 4:
        
        const raioCirculo = parseFloat(prompt("Digite o raio do círculo: "));
        const areaCirculo = Math.PI * raioCirculo ** 2;
        console.log(`A área do círculo é ${areaCirculo}`);
        break;
      case 5:
        
        console.log("Saindo do programa...");
        break;
      default:
        
        console.log("Opção inválida. Digite um número entre 1 e 5.");
    }
  
    
    if (opcao === 5) {
      break;
    }
  }