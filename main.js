// Tabela de notas do aluno
var notas = [3, 9, 5];

// Variável que indicará a soma das notas do aluno
var somaDasNotas = 0;

// For loop dinâmico que soma todos os valores dentro da tabela "notas"
for (var i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i]
}

// Formula que calcula a média do aluno
var media = somaDasNotas / notas.length;

// If Else que determina se o aluno foi aprovado ou reprovado
if (media >= 6) {
    console.log("O aluno foi aprovado com a media de: " + media.toFixed(2) + ".")
} else {
    console.log("O aluno foi reprovado com a media de: " + media.toFixed(2) + ".")
}