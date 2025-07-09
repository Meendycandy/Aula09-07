let nota1 = parseFloat(prompt("Digite a primeira nota"))
while (not1 < 0){
    nota1 = parseFloat(prompt("Nota inválida! A nota deve ser maior ou igual a zero. Digite a primaira nota novamente:"));
}

let nota2 = parseFloat(prompt("Digite a segunda nota: "));
while (nota2 <0){
    nota2 = parseFloat(prompt("Nota inválida! A nota deve ser maior ou igua a zero. Digite a segunda nota novamente:"));
}

let media = (nota1 + nota2) /2;

if (medida>=7){
   alert("Aluno aprovado!");
}else{
   alert("Aluno reprovado.");
}

